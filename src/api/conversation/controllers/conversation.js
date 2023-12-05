'use strict';


/**
	* conversation controller
	*/

const { createCoreController } = require('@strapi/strapi').factories;

let { URL} = process.env;

module.exports = createCoreController('api::conversation.conversation', ({ strapi }) => ({

	async find(ctx) {

		try {

			const user = ctx.state.user;

			if (!user) {

				return ctx.unauthorized("No tienes permiso", { error: 'No autorizado' });

			}

			if (ctx.query.filters) {

				if (ctx.query.filters.users) {

					delete ctx.query.filters.users;

				}


			}



			// añado progrmaaticamente el filtro de users para que solo me traiga las conversaciones del usuario logueado

			ctx.query = {

				...ctx.query,


				
				populate: "users",
				filters: {

					...ctx.query.filters,

					users: {

						id: {

							"$in": [user.id]

						}

					}

				}

			}


			// si no hay usuario logueado



			const conversation = await super.find(ctx);


			// recorro conversation.data para completar los datos que me faltan usando for

			for (let i = 0; i < conversation.data.length; i++) {

				let users = conversation.data[i].attributes.users.data;

				delete conversation.data[i].attributes.users;
				// recorro los usuarios para completar los datos que me faltan usando for

				for (let j = 0; j < users.length; j++) {


					// del usuario no logueado solo necesito id, name, lastname, avatar_image , isProvider y online 


					if (users[j].id != user.id) {

						const userp = await strapi.entityService.findOne('plugin::users-permissions.user', users[j].id, {
							populate: { avatar_image: true },
							fields: ['id', 'name', 'lastname', 'isProvider']
						});



						userp.avatar_image = userp.avatar_image ? userp.avatar_image.url : URL + "/uploads/user_147dd8408e.png";


						// busco si es está	online de api::online-user.online-user


					const online =	await strapi.db.query('api::online-user.online-user').findOne({
							select: ['lastConnection', 'status'],
							where: { user: users[j].id }
					});

						if(online){

							userp.online = online;

						}else{

							userp.online = {
								lastConnection: null,
								status: 'offline'
							};

						}



						conversation.data[i].attributes.contact = userp;

					} else {

						continue;
					}











				}

				// elimino users




				// ubico el ultimo mensaje de la conversacion en la base de datos basandome en la	fecha de creacion del mensaje 


				let lastMessage = await strapi.entityService.findMany('api::chat-message.chat-message', {

					fields: ['id', 'message', 'createdAt', "bot"],
					filters: {

						conversation: conversation.data[i].id

					},
					populate: "emit",
					sort: 'createdAt:desc',

					limit: 1

				});

				// cuento la cantidad de mensajes sin leer de status= send y donde el emisor no es el usuario logueado

				let unreadMessages = await strapi.entityService.findMany('api::chat-message.chat-message', {

					filters: {

						conversation: conversation.data[i].id,

						status: "send",



						emit: {

							id: {

								"$ne": user.id
							}
						}

					}

				});

				// asigno la cantidad de mensajes sin leer a la conversacion

				conversation.data[i].attributes.unreadMessages = unreadMessages.length;





				lastMessage ? lastMessage = lastMessage[0] : lastMessage = false;


				if (lastMessage) {

					conversation.data[i].attributes.lastMessage = lastMessage;

					if (lastMessage.bot) {
						conversation.data[i].attributes.lastMessage.isMine = false;

					} else if (lastMessage.emit.id == user.id) {

						conversation.data[i].attributes.lastMessage.isMine = true;

						delete lastMessage.emit

					} else {

						conversation.data[i].attributes.lastMessage.isMine = false;

						delete lastMessage.emit

					}

				} else {

					conversation.data[i].attributes.lastMessage = false;

				}



			}

			return conversation;

		} catch (error) {

			console.log(error)

			return ctx.badRequest(null, error);
		}
	}


}


));
