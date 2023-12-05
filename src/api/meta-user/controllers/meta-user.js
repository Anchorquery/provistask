'use strict';

/**
 *  meta-user controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::meta-user.meta-user', ({ strapi }) => ({


	 async updateMe (ctx)  {


			const user = ctx.state.user;

			// si no hay usuario

			if (!user) {
				return ctx.badRequest(null, [
					{
						messages: [
							{
								id: "No autorizado",
								message: "No autorizado",
							},
						],
					},
				]);
			}

			// si hay usuario, lo agrego como parametro id

			// busco el id de la meta del usuario logueado

			const meta = await strapi.db
				.query("api::meta-user.meta-user")
				.findOne({ where: { user: user.id } });



			if (!meta) {
				return ctx.notFound("Not found", {"message": "Not	found"});
			}

			ctx.params.id = meta.id;

			return super.update(ctx);
	}



}));
