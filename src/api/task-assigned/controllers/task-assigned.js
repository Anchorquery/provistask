'use strict';

/**
	* task-assigned controller
	*/
const moment = require('moment');
const conversation = require('../../conversation/controllers/conversation');
const { createCoreController } = require('@strapi/strapi').factories;
const { STRIPE_PUBLIC_KEY, STRIPE_SECRET_KEY, STRIPE_URL, STRIPE_ID_CLIENT, STRIPE_WEBHOOK_SECRET, URL } = process.env;
const stripe = require('stripe')(STRIPE_SECRET_KEY);
// modifico createCoreController

module.exports = createCoreController(
	"api::task-assigned.task-assigned",
	({ strapi }) => ({
		//modifico el metodo create para que cuando se cree mis curso se agregue el campo progress con valor 0
		async create(ctx) {

			try {
				const user = ctx.state.user;


				if (!user) {
					console.log("No tienes permiso", { error: 'No autorizado' });
					return ctx.unauthorized("No tienes permiso", { error: 'No autorizado' });
				}



				let { provider, location, location_geo, length, car, date, time, description, status, descriptionProvis, conversation, addDetails, addFinalPrice, finalPrice, skill, createType, brutePrice, netoPrice, paymentIntentId } = ctx.request.body.data;





				if (!provider) {
					console.log("El campo provider es obligatorio", { error: 'El campo provider es obligatorio' });
					return ctx.badRequest("El campo provider es obligatorio", { error: 'El campo provider es obligatorio' });

				}


				const providerx = await strapi.db.query('plugin::users-permissions.user').findOne({

					where: { id: provider },

					select: ['id', 'isProvider', 'username', 'name', 'lastname'],

				});


				if (!providerx) {
					console.log("El provider no existe", { error: 'El provider no existe' });
					return ctx.badRequest("El provider no existe", { error: 'El provider no existe' });

				}

				console.log(providerx);
				if (!providerx.isProvider) {

					console.log("El provider no es un proveedor", { error: 'El provider no es un proveedor' });
					return ctx.badRequest("El provider no es un proveedor", { error: 'El provider no es un proveedor' });

				}


				// verifico que el provider no sea el mismo que el cliente


				if (provider == user.id) {

					return ctx.badRequest("El provider no puede ser el mismo que el cliente", { error: 'El provider no puede ser el mismo que el cliente' });


				}



				// car solo puede ser "motorcycle"  "car"  "truck"  "not_necessary"

				if (car != "motorcycle" && car != "car" && car != "truck" && car != "not_necessary") {

					return ctx.badRequest("El campo car solo puede ser motorcycle, car, truck o not_necessary", { error: 'El campo car solo puede ser motorcycle, car, truck o not_necessary' });

				}




				let locat = {
					latitud: location.lat,
					longitud: location.lng,
					name: location_geo,

				}




				let combinedDateTime = "";
				if (time != "I'm Flexible") {

					// TIME TIENE FORMATO 11:30am o 11:30pm LE QUITO EL AM O PM

					time = time.replace("am", "");

					time = time.replace("pm", "");





					combinedDateTime = moment(date).format('YYYY-MM-DD') + ' ' + time + ':00.000';

					combinedDateTime = Date.parse(combinedDateTime);

					combinedDateTime = moment(combinedDateTime).format('YYYY-MM-DD HH:mm:ss');

					console.log("combinedDateTime", combinedDateTime);
				} else {

					combinedDateTime = moment(date).format('YYYY-MM-DD') + ' ' + "00:00:00.000";
					combinedDateTime = moment(combinedDateTime).format('YYYY-MM-DD HH:mm:ss');
				}



				if (!conversation) {


					// creo una conversacion con el proveedor y el cliente. Las conversaciones se crean recibiendo un nombre  y un array de usuarios

					let users = [provider, user.id];


					let name = "Conversation between " + user.username + " and " + providerx.username;
					conversation = await strapi.entityService.create('api::conversation.conversation', {
						data: {
							name: name,
							users: users
						}


					});


					// creo un mensaje de bienvenida para la conversacion


					const entry = await strapi.entityService.create('api::task-assigned.task-assigned', {
						data: {
							provider,

							client: user.id,
							transportation: car,
							description: description,
							taskLength: length,
							location: locat,
							datetime: combinedDateTime,
							time: moment(combinedDateTime).format('HH:mm:ss'),
							status: status ? status : "request",
							timeFlexible: time == "I'm Flexible" ? true : false,
							idCreador: user.id,

							paymentIntentId: paymentIntentId ? paymentIntentId : "",
							skill: skill,
							createType: 'client',
							conversation: conversation.id,
							netoPrice: netoPrice.toString(),
						},
					});



					await strapi.entityService.create('api::chat-message.chat-message', {

						data: {
							conversation: conversation.id,
							bot: true,
							message: "Task request created ",
							emit: provider,
							type: "system" // mensaje de bienvenida
						}


					});



				} else {

					// busco la conversacion por el id que recibo por params

					conversation = await strapi.entityService.findOne('api::conversation.conversation', conversation, {

						populate: { users: true }

					});

					// de conversation saco los users y busco el provider y el cliente basandome en el tipo cre createType

					if (createType == "provider") {

						provider = conversation.users.find(u => u.id == user.id);

						provider = provider.id;

						var userx = conversation.users.find(u => u.id != user.id);

						userx = userx.id;

					} else {

						var userx = conversation.users.find(u => u.id == user.id);

						userx = userx.id;

						provider = conversation.users.find(u => u.id != user.id);

						provider = provider.id;

					}


					// filtro las skills por el nombre que recibo por params


					skill = await strapi.db.query('api::skill.skill').findOne({

						where: { name: skill },

						select: ['id'],

					});


					ctx.request.body.data = {

						provider,

						client: userx,

						transportation: car,

						description: description,

						taskLength: length,

						location: locat,

						datetime: combinedDateTime,

						time: moment(combinedDateTime).format('HH:mm:ss'),

						status: status ? status : "request",

						timeFlexible: time == "I'm Flexible" ? true : false,

						skill: skill.id,

						createType: createType,

						conversation: conversation.id,

						idCreador: user.id,

					}

					if (createType == "provider") {

						ctx.request.body.data.descriptionProvis = descriptionProvis;
						ctx.request.body.data.brutePrice = brutePrice;
						ctx.request.body.data.netoPrice = netoPrice;
						ctx.request.body.data.addDetails = addDetails;


					}


					await super.create(ctx);


					await strapi.entityService.create('api::chat-message.chat-message', {

						data: {

							conversation: conversation.id,

							bot: true,

							message: "Task request created",

							emit: provider,

							type: "system"

						}

					});




				}





				//await super.create(ctx);

				return ctx.send(conversation.id);
			} catch (error) {
				console.log(error);
			}


		},
		async taskByPaymentIntent(ctx) {


			const user = ctx.state.user;

			if (!user) {

				return ctx.unauthorized("No tienes permiso", { error: 'No autorizado' });
			}

			// recibo el id del paymentIntent por params

			const { paymentIntentId } = ctx.params;


			if (!paymentIntentId) {

				return ctx.badRequest("No existe el paymentIntentId", { error: 'No existe el paymentIntentId' });

			}


			// busco la tarea filtrando por el paymentIntentId que recibo por params


			let tarea = await strapi.db.query("api::task-assigned.task-assigned").findOne({

				where: { paymentIntentId: paymentIntentId },

				populate: { location: true, skill: true, provider: true, client: true, conversation: true }

			});


			if (!tarea) {

				return ctx.notFound("No existe la tarea", { error: 'No existe la tarea' });

			}


			// verifico que el usuario logueado sea el cliente de la tarea o el proveedor de la tarea


			if (tarea.client.id != user.id && tarea.provider.id != user.id) {

				return ctx.unauthorized("No tienes permiso", { error: 'No autorizado' });

			}





			return ctx.send({
				data: {
					conversation: tarea.conversation.id,
					task: tarea.id
				}
			});








		},
		async find(ctx) {


			const user = ctx.state.user;

			if (!user) {

				return ctx.unauthorized("No tienes permiso", { error: 'No autorizado' });
			}



			// saco los parametros de la  paginacion, start, limit, sort where

			let { page, limit, sort, status } = ctx.query;



			page = page ? parseInt(page) : 1;

			limit = limit ? parseInt(limit) : 5;

			sort = sort ? sort : "createdAt:desc";

			// calculo el offset

			let offset = (page - 1) * limit;



			// where solo puede ser valores  completed cancelled pending_completed request offer acepte si no es ninguno de esos valores lo seteo en completed

			if (status != "completed" && status != "canceled" && status != "pending_completed" && status != "request" && status != "offer" && status != "acepted") {

				status = "completed";

			}


			// busco las tareas filtrando por el usuario logueado y el status que recibo por params considerando la paginacion

			let items = await strapi.db.query("api::task-assigned.task-assigned").findWithCount({

				where: { status: status, client: user.id },

				select: ['id', 'status', 'taskLength', 'datetime', 'time', 'createType', 'idCreador', "transportation"],

				orderBy: { id: 'desc' },

				limit: limit,

				offset: offset,

				populate: ['provider', 'provider.avatar_image', 'conversation', 'skill']

			});

			// los datos vienen de esta forma [Entry[], number]

			// extraigo los datos y el total

			let total = items[1];

			items = items[0];

			// los recorro para formatear datos

			for (let i = 0; i < items.length; i++) {

				let tarea = items[i];

				// del proveedor necesito, nombre apellido, avatar y id

				tarea.provider = {

					id: tarea.provider.id,

					name: tarea.provider.name,

					lastname: tarea.provider.lastname,

					avatar: tarea.provider.avatar_image ? process.env.URL + tarea.provider.avatar_image.url : process.env.URL + '/uploads/user_147dd8408e.png'

				}


				// si conversation es null es porque la tarea no tiene conversacion le creo una

				if (!tarea.conversation) {

					tarea.conversation = null;

				} else {

					tarea.conversation = tarea.conversation.id;

				}


				let lengthName = tarea.skill.name.length;

				if (lengthName > 25) {

					tarea.skill.shortName = tarea.skill.name.substring(0, 25) + "...";

				} else {

					tarea.skill.shortName = tarea.skill.name;

				}


				tarea.skill = {
					id: tarea.skill.id,
					name: tarea.skill.name,
					shortName: tarea.skill.shortName
				}

				//




			}


			// en base al limite	y al total calculo la cantidad de paginas

			let lastPage = Math.ceil(total / limit);




			return ctx.send({ data: items, meta: { pagination: { page: page, limit: limit, total: total, lastPage: lastPage } } });



		},

		async findOne(ctx) {

			const user = ctx.state.user;

			const { id } = ctx.params;

			if (!id) {

				return ctx.notFound("No se ha enviado id", { error: 'No se envió id' });

			}

			if (!user) {

				return ctx.unauthorized("No tienes permiso", { error: 'No autorizado' });
			}



			// busco las tareas filtrando por el usuario logueado y el status que recibo por params considerando la paginacion

			let tarea = await strapi.db.query("api::task-assigned.task-assigned").findOne({

				where: { id: id, client: user.id },

				select: ['id', 'status', 'taskLength', 'datetime', 'time', 'createType', 'idCreador', "transportation", "description", "brutePrice", "netoPrice", "totalPrice", "descriptionProvis"],

				populate: ['provider', 'provider.avatar_image', 'conversation', 'skill', 'images', 'skill.image', 'location']

			});

			// si	no existe la tarea retorno un error

			if (!tarea) {

				return ctx.notFound("No existe la tarea", { error: 'No existe la tarea' });

			}

			tarea.location = tarea.location ? tarea.location.name : null;




			tarea.provider = {

				id: tarea.provider.id,

				name: tarea.provider.name,

				lastname: tarea.provider.lastname,

				avatar: tarea.provider.avatar_image ? process.env.URL + tarea.provider.avatar_image.url : process.env.URL + '/uploads/user_147dd8408e.png'

			}


			// si conversation es null es porque la tarea no tiene conversacion le creo una
			let messages = [];
			if (!tarea.conversation) {


				tarea.conversation = null;

			} else {

				tarea.conversation = tarea.conversation.id;

				// busco todos los mensajes de tipo file image o	video de la conversacion

				messages = await strapi.db.query("api::chat-message.chat-message").findMany({

					where: { conversation: tarea.conversation, type: ["file", "image", "video"] },

					select: ['id', 'type'],

					populate: ['media']


				});



			}

			// si conversation.media es =! null o messages es =! null es porque tiene archivos adjuntos , los recorro cada uno para solo tener las url

			if (tarea.images) {


				for (let i = 0; i < tarea.images.length; i++) {

					tarea.images[i] = process.env.URL + tarea.images[i].url;

				}



			} else {

				tarea.images = [];
			}



			if (messages.length > 0) {

				tarea.mediaConversation = [];

				for (let i = 0; i < messages.length; i++) {

					tarea.mediaConversation[i] = process.env.URL + messages[i].media.url;

				}

			} else {

				tarea.mediaConversation = [];
			}


			// busco la habilidad del usuario api::provider-skill.provider-skill

			let skillM = await strapi.db.query("api::provider-skill.provider-skill").findOne({

				where: { provider: tarea.provider.id, categorias_skill: tarea.skill.id },

				select: ['type_price', 'cost', 'hourMinimum']

			});








			let lengthName = tarea.skill.name.length;

			if (lengthName > 25) {

				tarea.skill.shortName = tarea.skill.name.substring(0, 25) + "...";

			} else {

				tarea.skill.shortName = tarea.skill.name;

			}

			// saco la imagen de la tarea

			let imageS = tarea.skill.image ? process.env.URL + tarea.skill.image.url : process.env.LOGO_APP;
			tarea.skill = {
				id: tarea.skill.id,
				name: tarea.skill.name,
				shortName: tarea.skill.shortName,
				image: imageS,
				type_price: skillM.type_price,
				cost: skillM.cost,
				hourMinimum: skillM.hourMinimum
			}

			tarea.datetime = this.mergeDateTime(tarea.datetime, tarea.time);

			//	tarea.datetime = moment(tarea.datetime).format('YYYY-MM-DD HH:mm:ss');

			delete tarea.time;

			// verifico si tiene calificacion

			let valoration = await strapi.db.query("api::valoration.valoration").findOne({

				where: { task: tarea.id },

				select: ['valoration', 'description', 'createdAt', 'description'],

				populate: ['client', 'client.avatar_image']

			});

			if (valoration) {

				tarea.review = {

					rating: valoration.valoration,

					review: valoration.description,

					date: valoration.createdAt,

					username: valoration.client.name + " " + valoration.client.lastname,

					avatarUrl: valoration.client.avatar_image ? process.env.URL + valoration.client.avatar_image.url : process.env.URL + '/uploads/user_147dd8408e.png',

				}

			} else {

				tarea.review = null;

			}

			// si la tarea está en status cancelled  busco el motivo de cancelacion

			if (tarea.status == "cancelled") {


				//let cancelation = await strapi.db.query("api::cancelation.cancelation").findOne({
					

			}



			return ctx.send({ data: tarea });

		},

		async taskPending(ctx) {

		

			const user = ctx.state.user;

			if (!user) {

				return ctx.unauthorized("No tienes permiso", { error: 'No autorizado' });

			}


			//verifico sea proveedor

			if (!user.isProvider) {

				return ctx.unauthorized("No tienes permiso", { error: 'No autorizado' });

			}


			// busco todas las tareas pendientes del proveedor

			let items = await strapi.db.query("api::task-assigned.task-assigned").findMany({

				where: { provider: user.id, status: "acepted" },

				select: ['id', 'datetime', 'description', 'brutePrice', 'totalPrice'],
				populate: ['client', 'skill', 'client.avatar_image', 'skill.image']

			});





			let elementos = [];

			for (let i = 0; i < items.length; i++) {

				let tarea = items[i];

				/*
						String monto;
		DateTime fecha;
		Map<String, String> categoria;
		Map<String, String> cliente;
		String nombre;
		String? description;
				*/

				tarea.datetime = moment(tarea.datetime).format('YYYY-MM-DD HH:mm:ss');

				if (!tarea.client) {
					continue;

				} else if (tarea.client.id == user.id) {
					continue;
				}

				elementos.push({
					id: tarea.id,
					datetime: tarea.datetime,
					description: tarea.description,
					monto: tarea.totalPrice ? tarea.totalPrice : tarea.brutePrice,
					categoria: {
						id: tarea.skill.id,
						name: tarea.skill.name,
						image: tarea.skill.image ? tarea.skill.image.url : null,
					},
					cliente: {
						id: tarea.client.id,
						name: tarea.client.name + " " + tarea.client.lastname,
						avatar_image: tarea.client.avatar_image ? URL + tarea.client.avatar_image.url : null,
					},
					nombre: tarea.skill.name
				});


			}


			return ctx.send(elementos);


		},

		async taskCompleted(ctx) {


			const user = ctx.state.user;

			if (!user) {

				return ctx.unauthorized("No tienes permiso", { error: 'No autorizado' });
			}

			// recibo el id de la tarea por params

			const { id } = ctx.params;


			// si no recibo el id retorno un error

			if (!id) {

				return ctx.badRequest("No se envio un id ", { error: 'No se mandó un id' });

			}



			const tarea = await strapi.db.query("api::task-assigned.task-assigned").findOne({

				where: { id: id, client: user.id, status: "acepted" },

				populate: { provider: true, client: true, conversation: true }

			});


			// verifico que la tarea exista

			if (!tarea) {

				return ctx.notFound("No existe la tarea", { error: 'No existe la tarea' });

			}


			// verifico que la tarea esté marcada como pending


			if (tarea.status != "acepted") {

				return ctx.badRequest("La tarea no está pendiente", { error: 'La tarea no está pendiente' });

			}



			// verifico que el usuario logueado sea el cliente de la tarea


			if (tarea.client.id != user.id) {

				return ctx.unauthorized("No tienes permiso", { error: 'No autorizado' });

			}

			// recupero el paymentIntentId de la tarea


			const paymentIntentId = tarea.paymentIntentId;


			// verifico que el paymentIntentId no sea null

			if (!paymentIntentId) {

				return ctx.badRequest("No existe el paymentIntentId", { error: 'No existe el paymentIntentId' });

			}


			// busco el paymentIntentId en stripe


			const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);



			// verifico que el paymentIntentId exista en stripe

			if (!paymentIntent) {

				return ctx.badRequest("No existe el paymentIntentId en stripe", { error: 'No existe el paymentIntentId en stripe' });

			}


			// verifico que el paymentIntentId esté en status succeeded

			if (paymentIntent.status != "succeeded") {

				return ctx.badRequest("El paymentIntentId no está en status succeeded", { error: 'El paymentIntentId no está en status succeeded' });

			}



			// buso el provider de la tarea


			const provider = await strapi.entityService.findOne('plugin::users-permissions.user', tarea.provider.id, {});






			console.log(paymentIntent.amount);


			// desceunto la comision de la plataforma que es de 15$  y el resto se lo transfiero al proveedor


			const amount = paymentIntent.amount;


			// transfiero el monto al proveedor





			await stripe.transfers.create({

				amount: amount,

				currency: 'usd',

				destination: provider.stripe_connect_id,

				source_transaction: paymentIntent.latest_charge,

			});



			await strapi.entityService.update('api::task-assigned.task-assigned', tarea.id, {

				data: {

					status: "completed",

				}

			});



			// creo un mensaje de bienvenida para la conversacion

			if (tarea.conversation) {

				await strapi.entityService.create('api::chat-message.chat-message', {

					data: {

						conversation: tarea.conversation.id,

						message: "Tarea marcada como	completada por el cliente y fondos transferidos al proveedor",

						bot: true,

						emit: provider.id,

						type: "system"

					}

				});

			}







			return ctx.send("Tarea completada");

		},

		async taskAcepted(ctx) {


			const user = ctx.state.user;

			if (!user) {

				return ctx.unauthorized("No tienes permiso", { error: 'No autorizado' });
			}

			// recibo el id de la tarea por params

			const { id } = ctx.params;


			// busco la tarea por el id que recibo por params

			const tarea = await strapi.db.query("api::task-assigned.task-assigned").findOne({

				where: { id: id, client: user.id, status: "offer" },

				populate: { provider: true, client: true, conversation: true }

			});



			// verifico que la tarea exista

			if (!tarea) {

				return ctx.notFound("No existe la tarea", { error: 'No existe la tarea' });

			}


			// verifico que la tarea esté marcada como pending


			if (tarea.status != "offer") {

				return ctx.badRequest("La tarea no está pendiente", { error: 'La tarea no está como oferta' });

			}



			// verifico que el usuario logueado sea el cliente de la tarea


			if (tarea.client.id != user.id) {

				return ctx.unauthorized("No tienes permiso", { error: 'No autorizado' });

			}

			// recupero el paymentIntentId de la tarea


			/*	const paymentIntentId = tarea.paymentIntentId;
	
	
				// verifico que el paymentIntentId no sea null
	
				if (!paymentIntentId) {
	
					return ctx.badRequest("No existe el paymentIntentId", { error: 'No existe el paymentIntentId' });
	
				}*/


			// busco el paymentIntentId en stripe


			/*	const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
	
				console.log(paymentIntent);
	
				// verifico que el paymentIntentId exista en stripe
	
				if (!paymentIntent) {
	
					return ctx.badRequest("No existe el paymentIntentId en stripe", { error: 'No existe el paymentIntentId en stripe' });
	
				}
	
	
				// verifico que el paymentIntentId esté en status succeeded
	
				if (paymentIntent.status != "succeeded") {
	
					return ctx.badRequest("El paymentIntentId no está en status succeeded", { error: 'El paymentIntentId no está en status succeeded' });
	
				}*/



			// buso el provider de la tarea


			const provider = await strapi.entityService.findOne('plugin::users-permissions.user', tarea.provider.id, {});








			/*
			
						const amount = paymentIntent.amount - 1500;
			
			
						// transfiero el monto al proveedor
			
			
			
			
			
						await stripe.transfers.create({
			
							amount: amount,
			
							currency: 'usd',
			
							destination: provider.stripe_connect_id,
			
						source_transaction : paymentIntent.latest_charge,
			
						});*/



			await strapi.entityService.update('api::task-assigned.task-assigned', tarea.id, {

				data: {

					status: "acepted",

				}

			});



			// creo un mensaje de bienvenida para la conversacion

			if (tarea.conversation) {

				await strapi.entityService.create('api::chat-message.chat-message', {

					data: {

						conversation: tarea.conversation.id,

						message: "The task has been accepted and the guarantee payment has been made.",

						bot: true,

						emit: provider.id,

					}

				});

			}







			return ctx.send("Tarea completada");

		},

		async taskCanceled(ctx) {



			const user = ctx.state.user;

			if (!user) {

				return ctx.unauthorized("No tienes permiso", { error: 'No autorizado' });
			}



			const { id, reason } = ctx.request.body;

		

			if (!id) {

				return ctx.badRequest("No se envio un id ", { error: 'No se mandó un id' });

			}
			if (!reason) {

				return ctx.badRequest("No se envio un motivo ", { error: 'No se mandó un motivo' });

			}


			// busco la tarea por el id que recibo por params

			const tarea = await strapi.entityService.findOne('api::task-assigned.task-assigned', id, {

				populate: { provider: true, client: true, conversation: true }

			});


			// verifico que la tarea exista

			if (!tarea) {

				return ctx.notFound("No existe la tarea", { error: 'No existe la tarea' });

			}


			// verifico que la tarea esté marcada como pending


			if (tarea.status != "acepted") {

				return ctx.badRequest("La tarea no está pendiente", { error: 'La tarea no está como pendiente' });

			}



			// verifico que el usuario logueado sea el cliente de la tarea


			if (tarea.client.id != user.id) {

				return ctx.unauthorized("No tienes permiso", { error: 'No autorizado' });

			}



			const provider = await strapi.entityService.findOne('plugin::users-permissions.user', tarea.provider.id, {});



			await strapi.entityService.update('api::task-assigned.task-assigned', tarea.id, {

				data: {

					status: "cancelled",

				}

			});


			// creo una cancelacion


			await strapi.entityService.create('api::task-canceled.task-canceled', {

				data: {

					task: tarea.id,

					reason: reason,

					provider: provider.id,

					client: user.id,

					datetime: Date.now()

				}

			});



			// creo un mensaje de bienvenida para la conversacion

			if (tarea.conversation) {

				await strapi.entityService.create('api::chat-message.chat-message', {

					data: {

						conversation: tarea.conversation.id,

						message: "The task has been cancelled ",

						bot: true,

						emit: provider.id,

						type: "system"

					}

				});

			}

			return ctx.send("Tarea cancelada");

		},
		formatearMontos(monto) {

			// recibo el monto, si es decimal retorno solo dos decimales, si es entero retorno el monto


			if (monto % 1 === 0) {

				return monto;

			} else {

				return monto.toFixed(0);

			}


		},

		async taskByConversation(ctx) {


			const user = ctx.state.user;

			if (!user) {

				return ctx.unauthorized("No tienes permiso", { error: 'No autorizado' });
			}

			// recibo el id de la conversacion por params

			const { id } = ctx.params;


			if (!id) {

				return ctx.badRequest("No existe la conversacion", { error: 'No existe la conversacion' });

			}


			// busco la conversacion por el id que recibo por params

			const conversation = await strapi.entityService.findOne('api::conversation.conversation', id, {

				populate: { users: true }

			});


			// verifico que la conversacion exista

			if (!conversation) {

				return ctx.notFound("No existe la conversacion", { error: 'No existe la conversacion' });

			}


			// verifico que el usuario logueado esté en el array de usuarios de la conversacion


			if (!conversation.users.find(u => u.id == user.id)) {

				return ctx.unauthorized("No tienes permiso", { error: 'No autorizado' });

			}



			// busco la tarea filtrando por la conversacion que recibo por params


			let tarea = await strapi.db.query("api::task-assigned.task-assigned").findOne({
				where: { conversation: id },
				select: ['id'],
			});

			if (!tarea) {
				tarea = {};
				return ctx.send(tarea);
			}

			tarea = await strapi.entityService.findOne('api::task-assigned.task-assigned', tarea.id, {

				populate: { location: true, skill: true, provider: true, client: true }

			});




			if (!tarea) {
				tarea = {};
			}

			// del provider y del cliente solo mando el id 


			tarea.provider = tarea.provider ? tarea.provider.id : null;

			tarea.client = tarea.client ? tarea.client.id : null;





			return ctx.send(tarea);




		},


		async update(ctx) {
			const user = ctx.state.user;




			if (!user) {

				return ctx.unauthorized("No tienes permiso", { error: 'No autorizado' });
			}



			let { provider, location, location_geo, length, car, date, time, description, status, descriptionProvis, brutePrice, netoPrice, addDetails, addFinalPrice, finalPrice } = ctx.request.body.data;


			let { id } = ctx.params;



			let tarea = await strapi.entityService.findOne('api::task-assigned.task-assigned', id, {

				populate: { provider: true, client: true, conversation: true }


			});


			console.log(tarea);


			// car si car es 1 = moto, si car es 2 = auto, si car es 3 = camioneta, si car es 4 = camion

			if (car == 1) {

				car = "motorcycle";

			} else if (car == 2) {

				car = "car";

			} else if (car == 3) {

				car = "truck";

			} else if (car == 4) {

				car = "not_necessary";

			}


			let locat = {
				latitud: location.lat,
				longitud: location.lng,
				name: location_geo,

			}




			let combinedDateTime = "";
			if (time != "I'm Flexible") {

				// TIME TIENE FORMATO 11:30am o 11:30pm LE QUITO EL AM O PM

				time = time.replace("am", "");

				time = time.replace("pm", "");





				combinedDateTime = moment(date).format('YYYY-MM-DD') + ' ' + time + ':00';
			} else {

				combinedDateTime = moment(date).format('YYYY-MM-DD') + ' ' + "00:00:00";
			}



			// contruyo el objeto data dentro para ctx.request.body.data


			ctx.request.body.data = {

				transportation: car,
				description: description,
				taskLength: length,
				location: locat,
				datetime: combinedDateTime,
				time: moment(combinedDateTime).format('HH:mm:ss'),
				status: status ? status : "request",
				timeFlexible: time == "I'm Flexible" ? true : false,

				descriptionProvis: descriptionProvis,

				brutePrice: brutePrice,

				netoPrice: netoPrice,

				addDetails: addDetails,

				addFinalPrice: addFinalPrice,

				totalPrice: finalPrice,





			}



			await super.update(ctx);


			let conversation = await strapi.db.query('api::conversation.conversation').findOne({

				where: { id: tarea.conversation.id },

				select: ['id'],

			});







			await strapi.entityService.create('api::chat-message.chat-message', {

				data: {
					conversation: conversation.id,
					bot: true,
					message: "Task updated, the provider has sent a proposal.",
					emit: provider // mensaje de bienvenida
				}


			});





			console.log(conversation);


			//await super.create(ctx);

			return ctx.send(conversation);
		},

		mergeDateTime(datetime, time) {
			const date = datetime.split('T')[0];
			const hour = time.split('.')[0];
			return `${date}T${hour}.000Z`;
		}


	})
);

