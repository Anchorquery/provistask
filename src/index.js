'use strict';
const { URL } = process.env;
const { v4: uuid } = require('uuid');
const { Readable } = require("stream");
const path = require('path');
const admin = require('firebase-admin');
const os = require('os');
const serviceAccount = require('./provitask-197ff-firebase-adminsdk-81ebi-7c01bc9653.json');
const fse = require('fs-extra');
const { cp } = require('fs');

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) { },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    process.nextTick(() => {
      let firebase = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        name: 'Provitask',
      });
      //Make Firebase available everywhere
      strapi.firebase = firebase;
      let messaging = firebase.messaging();

      let sendNotification = (fcm, data) => {
        let message = {
          ...data,
          token: fcm
        }
        messaging.send(message).then((res) => {
          console.log(res);
        }).catch((error) => {
          console.log(error);
        });
      }
      let sendNotificationToTopic = (topic_name, data) => {
        let message = {
          ...data,
          topic: topic_name
        }
        messaging.send(message).then((res) => {
          console.log(res);
        }).catch((error) => {
          console.log(error);
        });
      }
      let subscribeTopic = (fcm, topic_name) => {
        messaging.subscribeToTopic(fcm, topic_name).then((res) => {
          console.log(res);
        }).catch((error) => {
          console.log(error);
        });
      }
      //Make the notification functions available everywhere
      strapi.notification = {
        subscribeTopic,
        sendNotificationToTopic,
        sendNotification
      }


    });

    process.nextTick(() => {
      try {
        let interval;
        var io = require("socket.io")(strapi.server.httpServer, {
          cors: { // cors setup
            origin: "*",
            methods: ["GET", "POST"],
            allowedHeaders: ["Authorization"],
            credentials: true,
          },
        });

        io.use(async (socket, next) => {


          try {

            //Socket Authentication
            const result = await strapi.plugins[
              'users-permissions'
            ].services.jwt.verify(socket.handshake.query.token);



            if (!result) {

              throw new Error('Invalid Token');

            }

            console.log("REsult",result);

            const user = await strapi.entityService.findOne('plugin::users-permissions.user', result.id, {
              populate: { avatar_image: true },

              fields: ['id', "name", "lastname", "username", "device_token"],
            });

            console.log(`Cliente ${user.username} ${user.name} ${user.lastname} se ha conectado`);


            user.avatar_image = user.avatar_image ? URL + user.avatar_image.url : URL + '/uploads/user_147dd8408e.png';

            let onlineUser = await strapi.db.query('api::online-user.online-user').findOne({
              where: { user: user.id },
            });



            if (!onlineUser) {

              await strapi.entityService.create('api::online-user.online-user', {

                data: {

                  user: user.id,

                  socket_id: socket.id,
                  lastConnection: new Date().getTime(),
                  status: 'online'

                }

              });



            } else {

              await strapi.entityService.update('api::online-user.online-user', onlineUser.id,



                {
                  data: {
                    socket_id: socket.id,
                    lastConnection: new Date().getTime(),
                    status: 'online'
                  }
                });

            }


            user["socket_id"] = socket.id;
            user["lastConnection"] = new Date().getTime();
            user["status"] = 'online';


            socket.user = user;
            console.log("Socket user",socket.user);
            next();
          } catch (error) {


            console.log(error)

          }



        }).on('connection', function (socket) {
          if (interval) {
            clearInterval(interval);
          }


          /*  interval = setInterval(() => {
              io.emit('serverTime', { time: new Date().getTime() }); // This will emit the event to all connected sockets
    
            }, 1000);*/


          socket.on('join', async (data) => {

            try {

              let { id } = data;


              if (!id) {

                socket.emit('error', { error: 'Id de conversacion no encontrado', id: id, type: 'join', user: socket.user.id, datetime: new Date().getTime(), status: 'error', message: 'Id de conversacion no encontrado' });

                throw new Error('Id de conversacion no encontrado');

              }



              let conversacion = await strapi.entityService.findOne('api::conversation.conversation', id, {

                populate: { users: true }

              })



              if (!conversacion) {


                // respondo con el webhook para error

                socket.emit('error', { error: 'Conversacion no encontrada', id: id, type: 'join', user: socket.user.id, datetime: new Date().getTime(), status: 'error', message: 'Conversacion no encontrada' });



                throw new Error('Conversacion no encontrada');

              }


              let user = conversacion.users.filter(us => us.id == socket.user.id);

              if (user.length == 0) {

                socket.emit('error', { error: 'No pertenece a la conversación', id: id, type: 'join', user: socket.user.id, datetime: new Date().getTime(), status: 'error', message: 'No pertenece a la conversación' });

                throw new Error('No pertenece a la conversacion');


              }

              // verifico el tipo de de dato de id de conversacion si es number lo paso a string


              if (typeof id == 'number') {

                id = id.toString();

              }




              socket.join(`sala_${id}`);

              console.log(`Cliente ${socket.user.username} ${socket.user.name} ${socket.user.lastname} se ha unido a la sala ${id}`);

              console.log(`Cliente ${socket.id} se ha unido a la sala ${id}`);

              // notifico a los demas usuarios que se unio a la conversacion



              let otherUser = conversacion.users.filter(us => us.id != socket.user.id);

              otherUser = otherUser[0];

              // busco el usuario que envio el mensaje


              /*   otherUser = await strapi.entityService.findOne('plugin::users-permissions.user', otherUser.id, {
     
                   fields: ['id', "name", "lastname"],
     
                   populate: { avatar_image: true }
     
                 });
     
     
                 otherUser.avatar_image = otherUser.avatar_image ? URL + otherUser.avatar_image.url : URL+'/uploads/user_147dd8408e.png';*/

              socket.broadcast.to(`sala_${id}`).emit('joinResponse', { otherUser: otherUser.id });

              //socket.emit('joinResponse', { otherUser });

            } catch (error) {

              console.log(error)

              throw error;

            }

          });



          socket.on('getChat', async (data) => {

            try {
              let otherUser = [];



              let { id, page, limit } = data;


              page = page ? parseInt(page) : 1;

              limit = limit ? parseInt(limit) : 10;


              const offset = (page - 1) * limit;

              let mensajes = await strapi.db.query('api::chat-message.chat-message').findWithCount({

                where: { conversation: id.toString() },

                orderBy: { "createdAt": "desc" },

                limit: limit,

                offset: offset,

                populate: ["emit", "emit.avatar_image", 'media']

              });

              let total = mensajes[1];

              mensajes = mensajes[0];

              let conversacion = await strapi.db.query('api::conversation.conversation').findOne({

                where: { id: id.toString(), users: socket.user.id.toString() },

                populate: { users: true }

              });

              ///  socket.join(id);



              otherUser = conversacion.users.filter(us => us.id != socket.user.id);

              otherUser = otherUser[0];

              // busco el usuario que envio el mensaje


              otherUser = await strapi.entityService.findOne('plugin::users-permissions.user', otherUser.id, {

                fields: ['id', "name", "lastname"],
                populate: { avatar_image: true }

              });

              otherUser.avatar_image = otherUser.avatar_image ? URL + otherUser.avatar_image.url : URL + '/uploads/user_147dd8408e.png';




              /*
                recorro el chat para formatear lso mensajes, recorro usando for
    
    
              */

              for (let i = 0; i < mensajes.length; i++) {

                let mensaje = mensajes[i];


                delete mensaje.updatedAt;


                // si el mensaje no es del usuario logueado o es del bot reviso status y lo marco como leido


                if (mensaje.bot || mensaje.emit.id != socket.user.id) {



                  if (mensaje.status == 'delivered' || mensaje.status == 'sent') {

                    await strapi.entityService.update('api::chat-message.chat-message', mensaje.id,

                      { data: { status: 'seen' } });

                    mensaje.status = 'seen';

                  }

                }




                let user = {};
                if (!mensaje.bot) {
                  user = await strapi.entityService.findOne('plugin::users-permissions.user', mensaje.emit.id, {

                    populate: { avatar_image: true },
                    fields: ['id', "name", "lastname"],
                    //ordeno por createdAt
                    sort: 'createdAt:DESC'

                  });
                  user.avatar_image = user.avatar_image ? process.env.URL + user.avatar_image.url : process.env.URL + '/uploads/user_147dd8408e.png';


                } else {

                  user = { id: 'bot', name: 'Provistask', lastname: 'Systems', online: true, avatar_image: process.env.LOGO_APP }

                }

                mensaje.datetime = mensaje.createdAt ? mensaje.createdAt : mensaje.datetime;

                let fechaUnix = new Date(mensaje.datetime).getTime();

                if (mensaje.type != 'image' && mensaje.type != 'file' && mensaje.type != 'video' && mensaje.type != 'audio') {
                  mensajes[i] = {

                    'author': {
                      'firstName': user.name,
                      'id': user.id.toString(),
                      'imageUrl': user.avatar_image,
                      'lastName': user.lastname
                    },
                    'createdAt': fechaUnix,//paso hora en formato unix  ,
                    'remoteId': mensaje.id.toString(),
                    'id': mensaje.clientId ?? uuid(),
                    'status': mensaje.status ?? 'seen',
                    'text': mensaje.message ?? '',
                    'type': mensaje.type ?? 'text',
                    'roomId': id.toString(),
                  }

                } else {




                  let media = mensaje.media;

                  mensajes[i] = {

                    'author': {
                      'firstName': user.name,
                      'id': user.id.toString(),
                      'imageUrl': user.avatar_image,
                      'lastName': user.lastname
                    },

                    'createdAt': fechaUnix,
                    'id': mensaje.clientId ?? uuid(),
                    'remoteId': mensaje.id.toString(), //id del mensaje en la base de datos
                    'status': mensaje.status ?? 'seen',
                    'text': mensaje.text ?? 'File uploaded',
                    'type': mensaje.type,
                    'roomId': id.toString(),
                    'name': media.name,
                    'size': media.size,
                    'mimeType': media.mime,
                    'width': media.width,
                    'height': media.height,
                    'uri': URL + media.url,

                  }


                }







              }



              //  mensajes.sort((a, b) => b.createdAt - a.createdAt);


              let lastPage = Math.ceil(total / limit);

              socket.emit('getChatResponse', { data: { mensajes, otherUser }, meta: { pagination: { page: page, limit: limit, total: total, lastPage: lastPage } } });
            } catch (error) {

              console.log(error)

              throw error;
            }

          });

          // send mensaje

          socket.on('sendMessage', async (data) => {

            console.log("data",data);

            let { message, fileData } = data;

            if (!message.id) {
              message.id = uuid();
            }

            if (message.type != 'image' && message.type != 'file' && message.type != 'video' && message.type != 'audio') {

              const mensaje = await strapi.entityService.create('api::chat-message.chat-message', {

                data: {

                  conversation: message.roomId,
                  emit: socket.user.id,
                  message: message.text,
                  datetime: message.createdAt,
                  status: 'sent',
                  type: message.type,
                  clientId: message.id,

                }

              });
              io.to(`sala_${message.roomId.toString()}`).emit('sendMessageResponse', {

                'author': {
                  'firstName': socket.user.name,
                  'id': socket.user.id.toString(),
                  'imageUrl': socket.user.avatar_image,
                  'lastName': socket.user.lastname
                },

                'createdAt': message.createdAt,
                'id': message.id.toString(),
                'remoteId': mensaje.id.toString(), //id del mensaje en la base de datos
                'status': 'sent',
                'text': message.text,
                'type': message.type,
                'roomId': message.roomId.toString(),
              });
            } else {


              const mensaje = await strapi.entityService.create('api::chat-message.chat-message', {

                data: {

                  conversation: message.roomId,
                  emit: socket.user.id,
                  message: "file uploaded",
                  datetime: message.createdAt,
                  status: 'sent',
                  type: message.type,
                  clientId: message.id,

                }

              });




              let fileNameNoExt = uuid() + '_' + fileData.name.split('.')[0];

              const createAndAssignTmpWorkingDirectoryToFiles = () => fse.mkdtemp(path.join(os.tmpdir(), 'strapi-upload-'));


              const entity = {
                name: `${fileData.name}`,
                hash: fileNameNoExt,
                ext: path.extname(fileData.name),
                mime: fileData.mimeType,
                size: fileData.size,
                provider: 'local',
                tmpWorkingDirectory: await createAndAssignTmpWorkingDirectoryToFiles(),
                getStream: () => Readable.from(fileData.bytes),
                related: {
                  id: mensaje.id,
                  __type: "api::chat-message.chat-message",
                  __pivot: { field: "media" }
                }
              };



              if (fileData.mimeType.includes('image')) {

                await strapi.plugin('upload').service('upload').uploadImage(entity)

              } else {
                await strapi.plugin('upload').service('upload').uploadFileAndPersist(entity)
              }

              let fileCreate = await strapi.query('plugin::upload.file').create({ data: entity });


              io.to(`sala_${message.roomId.toString()}`).emit('sendMessageResponse', {

                'author': {
                  'firstName': socket.user.name,
                  'id': socket.user.id.toString(),
                  'imageUrl': socket.user.avatar_image,
                  'lastName': socket.user.lastname
                },

                'createdAt': message.createdAt,
                'id': message.id.toString(),
                'remoteId': mensaje.id.toString(), //id del mensaje en la base de datos
                'status': 'sent',
                'text': message.text ?? 'File uploaded',
                'type': message.type,
                'roomId': message.roomId.toString(),
                'name': fileCreate.name,
                'size': fileCreate.size,
                'mimeType': fileCreate.mimeType,
                'width': fileCreate.width,
                'height': fileCreate.height,
                'uri': URL + fileCreate.url,

              });





            }


            // de la conversacion saco al usuario distinto al que envio el mensaje


            let conversacion = await strapi.db.query('api::conversation.conversation').findOne({

              where: { id: message.roomId.toString(), users: socket.user.id.toString() },

              populate: { users: true }

            });

            let otherUser = conversacion.users.filter(us => us.id != socket.user.id);

            otherUser = otherUser[0];

            // busco el usuario que envio el mensaje


            otherUser = await strapi.entityService.findOne('plugin::users-permissions.user', otherUser.id, {

              fields:  ['id', "name", "lastname", "device_token"],

            });

            if (otherUser.device_token) {

              strapi.notification.sendNotification(otherUser.device_token, {
                notification: {
                    title: `${socket.user.name} ${socket.user.lastname}  te envio un mensaje`,
                    body: `${message.text}`
                }
            });

            }

            // url de la notiifcacion

            

            await strapi.entityService.create('api::notification.notification', {

              data: {

                user: otherUser.id,

                type: 'message',

                title: `${socket.user.name} ${socket.user.lastname}  te envio un mensaje`,

                text: message.type == 'image' || message.type == 'file' || message.type == 'video' || message.type == 'audio' ? 'Attached file, check the message for more details' : message.text,

                read: false,

                datetime: new Date(),

                url: `/chat/${message.roomId}`

              }
            
            });

            // busoc el socket id del usuario al que le envio el mensaje


            let onlineUser = await strapi.db.query('api::online-user.online-user').findOne({

              where: { user: otherUser.id },

            });

            if (onlineUser) {

              

              io.to(onlineUser.socket_id).emit('notificationResponse', {

                id: otherUser.id,

                type: 'message',

                title: `${socket.user.name} ${socket.user.lastname}  te envio un mensaje`,

                text: message.type == 'image' || message.type == 'file' || message.type == 'video' || message.type == 'audio' ? 'Attached file, check the message for more details' : message.text,

                read: false,

                datetime: new Date(),

                url: `/chat/${message.roomId}`

              });

            }



          })





          socket.on('messageReceived', async (data) => {


            // busco el mensaje en la base de datos y lo actualizo a recibido


            await strapi.db.query('api::chat-message.chat-message').update({

              where: { clientId: data.messageId },

              data: {

                status: 'seen',

              },

            });


            socket.broadcast.to(`sala_${data.roomId}`).emit('messageRead', { id: data.messageId, roomId: data.roomId, user: socket.user.id, datetime: new Date().getTime(), status: 'seen', message: 'Mensaje recibido' });








          });


          socket.on('disconnect', async (socket) => {
            console.log(`Cliente ${socket.id} se ha desconectado`);
            try {
  
              let onlineUser = await strapi.db.query('api::online-user.online-user').findOne({
                where: { socket_id: socket.id },
              });
  
  
              if (onlineUser) {
  
                await strapi.entityService.update('api::online-user.online-user', onlineUser.id,
  
  
  
                  {
                    data: {
                      status: 'offline'
                    }
                  });
  
              }

      
  
  

  
            } catch (error) {
  
              console.log(error)
  
              throw error;
  
            }
  
  
          });






        })

        strapi.io = io;

  


      } catch (error) {
        console.log(error)
        throw error;
      }


    });

  }




};
