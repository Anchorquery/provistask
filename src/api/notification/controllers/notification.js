'use strict';

/**
 * notification controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::notification.notification', ({ strapi }) => ({


	 async find(ctx) {

		const { user } = ctx.state;

		if (!user) {

			return ctx.unauthorized("No tienes permiso", { error: 'No autorizado' });

		}
		
		// saco parametros de la query

		let { page, limit , type } = ctx.query;


  page = page	? parseInt(page) : 1;

		limit = limit ? parseInt(limit) : 10;

		type	= type ? type : 'all';

		// saco el offset

		const offset = (page - 1) * limit;

		// busco las notificaciones

		let items = await strapi.query('api::notification.notification').findWithCount({

			where: { user: user.id , read : false,

			// si type es all no filtro por tipo

			...(type !== 'all' && { type: type })

			
			},

			limit: limit,

			offset: offset,

			sort: 'created_at:desc',

		});


		// saco el total de paginas

		let total = items[1];

		items	= items[0];


		// los recorro y les doy formato 


		items = items.map(item => {

			return {

				id: item.id,

				type: item.type,

				title : item.title,

				text: item.text,

				read: item.read,

				datetime : item.datetime,

				url : item.url,

			}

		});

		let lastPage = Math.ceil(total / limit);
		return ctx.send({ data: items, meta: { pagination: { page: page, limit: limit, total: total, lastPage: lastPage } } }); 


	},

	async markRead(ctx) {

		const { user } = ctx.state;

		if (!user) {

			return ctx.unauthorized("No tienes permiso", { error: 'No autorizado' });

		}

		const { id } = ctx.params;

		if	(!id) {

			return ctx.badRequest("Falta el id", { error: 'Falta id' });

		}

		/*let item = await strapi.db.query('api::notification.notification').findOne({ id: id, user: user.id });

		if (!item) {

			return ctx.notFound("No se ha encontrado la notificación", { error: 'No encontrado' });

		}*/

		await strapi.db.query('api::notification.notification').update(
			{
				where: { id: id, user: user.id },
				data: { read: true },
			},

		);

		return ctx.send({ data: { id: id, read: true } });


	}

}));
