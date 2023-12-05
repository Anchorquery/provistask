"use strict";

/**
 *  task controller
 */
let geolib = require("geolib");
const { Client } = require("@googlemaps/google-maps-services-js");
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::task.task", ({ strapi }) => ({
  async findOne(ctx) {
    try {
      const user = ctx.state.user;

      if (!user) {
        return ctx.unauthorized("No tienes permiso", {
          error: "No autorizado",
        });
      }

      const { lat, lng } = ctx.query;

      //		las elimino de la query

      delete ctx.query.lat;
      delete ctx.query.lng;

      let entity = await super.findOne(ctx);

      if (entity.data.attributes.provider) {
        let idProvider = entity.data.attributes.provider.data.id;

        const proveedor = await strapi.entityService.findOne(
          "plugin::users-permissions.user",
          idProvider,
          {
            populate: ["avatar_image", "location", "skills"],
          }
        );

        if (lat && lng) {
          let distance = await geolib.getDistance(
            { latitude: lat, longitude: lng },
            { latitude: proveedor.lat, longitude: proveedor.lng }
          );

          // Convertir distancia a kilómetros
          distance = distance / 1000;

          // Redondear distancia a 2 decimales
          distance = Math.round(distance * 100) / 100;

          // Agregar distancia al objeto proveedor
          proveedor.distanceLineal = distance;

          // Calcular distancia usando Google Maps
          /*  const distanceGoogle = await this.calcularDistancia(
              lat,
              lng,
              proveedor.lat,
              proveedor.lng
            );*/

          // Agregar distancia Google Maps al objeto proveedor
          proveedor.distanceGoogle = distance;

          //elimino datos no necesarios como lo son createdAt ,	updateAt , provider ,password ,"resetPasswordToken ,confirmationToken ,
        }
        proveedor.avatar_image = proveedor.avatar_image
          ? proveedor.avatar_image.url
          : null;

        delete proveedor.createdAt;
        delete proveedor.updatedAt;
        delete proveedor.provider;
        delete proveedor.password;
        delete proveedor.resetPasswordToken;
        delete proveedor.confirmationToken;
        delete proveedor.location;
        delete proveedor.lat;
        delete proveedor.lng;
        delete proveedor.stripe_connect_id;
        delete proveedor.stripe_customer_id;

        const horasDisponibles = this.getTimes(
          proveedor.open_disponibility,
          proveedor.close_disponibility
        );

        proveedor.car = proveedor.car ? true : false;

        proveedor.truck = proveedor.truck ? true : false;

        proveedor.motorcycle = proveedor.motorcycle ? true : false;

        proveedor.horasDisponibles = horasDisponibles;

        if (proveedor.skills) {
          proveedor.skills = proveedor.skills.map((skill) => skill.name);
        }

        entity.data.attributes.provider = proveedor;
      }

      console.log(entity.data.attributes.provider);
      return entity;
    } catch (error) {
      console.log(error);
    }
  },
  async find(ctx) {
    try {



      let  { start,limit , featured} = ctx.query;




      start = start ? parseInt(start) : 0;

      limit = limit ? parseInt(limit) : 6;

      featured = featured ? featured : false;


      const entity = await strapi.entityService.findMany('api::category.category', 

      {
        fields : ["id","title","costAverage","rating", "description", "countPurchase"],
        filters: {
          featured: featured, 
          status : true
        },
        populate: ["image", "categoria"],
        start,
        limit
      }
      );
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);





  
      let { data, meta } = this.transformResponse(sanitizedEntity);



      for (let i = 0; i < data.length; i++) {


        let categoriaHome = data[i].attributes;

        // image 

        categoriaHome.image =   categoriaHome.image ?  process.env.URL + categoriaHome.image.data.attributes.url : null;

        // categoria

        if(categoriaHome.categoria){

          categoriaHome.categoria = {
            id : categoriaHome.categoria.id,
            name : categoriaHome.categoria.name,
            slug : categoriaHome.categoria.slug,

          }

        }else	{
            
            categoriaHome.categoria = null;
        }


        // busco en api::provider-skill.provider-skill el campo cost  filtrando que type_price sea per_hour

        const providerSkillP =  strapi.entityService.findMany('api::provider-skill.provider-skill',

        {

          filters : {

            categorias_skill : {

              id : categoriaHome.categoria.id

            },
          
            type_price : "per_hour"

          },

          fields : ["cost"],


        });

        const valoracionesP =  strapi.entityService.findMany('api::valoration.valoration',

        {

          filters : {

            categorias_skill : {

              id : categoriaHome.categoria.id

            }

            

          },

          fields : ["valoration"],

        });

        // cuento la cantidad de tareas asignadas a la categoria api::task-assigned.task-assigned para saber cuantas tareas se han realizado de esa categoria

        const taskAssignedP =  strapi.entityService.count('api::task-assigned.task-assigned',

        {

          filters : {

            categorias_skill : {

              id : categoriaHome.categoria.id

            },

            status : "completed"


          },

        });





        const [providerSkill,valoraciones, taskAssigned] = await Promise.all([providerSkillP,valoracionesP,taskAssignedP]);

        // si providerSkill tiene datos hago un promedio de los costos y lo agrego a categoriaHome en el campo acgcost


        if(providerSkill.length > 0){

          let cost = 0;

          for (let i = 0; i < providerSkill.length; i++) {
            
            cost += providerSkill[i].cost;
            
          }

          categoriaHome.costAverage = cost / providerSkill.length;

        }

        // busco valoraciones api::valoration.valoration filtrando por categorias_skill




        // si valoraciones tiene datos hago un promedio de las valoraciones y lo agrego a categoriaHome en el campo rating

        if(valoraciones.length > 0){

          let valoration = 0;

          for (let i = 0; i < valoraciones.length; i++) {
            
            valoration += valoraciones[i].valoration;
            
          }

          categoriaHome.rating = valoration / valoraciones.length;

        }


        if(!categoriaHome.rating){

          categoriaHome.rating = 0;

        }

        if(!categoriaHome.costAverage){

          categoriaHome.costAverage = 0;

        }

        if(!categoriaHome.countPurchase){

          categoriaHome.countPurchase =  taskAssigned;

        }

      



      }

     
  
      return {
        data,
        meta: {
          ...meta,
          total: await strapi.db.query("api::category.category").count(  { filters: { featured: true } , 
          start , limit} ),
          start,
          limit,

        },
      };




    } catch (error) {
      console.log(error);
    }
  },


  async generateChat(ctx) {

    const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized('No tienes permiso', {
        error: 'No autorizado'
      });
    }

    const { id } = ctx.params;



    // busco una conversacion con el id del provvedor enviado y el id del usuario logueado en api::conversation.conversation usando findMany y el where users in [id del usuario logueado, id del proveedor]

    console.log(id);

    /*	const chat = await strapi.entityService.findMany( 'api::conversation.conversation', {

        filters : {

          users : {

           id:{

              $eq : [user.id, id]
            }	

          }

        },

        populate: ["users"],



    	

      });*/








    // recorro los chats y extraigo los usuarios de cada chat








    //		if (chat.length == 0) {

    const newChat = await strapi.entityService.create('api::conversation.conversation', {

      data: {

        users: [user.id, id],
        name: "chat entre " + user.username + " y " + id

      }

    });
    console.log(newChat);
    return newChat.id;
    /*			}else{
    
            console.log("aca");
    
            return chat[0].id;
          }*/



  },

  getTimes(start, end) {
    const startHour = parseInt(start.split(":")[0]);
    const endHour = parseInt(end.split(":")[0]);

    // Si endHour es menor que startHour, asumimos que abarca la medianoche
    if (endHour < startHour) {
      // Generamos un array de horas desde startHour hasta 23
      const hours1 = Array.from(
        { length: 24 - startHour },
        (_, i) => (i + startHour) % 24
      );
      // Generamos un array de horas desde 0 hasta endHour
      const hours2 = Array.from({ length: endHour + 1 }, (_, i) => i);
      // Concatenamos los dos arrays de horas
      const hours = hours1.concat(hours2);
      // Formateamos el resultado en formato de 24 horas
      return hours.map((h) => `${h.toString().padStart(2, "0")}:00`);
    } else {
      // Si endHour es mayor o igual que startHour, generamos un array de horas normalmente
      return Array.from({ length: endHour - startHour + 1 }, (_, i) => [
        (i + startHour) % 24,
        0,
      ]).map(([h, m]) => `${h.toString().padStart(2, "0")}:00`);
    }
  },
  async calcularDistancia(
    latitudOrigen,
    longitudOrigen,
    latitudDestino,
    longitudDestino
  ) {
    try {
      //la traigo de	un archivo .env
      const apiKey = process.env.API_KEY_GOOGLE_MAPS;
      const client = new Client({});

      const response = await client.distancematrix({
        params: {
          origins: [{ lat: latitudOrigen, lng: longitudOrigen }],
          destinations: [{ lat: latitudDestino, lng: longitudDestino }],
          key: apiKey,
        },
      });

      const distanciaEnMetros =
        response.data.rows[0].elements[0].distance.value;
      const distanciaEnKilometros = distanciaEnMetros / 1000;

      return distanciaEnKilometros;
    } catch (error) {
      console.error("Error al calcular la distancia:", error);
      throw error;
    }
  },
}));
