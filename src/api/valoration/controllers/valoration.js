'use strict';

/**
 *  valoration controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::valoration.valoration' ,({ strapi }) =>	({


async create(ctx) {
				const user = ctx.state.user;

				if(!user) return ctx.unauthorized('You must be logged in to create a valoration');

				console.log(ctx.request.body);

				const { rating, provider, task, description } = ctx.request.body;


				if(!rating) return ctx.badRequest('You must provide a rating');

				if(rating < 1 || rating > 5) return ctx.badRequest('The rating must be between 1 and 5');


				if (!provider)  return ctx.badRequest('You must provide a provider');


				if (!task)  return ctx.badRequest('You must provide a task');



				// busco la tarea en la base de datos filtrando por el id, el client y el provider


				const taskDB = await strapi.db.query('api::task-assigned.task-assigned').findOne({

					where : {

						id: task,

						client: user.id,

						provider: provider

					},

					populate: ['skill', 'valoration']
				});




				if(!taskDB) return ctx.badRequest('The task does not exist');


				// si la tarea ya posee una valoracion no prosigo

				if(taskDB.valoration) return ctx.badRequest('The task already has a valoration');



				// al existrie la tarea prosigo


				let data = {

					client: user.id,
					provider: provider,
					categorias_skill : taskDB.skill.id,
					valoration: rating,
					description: description ?? 'No description',
					task: taskDB.id

				};


				// creo la valoracion

				await strapi.entityService.create('api::valoration.valoration', {
					data:{
						...data
					}
				});


				return ctx.send({ message: 'Valoration created' });



		}
	
	


}));
