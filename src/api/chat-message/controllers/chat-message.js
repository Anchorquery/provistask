'use strict';

/**
	*  chat-message controller
	*/
	const {URL} = process.env;
	const { v4: uuid } = require('uuid');
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::chat-message.chat-message', ({ strapi }) => ({

	async find(ctx) {

		const user = ctx.state.user;

		if (!user) {

			return ctx.unauthorized("No tienes permiso", { error: 'No autorizado' });

		}

		let  { id, page, limit } = ctx.query;
		let otherUser = [];

		page = page ? parseInt(page) : 1;

		limit=	limit ? parseInt(limit) : 10;


		//si no manda id de conversacion devuelvo error bad request

		if (!id) {

			return ctx.badRequest("No se envio id de conversacion", { error: 'No se envio id de conversacion' });

		}


		const offset = (page - 1) * limit;


		/// BUSCO LA CONVERSACION POR ID PY POR ID DE USUARIO


		let conversacion = await strapi.db.query('api::conversation.conversation').findOne({

			where: { id: id.toString() , users: user.id.toString() },	 

			populate: { users: true }

		});

		

		if (!conversacion) {

			return ctx.unauthorized("No tienes permiso", { error: 'No autorizado' });

		}


		let mensajes = await strapi.db.query('api::chat-message.chat-message').findWithCount({

			where: { conversation: id.toString() },

			orderBy: { "createdAt": "desc" },

			limit: limit,

			offset: offset,

			populate: ["emit", "emit.avatar_image", 'media']

		});


		let total = mensajes[1];

		mensajes = mensajes[0];




		otherUser = conversacion.users.filter(us => us.id != user.id);

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


			if (mensaje.bot || mensaje.emit.id != user.id) {



				if (mensaje.status == 'delivered' || mensaje.status == 'sent') {

					await strapi.entityService.update('api::chat-message.chat-message', mensaje.id,

						{ data: { status: 'seen' } });

					mensaje.status = 'seen';

				}

			}




			let userr = {};
			if (!mensaje.bot) {
				userr = await strapi.entityService.findOne('plugin::users-permissions.user', mensaje.emit.id, {

					populate: { avatar_image: true },
					fields: ['id', "name", "lastname"],
					//ordeno por createdAt
					sort: 'createdAt:DESC'

				});
				userr.avatar_image = userr.avatar_image ? process.env.URL + userr.avatar_image.url : process.env.URL + '/uploads/user_147dd8408e.png';


			} else {

				userr = { id: 'bot', name: 'Provistask', lastname: 'Systems', online: true, avatar_image: process.env.LOGO_APP }

			}

			mensaje.datetime = mensaje.createdAt ? mensaje.createdAt : mensaje.datetime;

			let fechaUnix = new Date(mensaje.datetime).getTime();

			if (mensaje.type != 'image' && mensaje.type != 'file' && mensaje.type != 'video' && mensaje.type != 'audio') {
				mensajes[i] = {

					'author': {
						'firstName': userr.name,
						'id': userr.id.toString(),
						'imageUrl': userr.avatar_image,
						'lastName': userr.lastname
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
						'firstName': userr.name,
						'id': userr.id.toString(),
						'imageUrl': userr.avatar_image,
						'lastName': userr.lastname
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



		//socket.join(conversation);

		// busco si la conversacion con id = id tiene una tarea asiugnada api::task-assigned.task-assigned


		//ordeno por datetime de manera descendente

		///mensajes.sort((a, b) => b.createdAt - a.createdAt);
		let lastPage = Math.ceil(total / limit);

		return ctx.send({ data: {mensajes, otherUser}, meta: { pagination: { page: page, limit: limit, total: total, lastPage: lastPage } } });




	}

}));
