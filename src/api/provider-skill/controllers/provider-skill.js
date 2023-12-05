'use strict';

const { pop } = require('../../../../config/middlewares');

/**
	* provider-skill controller
	*/

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::provider-skill.provider-skill', ({ strapi }) => ({




	async create(ctx) {


		const user = ctx.state.user;

		if (!user) {

			return ctx.unauthorized("No tienes permiso", { error: 'No autorizado' });

		}


		const { skill_id, cost, type_cost, description } = ctx.request.body.data;

		const skill = await strapi.query('api::skill.skill').findOne({ where: { id: skill_id } });


		if (!skill) {

			return ctx.unauthorized("No existe el skill", { error: 'No existe el skill' });

		}


		// verifico se hayan mandado los demas datos

		if (!cost || !type_cost || !description) {


			return ctx.unauthorized("Faltan datos", { error: 'Faltan datos' });

		}

		let provider_skill = await strapi.query('api::provider-skill.provider-skill').findOne({


			where: { provider: user.id, categorias_skill: skill_id }


		});


		if (provider_skill) {

			// si existe la actualizo


			await strapi.query('api::provider-skill.provider-skill').update(

				{
					where: { id: provider_skill.id },

					data: { cost: cost, type_price: type_cost, description: description }
				}

			);


		} else {


			// si no existe la creo

			provider_skill = await strapi.query('api::provider-skill.provider-skill').create({

				data: {
					provider: user.id,
					categorias_skill: skill_id,
					cost: cost,
					type_price: type_cost,
					description: description
				}

			});

		}


		console.log(provider_skill);

		return provider_skill;




	},

	async delete(ctx) {

		// verifico que el usuario este logueado

		const user = ctx.state.user;

		if (!user) {

			return ctx.unauthorized("No tienes permiso", { error: 'No autorizado' });

		}

		const { id } = ctx.params;

		if (!id) {

			return ctx.badRequest("Faltan datos", { error: 'Faltan datos' });

		}

		console.log(id);

		// ese id corresponde al id de categorias_skill, busco por usuario y categorias_skill

		let provider_skill = await strapi.query('api::provider-skill.provider-skill').findOne({

			where: { provider: user.id, categorias_skill: id }

		});

		console.log(provider_skill);

		if (!provider_skill) {

			return ctx.unauthorized("No existe el skill", { error: 'No existe el skill' });

		}

		// si existe loa agrego como parametro de la url para que se elemine con super.delete

		ctx.params.id = provider_skill.id;

		return await super.delete(ctx);

	},


	async deleteImageByPath(ctx) {


		let { ref, refId, path } = ctx.request.body;



		const user = ctx.state.user;


		if (!user) {

			return ctx.unauthorized("No tienes permiso", { error: 'No autorizado' });

		}


		if (!ref || !refId || !path) {

			return ctx.badRequest("Faltan datos", { error: 'Faltan datos' });

		}

		path = path.replace(process.env.URL, "");

		let archivo = await strapi.db.connection.raw(`SELECT * FROM files WHERE url = '${path}'`);



		if (!archivo[0][0]) {

			return ctx.badRequest("No existe el archivo", { error: 'No existe el archivo' });

		}

		let id = archivo[0][0].id


		let provider_skill = await strapi.query('api::provider-skill.provider-skill').findOne({

			where: { provider: user.id , id: refId },

			populate: ["media"]

		});

		let {	media } = provider_skill;


		const hasMatchingMedia = media.some(item => item.id === id);

		if (!hasMatchingMedia) {
				return ctx.unauthorized("No tienes permiso", { error: 'No autorizado' });
		}




	await strapi.entityService.delete('plugin::upload.file', id);


		return ctx.send({ message: "Archivo eliminado"});
	}



}));
