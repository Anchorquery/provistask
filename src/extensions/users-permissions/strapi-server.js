
let bcrypt = require("bcryptjs");
let geolib = require("geolib");
const { Client } = require("@googlemaps/google-maps-services-js");
let {
	STRIPE_PUBLIC_KEY,
	STRIPE_SECRET_KEY,
	STRIPE_URL,
	STRIPE_ID_CLIENT,
	STRIPE_WEBHOOK_SECRET,
	REMOTE_URL,
	URL,
	COMISION_BASE } = process.env;
const stripe = require("stripe")(STRIPE_SECRET_KEY);
const unparsed = require("koa-body/unparsed.js");
const moment = require("moment");
module.exports = (plugin) => {
	plugin.controllers.user.getOTP = async (ctx) => {
		//obtengo el email del body

		const { email } = ctx.request.body;

		// busco el usuario por email y verifico que exista

		const entity = await strapi.db
			.query("plugin::users-permissions.user")
			.findOne({
				where: { email: email },
				// populo todos los	campos de la tabla
				populate: true,
			});


		// si no hay usuario retorno un error 404

		if (!entity) {
			return ctx.notFound("No se encontró el usuario");
		}

		// si el usuario no esta activo retorno un error 403

		if (entity.blocked) {
			return ctx.forbidden("El usuario está bloqueado");
		}

		// genero un codigo de 6 digitos

		const digits = "0123456789";
		let OTP = "";
		for (let i = 0; i < 6; i++) {
			OTP += digits[Math.floor(Math.random() * 10)];
		}

		// creo una marca de tiempo para que sea la exporacion del codigo de la forma 01/01/2021 00:00:00 , tomando en cuenta la zona horaria del servidor la hora actual mas 20 minutos

		const date = new Date();

		date.setMinutes(date.getMinutes() + 10);

		const expiration = date;

		// actualizo el usuario con la marca de tiempo de expiracion del codigo

		await strapi.entityService.update(
			"plugin::users-permissions.user",
			entity.id,
			{
				data: {
					otp: {
						number: OTP,
						expiration: expiration,
					},
				},
			}
		);

		// envio el codigo por email

		const emailData = {
			to: entity.email,

			//salto el from escribo los textos en ingles

			from: "",

			subject: "Verification	code",

			text: `Your verification code is ${OTP} and will expire at ${expiration}`,

			html: `Your verification code is ${OTP} and will expire at ${expiration}`,
		};

		await strapi.plugins["email"].services.email.send(emailData);

		return ctx.send({ message: "Email sent" });
	};

	plugin.controllers.user.verifyOTP = async (ctx) => {
		//obtengo el email del body

		const { email, otp } = ctx.request.body;

		// busco el usuario por email y verifico que exista

		const entity = await strapi.db
			.query("plugin::users-permissions.user")
			.findOne({
				where: { email: email },
				populate: { otp: true },
			});

		// si no hay usuario retorno un error 404

		if (!entity) {
			return ctx.notFound("No se encontró el usuario");
		}

		// si el usuario no esta activo retorno un error 403

		if (entity.blocked) {
			console.log("El usuario está bloqueado");

			return ctx.forbidden("El usuario está bloqueado");
		}

		// verifico el que el otp de la base de datos sea igual al que se envio en el body Y que la fecha de expiracion sea mayor a la fecha actual

		let expiracion = new Date(entity.otp.expiration);

		let now = new Date();

		console.log("expiracion", expiracion);

		console.log("now", now);

		// comparo las fechas

		if (entity.otp.number == otp && expiracion > new Date()) {
			// si es correcto lo quito de la base de datos

			await strapi.entityService.update(
				"plugin::users-permissions.user",
				entity.id,
				{
					data: {
						otp: {
							number: entity.otp.number,
							expiration: expiracion,
							status: true,
						},
					},
				}
			);

			// retorno un mensaje de exito 200

			return ctx.send({ message: "Success" });
		}

		// si no es correcto retorno un error 403
		console.log("Invalid otp", entity.otp.number);
		console.log("Invalid code", otp);
		return ctx.forbidden("Invalid code", {
			message: "Invalid code or expiratio ",
		});
	};

	plugin.controllers.user.otpChangePassword = async (ctx) => {
		//obtengo el email del body

		let { email, otp, password } = ctx.request.body;

		// busco el usuario por email y verifico que exista

		const entity = await strapi.db
			.query("plugin::users-permissions.user")
			.findOne({
				where: { email: email },

				populate: { otp: true },
			});

		// si no hay usuario retorno un error 404

		if (!entity) {
			return ctx.notFound("No se encontró el usuario", {
				message: "No se encontró el usuario",
			});
		}

		// si el usuario no esta activo retorno un error 403

		if (entity.blocked) {
			return ctx.forbidden("El usuario está bloqueado", {
				message: "El usuario está bloqueado",
			});
		}

		// verifico el que el otp de la base de datos sea igual al que se envio en el body que su status sea true Y que la fecha de expiracion sea de las ultims 24 horas

		let expiracion = new Date(entity.otp.expiration);

		let now = new Date();

		console.log("expiracion", expiracion);

		console.log("now", now);

		// comparo las fechas

		if (
			entity.otp.number == otp &&
			entity.otp.status == true &&
			expiracion > new Date()
		) {
			// si es correcto lo quito de la base de datos

			// encrypto la contraseña

			password = bcrypt.hashSync(password, 10);

			console.log("hash", password);

			await strapi.entityService.update(
				"plugin::users-permissions.user",
				entity.id,
				{
					data: {
						password: password,

						otp: null,
					},
				}
			);

			// retorno un mensaje de exito 200

			return ctx.send({ message: "Success" });
		} else {
			// si no es correcto retorno un error 403 // traduce al ingles: No se pudo validar su solicitud, intente nuevamente

			console.log("Invalid otp", entity.otp);
			return ctx.forbidden("Error validation", {
				message: "Your request could not be validated, please try again.",
			});
		}
		// retorno un mensaje de exito 200
	};
	async function calcularDistancia(
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
	}
	function convertirHoraAMPM(hora) {
		let partesHora = hora.split(":");
		let horas = parseInt(partesHora[0]);
		let minutos = parseInt(partesHora[1].slice(0, 2));
		let esAM = partesHora[1].slice(-2).toLowerCase() === "am";

		if (!esAM && horas !== 12) {
			horas += 12;
		} else if (esAM && horas === 12) {
			horas = 0;
		}

		return {
			horas: horas,
			minutos: minutos,
		};
	}

	function convertirFechaHora(fecha, hora) {
		let partesFecha = fecha.split("-");
		let anio = parseInt(partesFecha[0]);
		let mes = parseInt(partesFecha[1]) - 1;
		let dia = parseInt(partesFecha[2]);

		let partesHora = convertirHoraAMPM(hora);
		let horas = partesHora.horas;
		let minutos = partesHora.minutos;

		// Crear una cadena de texto con el formato deseado (YYYY-MM-DD HH:mm:ss.000000)
		let fechaHoraFormateada = `${anio}-${(mes + 1)
			.toString()
			.padStart(2, "0")}-${dia.toString().padStart(2, "0")} ${horas
				.toString()
				.padStart(2, "0")}:${minutos.toString().padStart(2, "0")}:00.000000`;

		return fechaHoraFormateada;
	}

	plugin.controllers.user.buscarProveedores = async (ctx) => {
		try {
			console.log("entro a buscar proveedores");
			let {
				lat,
				lng,
				transportation,
				distance,
				start,
				limit,
				type_price,
				time_of_day,
				provider_type,
				sortBy,
				hour,
				day,
				skill,
				long_task,
			} = ctx.query;

			if (!lat || !lng || !skill || !long_task || !day) {
				return ctx.badRequest(
					"No se envio latitud o longitud o skill o long_task o day"
				);
			}

			if (!time_of_day && !hour) {
				return ctx.badRequest("No se envio time_of_day o hour");
			}

			// saco el usuario del token

			const user = ctx.state.user ? ctx.state.user.id : null;

			start = start ? parseInt(start) : 0;

			limit = limit ? parseInt(limit) : 10;

			sortBy = sortBy ? sortBy.toLowerCase() : "distance";

			let car, truck, motorcycle;

			if (transportation) {
				// debe ser alguno de estos valores not_necessary motorcycle car truck , si es un valor distinto lo vuelvo  not_necessary

				if (
					transportation != "not_necessary" &&
					transportation != "motorcycle" &&
					transportation != "car" &&
					transportation != "truck"
				) {
					car = false;

					truck = false;

					motorcycle = false;
				} else {
					car = transportation == "car" ? true : false;

					truck = transportation == "truck" ? true : false;

					motorcycle = transportation == "motorcycle" ? true : false;
				}
			} else {
				transportation = "not_necessary";
				car = false;

				truck = false;

				motorcycle = false;
			}

			if (provider_type) {
				// debe ser cualqueirda de los siguientes valores normal elite great not_provider

				if (
					provider_type != "normal" &&
					provider_type != "elite" &&
					provider_type != "great" &&
					provider_type != "not_provider"
				) {
					provider_type = "not_provider";
				}
			} else {
				provider_type = "not_provider";
			}
			provider_type = provider_type == "not_provider" ? null : provider_type;

			if (type_price) {
				// debe ser alguno de estos valores per_hour by_project_flat_rate free_trading sino es null

				if (
					type_price != "per_hour" &&
					type_price != "by_project_flat_rate" &&
					type_price != "free_trading"
				) {
					type_price = null;
				}
			} else {
				type_price = null;
			}

			/*
	@long_task es requerido. Debe ser uno de los siguientes valores: small, medium, large  y cada una corresponde a un rango de tiempo en horas


*/

			if (long_task) {
				// debe ser alguno de estos valores small medium large

				if (
					long_task != "small" &&
					long_task != "medium" &&
					long_task != "large"
				) {
					long_task = "small";
				}
			}

			// cada long_task tiene un rango de horas , lo que hago es convertirlo a un numero para poder hacer la consulta

			let open_disponibility = "00:00:00";
			let close_disponibility = "23:59:59";
			let datetime = null;

			if (hour == "I'm Flexible" || hour == "flexible") {
				hour = null;
			}

			if (time_of_day && !hour) {
				// Colocar rangos de tiempo según el valor de time_of_day que puede ser "morning", "afternoon", "evening"
				if (time_of_day == "morning") {
					open_disponibility = "08:00:00.000";
					close_disponibility = "12:00:00.000";
				} else if (time_of_day == "afternoon") {
					open_disponibility = "12:00:00.000";
					close_disponibility = "17:00:00.000";
				} else if (time_of_day == "evening") {
					open_disponibility = "17:00:00.000";
					close_disponibility = "23:00:00.000";
				}
			} else if (hour) {
				// no importa la disponibilidad , solo si tienen la hora y el range de tiempo disponible
				open_disponibility = "00:00:00";
				close_disponibility = "23:59:59";

				datetime = convertirFechaHora(day, hour);

				//	datetimeOut = null;

				if (long_task == "large") {
					// corresponde a a un rango de 4 a partir de la hora que se envia , por lo que el proveedor debe tener una disponibilidad de 5

					//	datetimeOut = moment(datetime).add(4, 'hours').format('YYYY-MM-DD HH:mm:ss');
					long_task = 4;
				} else if (long_task == "medium") {
					long_task = 2;

					//	datetimeOut = moment(datetime).add(2, 'hours').format('YYYY-MM-DD HH:mm:ss');
				} else {
					long_task = 1;
				}
			}

			/*	return ctx.send({ data: { lat, lng, transportation, distance, start, limit, type_price, time_of_day, provider_type, sortBy, hour, day, skill,long_task,open_disponibility,close_disponibility, datetime } });*/
			let proID = [];

			// convierto skill en un numero y verifico sea un numero valido

			skill = parseInt(skill);

			proID = await strapi.db.connection.raw(
				`
			SELECT up_users.id
			FROM up_users
			LEFT JOIN task_assigneds_provider_links ON up_users.id = task_assigneds_provider_links.user_id
			LEFT JOIN task_assigneds ON task_assigneds_provider_links.task_assigned_id = task_assigneds.id
			LEFT JOIN provider_skills_provider_links ON up_users.id = provider_skills_provider_links.user_id
			LEFT JOIN provider_skills_categorias_skill_links ON provider_skills_provider_links.provider_skill_id = provider_skills_categorias_skill_links.provider_skill_id
			LEFT JOIN skills ON provider_skills_categorias_skill_links.skill_id = skills.id
			LEFT JOIN provider_skills ON provider_skills_provider_links.provider_skill_id = provider_skills.id -- Nueva unión con la tabla provider_skills
			WHERE up_users.is_provider = true
			AND up_users.confirmed = true 
			AND up_users.blocked = false
			AND (up_users.id <> ? OR ? IS NULL)
			AND (up_users.car = ? OR ? = 'true')
			AND (up_users.motorcycle = ? OR ? = 'true')
			AND (up_users.truck = ? OR ? = 'true')
			AND (up_users.type_provider = ? OR ? IS NULL)
			AND (skills.id = ? OR ? IS NULL)
			AND ST_Distance_Sphere(POINT(up_users.lng, up_users.lat), POINT(?, ?)) < ?
			AND (
							(TIME(up_users.open_disponibility) BETWEEN TIME(?) AND TIME(?))
							OR
							(TIME(up_users.close_disponibility) BETWEEN TIME(?) AND TIME(?))
			)
			AND (
							? IS NULL
							OR
							up_users.id NOT IN (
											SELECT DISTINCT task_assigneds_provider_links.user_id
											FROM task_assigneds_provider_links
											JOIN task_assigneds ON task_assigneds_provider_links.task_assigned_id = task_assigneds.id
											WHERE task_assigneds.datetime >= ?
											AND task_assigneds.datetime <= DATE_ADD(?, INTERVAL ? HOUR)
											AND up_users.id IS NOT NULL
							)
			)
			AND (provider_skills.type_price = ? OR ? IS NULL)
			GROUP BY up_users.id
			ORDER BY ST_Distance_Sphere(POINT(up_users.lng, up_users.lat), POINT(?, ?))
			LIMIT ?, ?;	
`,
				[
					user,
					user,
					car,
					car,
					motorcycle,
					motorcycle,
					truck,
					truck,
					provider_type,
					provider_type,
					skill,
					skill,
					lng,
					lat,
					6000,
					open_disponibility,
					close_disponibility,
					open_disponibility,
					close_disponibility,
					datetime,
					datetime,
					datetime,
					long_task,
					type_price,
					type_price,
					lng,
					lat,
					start,
					limit,
				]
			);

			/*
sql
SELECT up_users.id
FROM up_users
JOIN provider_skills_provider_links ON up_users.id = provider_skills_provider_links.user_id
JOIN provider_skills_categorias_skill_links ON provider_skills_provider_links.provider_skill_id = provider_skills_categorias_skill_links.provider_skill_id
JOIN skills ON provider_skills_categorias_skill_links.skill_id = skills.id
JOIN provider_skills ON provider_skills_provider_links.provider_skill_id = provider_skills.id
LEFT JOIN task_assigneds_provider_links ON up_users.id = task_assigneds_provider_links.user_id
LEFT JOIN task_assigneds ON task_assigneds_provider_links.task_assigned_id = task_assigneds.id
WHERE up_users.is_provider = true
AND (up_users.id <> ? OR ? IS NULL)
AND (up_users.car = ? OR ? = 'true')
AND (up_users.motorcycle = ? OR ? = 'true')
AND (up_users.truck = ? OR ? = 'true')
AND (up_users.type_provider = ? OR ? IS NULL)
AND (skills.id = ? OR ? IS NULL)
AND ST_Distance_Sphere(POINT(up_users.lng, up_users.lat), POINT(?, ?)) < ?
AND TIME(up_users.open_disponibility) <= TIME(?)
AND TIME(up_users.close_disponibility) >= TIME(?)
AND (task_assigneds_provider_links.user_id IS NULL
OR task_assigneds.datetime < ?
OR task_assigneds.datetime > DATE_ADD(?, INTERVAL ? HOUR))
AND (provider_skills.type_price = ? OR ? IS NULL)
GROUP BY up_users.id
ORDER BY ST_Distance_Sphere(POINT(up_users.lng, up_users.lat), POINT(?, ?))
LIMIT ?;

*/

			proID = proID[0].map((pro) => pro.id);

			// busco a todos los usuarios que correspondan a los ids que me devolvio la consulta anterior usando super.Find para tener paginacion y ordenamiento

			const proveedores = await strapi.entityService.findMany(
				"plugin::users-permissions.user",
				{
					filters: {
						$and: [
							{
								id: {
									$in: proID,
								},
							},
						],
					},
					// no incluyo al que hace la busqueda

					start: start,
					limit: limit,
					populate: [
						"location",
						"avatar_image",
						"provider_skills",
						"provider_skills.categorias_skill,provider_skills.media",
					],
				}
			);

			// segundo filtrado para saber si tienen disponibilidad

			for (const proveedor of proveedores) {
				try {
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
					//		const distanceGoogle = await calcularDistancia(lat, lng, proveedor.lat, proveedor.lng);

					// Agregar distancia Google Maps al objeto proveedor
					//	proveedor.distanceGoogle = distanceGoogle;

					proveedor.online = await strapi.db
						.query("api::online-user.online-user")
						.findOne({
							where: { user: proveedor.id },
							select: ["socket_id", "lastConnection", "status"],
						});

					let average = await strapi.db
						.query("api::valoration.valoration")
						.findMany({
							where: { provider: proveedor.id },
						});

					proveedor["averageScore"] =
						average.length > 0
							? average.reduce((a, b) => a + b.valoration, 0) / average.length
							: 0;
					proveedor["averageCount"] = average.length;
					let taskCompleted = await strapi.db
						.query("api::task-assigned.task-assigned")
						.count({
							where: {
								provider: proveedor.id,
								status: "completed",
							},
						});

					let avgAux = {
						averageScore: 0,
						averageCount: 0,
					};
					let averageSkill = await strapi.db
						.query("api::valoration.valoration")
						.findWithCount({
							where: { provider: proveedor.id, categorias_skill: skill },
						});

					let taskCompletedSkill = await strapi.db
						.query("api::task-assigned.task-assigned")
						.count({
							where: {
								provider: proveedor.id,
								status: "completed",
								skill: skill,
							},
						});

					avgAux.averageScore =
						averageSkill[1] > 0
							? averageSkill[0].reduce((a, b) => a + b.valoration, 0) /
							averageSkill[1]
							: 0;

					avgAux.averageCount = averageSkill[1];

					proveedor["taskCompleted"] = taskCompleted;

					if (proveedor.online) {
						if (proveedor.online.status == "offline") {
							proveedor.online.lastConnection = generateConnectionMessage(
								proveedor.online.lastConnection
							);
						} else {
							proveedor.online.lastConnection = "online";
						}
					} else {
						proveedor.online = {
							socket_id: null,
							lastConnection: null,
							status: "offline",
						};
					}

					delete proveedor.createdAt;
					delete proveedor.updatedAt;
					delete proveedor.provider;
					delete proveedor.password;
					delete proveedor.resetPasswordToken;
					delete proveedor.confirmationToken;
					delete proveedor.otp;
					delete proveedor.blocked;
					delete proveedor.confirmed;
					delete proveedor.stripe_customer_id;
					delete proveedor.stripe_connect_id;
					delete proveedor.is_stripe_connect;
					delete proveedor.lat;
					delete proveedor.lng;
					delete proveedor.email;
					delete proveedor.phone;
					delete proveedor.username;
					delete proveedor.postal_code;

					proveedor.avatar_image = proveedor.avatar_image
						? URL + proveedor.avatar_image.url
						: null;

					proveedor.provider_skills = proveedor.provider_skills.map(
						(skillP) => {
							// si la skillP recorrida comparte id con skill de la consulta , lo agrego al campo proveedor.skill_select

							let media = [];

							if (skillP.media) {
								media = skillP.media.map((media) => {
									return URL + media.url;
								});
							}

							if (skillP.categorias_skill.id == skill) {
								let average = strapi.db
									.query("api::valoration.valoration")
									.findMany({
										where: {
											provider: proveedor.id,
											categorias_skill: skillP.categorias_skill.id,
										},
									});

								proveedor.skill_select = {
									id: skillP.id,
									taskCompleted: taskCompletedSkill,
									scoreAverage: avgAux.averageScore,
									count: avgAux.averageCount,
									type_price: skillP.type_price,
									cost: skillP.cost,
									media: skillP.media ? media : null,
									categorias_skill: skillP.categorias_skill
										? skillP.categorias_skill.name
										: null,
									categorias_skill_id: skillP.categorias_skill
										? skillP.categorias_skill.id
										: null,
									description: skillP.description ? skillP.description : null,
									hourMinimum: skillP.hourMinimum
										? skillP.hourMinimum
										: "hour_1",
								};
							}

							return {
								id: skillP.id,
								type_price: skillP.type_price,
								cost: skillP.cost,
								media: skillP.media ? media : null,
								categorias_skill: skillP.categorias_skill
									? skillP.categorias_skill.name
									: null,
								categorias_skill_id: skillP.categorias_skill
									? skillP.categorias_skill.id
									: null,
								description: skillP.description ? skillP.description : null,
								hourMinimum: skillP.hourMinimum ? skillP.hourMinimum : "hour_1",
							};
						}
					);
				} catch (error) {
					console.error("Error al calcular la distancia:", error);
				}
			}

			// ordeno los proveedores segun el parametro sortBy que me llega por query

			if (sortBy == "distance") {
				proveedores.sort((a, b) => a.distanceLineal - b.distanceLineal);
			} else if (sortBy == "rating") {
				proveedores.sort((a, b) => b.averageScore - a.averageScore);
			} else if (sortBy == "price") {
				proveedores.sort((a, b) => a.skill_select.cost - b.skill_select.cost);
			}

			//creo meta	para la paginacion

			const meta = {
				start: start,
				limit: limit,

				total: proveedores.length,
			};

			return ctx.send({ data: proveedores, meta: meta });
		} catch (error) {
			console.error("Error al buscar proveedores:", error);

			return ctx.badRequest("Error al buscar proveedores");
		}
	};
	function generateConnectionMessage(lastConnectionTime) {
		const now = new Date();
		// Tu fecha y hora en formato ISO 8601 (ejemplo, reemplaza con tu fecha y hora)
		const tuDatetime = new Date(lastConnectionTime);
		// Calcular la diferencia de tiempo en milisegundos
		const diferencia = now - tuDatetime;
		// Convertir la diferencia a minutos, horas y días
		const minutos = Math.floor(diferencia / (1000 * 60));
		const horas = Math.floor(diferencia / (1000 * 60 * 60));
		const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
		// Crear el mensaje de conexión
		let mensaje = "";
		if (dias > 0) {
			mensaje = `${dias} days`;
		} else if (horas > 0) {
			mensaje = `${horas} hours`;
		} else if (minutos > 0) {
			mensaje = `${minutos} minutes`;
		} else {
			mensaje = "a few seconds";
		}

		return mensaje;
	}
	plugin.controllers.user.perfilProveedor = async (ctx) => {
		try {
			const { id } = ctx.params;

			console.log("id", id);

			let { lat, lng, idSkill, reviews } = ctx.query;

			if (!lat || !lng || lat == "false" || lng == "false") {
				lat = null;
				lng = null;
			}

			console

			// saco el id del usuario logueado

			if (!id) return ctx.badRequest("No se envio el id del proveedor");

			const proveedor = await strapi.entityService.findOne(
				"plugin::users-permissions.user",
				id,
				{
					populate: [
						"avatar_image",
						"provider_skills",
						"provider_skills.categorias_skill,provider_skills.media",
					],
				}
			);



			const tareas = await strapi.entityService.findMany(
				"api::task-assigned.task-assigned",
				{
					filters: {
						provider: id,
						status: "acepted",
					},
					fields: ["id", "datetime"],

					sort: "datetime:asc",

					//populate: { user: true }
				}
			);

			// elimino createdAt y updatedAt de las tareas

			tareas.forEach((tarea) => {
				delete tarea.createdAt;
				delete tarea.updatedAt;
			});

			if (lat != null && lng != null && lat != "null" && lng != "null") {
				let distance = await geolib.getDistance(
					{ latitude: lat, longitude: lng },
					{ latitude: proveedor.lat, longitude: proveedor.lng }
				);

				console.log("distance", distance);

				// Convertir distancia a kilómetros
				distance = distance / 1000;

				// Redondear distancia a 2 decimales
				distance = Math.round(distance * 100) / 100;

				// Agregar distancia al objeto proveedor
				proveedor.distanceLineal = distance;
			} else {
				proveedor.distanceLineal = null;
			}

			proveedor.online = await strapi.db
				.query("api::online-user.online-user")
				.findOne({
					where: { user: proveedor.id },
					select: ["socket_id", "lastConnection", "status"],
				});

			let taskCompletedTotal = await strapi.db
				.query("api::task-assigned.task-assigned")
				.count({
					where: {
						provider: proveedor.id,
						status: "completed",
					},
				});

			if (idSkill) {
				var avgAux = {
					averageScore: 0,
					averageCount: 0,
				};
				var averageSkill = await strapi.db
					.query("api::valoration.valoration")
					.findWithCount({
						where: { provider: proveedor.id, categorias_skill: idSkill },
					});

				var taskCompletedSkill = await strapi.db
					.query("api::task-assigned.task-assigned")
					.count({
						where: {
							provider: proveedor.id,
							status: "completed",
							skill: idSkill,
						},
					});

				avgAux.averageScore =
					averageSkill[1] > 0
						? averageSkill[0].reduce((a, b) => a + b.valoration, 0) /
						averageSkill[1]
						: 0;

				avgAux.averageCount = averageSkill[1];
			}

			proveedor["taskCompletedTotal"] = taskCompletedTotal;

			if (reviews && idSkill) {
				var reviewsdb = await strapi.db
					.query("api::valoration.valoration")
					.findMany({
						where: { provider: proveedor.id, categorias_skill: idSkill },

						populate: ["client", "client.avatar_image"],
					});

				reviewsdb = reviewsdb.map((review) => {
					// rerorno valoracion, comentario, fecha, nombre del cliente, avatar del cliente

					return {
						valoration: review.valoration,
						comment: review.description,
						date: review.createdAt,
						client: review.client.name + " " + review.client.lastname,
						avatar: review.client.avatar_image
							? URL + review.client.avatar_image.url
							: null,
					};
				});
			}

			proveedor["reviews"] = reviewsdb ? reviewsdb : [];

			if (proveedor.online) {
				if (proveedor.online.status == "offline") {
					proveedor.online.lastConnection = generateConnectionMessage(
						proveedor.online.lastConnection
					);
				} else {
					proveedor.online.lastConnection = "online";
				}
			} else {
				proveedor.online = {
					socket_id: null,
					lastConnection: null,
					status: "offline",
				};
			}

			delete proveedor.createdAt;
			delete proveedor.updatedAt;
			delete proveedor.provider;
			delete proveedor.password;
			delete proveedor.resetPasswordToken;
			delete proveedor.confirmationToken;
			delete proveedor.otp;
			delete proveedor.blocked;
			delete proveedor.confirmed;
			delete proveedor.stripe_customer_id;
			delete proveedor.stripe_connect_id;
			delete proveedor.is_stripe_connect;
			delete proveedor.lat;
			delete proveedor.lng;
			delete proveedor.email;
			delete proveedor.phone;
			delete proveedor.username;
			delete proveedor.postal_code;

			proveedor.avatar_image = proveedor.avatar_image
				? URL + proveedor.avatar_image.url
				: null;

			proveedor.provider_skills = proveedor.provider_skills.map((skillP) => {
				let media = [];

				if (skillP.media) {
					media = skillP.media.map((media) => {
						return URL + media.url;
					});
				}
				if (idSkill) {
					if (skillP.categorias_skill.id == idSkill) {
						proveedor.skill_select = {
							id: skillP.id,
							taskCompleted: taskCompletedSkill,
							scoreAverage: avgAux.averageScore,
							count: avgAux.averageCount,
							type_price: skillP.type_price,
							cost: skillP.cost,
							media: skillP.media ? media : null,
							categorias_skill: skillP.categorias_skill
								? skillP.categorias_skill.name
								: null,
							categorias_skill_id: skillP.categorias_skill
								? skillP.categorias_skill.id
								: null,
							description: skillP.description ? skillP.description : null,
							hourMinimum: skillP.hourMinimum ? skillP.hourMinimum : "hour_1",
						};
					}
				}

				return {
					id: skillP.id,
					type_price: skillP.type_price,
					cost: skillP.cost,
					media: skillP.media ? media : null,
					categorias_skill: skillP.categorias_skill
						? skillP.categorias_skill.name
						: null,
					categorias_skill_id: skillP.categorias_skill
						? skillP.categorias_skill.id
						: null,
					description: skillP.description ? skillP.description : null,
					hourMinimum: skillP.hourMinimum ? skillP.hourMinimum : "hour_1",
				};
			});


			let average = await strapi.db
				.query("api::valoration.valoration")
				.findWithCount({
					where: { provider: proveedor.id },
				});

			proveedor["averageScore"] =
				average[1] > 0
					? average[0].reduce((a, b) => a + b.valoration, 0) / average[1]
					: 0;

			proveedor["averageCount"] = average[1];

			const horasDisponibles = getTimes(
				proveedor.open_disponibility,
				proveedor.close_disponibility
			);

			proveedor.car = proveedor.car ? true : false;

			proveedor.truck = proveedor.truck ? true : false;

			proveedor.motorcycle = proveedor.motorcycle ? true : false;

			proveedor.horasDisponibles = horasDisponibles;

			return ctx.send({ proveedor: proveedor, tareas: tareas });
		} catch (error) {
			console.error("Error al buscar proveedores:", error);

			return ctx.badRequest("Error al buscar proveedores");
		}
	};

	plugin.controllers.user.buscarProveedoresDestacados = async (ctx) => {
		try {
			// saco parametros de la query

			let { lat, lng, start, limit, distance } = ctx.query;

			const user = ctx.state.user;

			const user_id = user ? user.id : null;

			// lat y lng solo pueden ser numeros lat del -90 al 90 y lng del -180 al 180

			if (lat && lng) {

				lat = parseFloat(lat);

				lng = parseFloat(lng);

				if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {

					// los vuelvo null

					lat = null;

					lng = null;

				}


			}



			distance = distance ? distance : 6000;

			start = start ? parseInt(start) : 0;

			limit = limit ? parseInt(limit) : 10;

			let proID = [];

			if (lat && lng) {

				proID = await strapi.db.connection.raw(
					`SELECT up_users.id
							FROM up_users
							LEFT JOIN valorations_provider_links ON up_users.id = valorations_provider_links.user_id
							LEFT JOIN valorations ON valorations.id = valorations_provider_links.valoration_id
							WHERE up_users.is_provider = true
							AND up_users.confirmed = true
							AND up_users.blocked = false
							AND (up_users.id <> ? OR ? IS NULL)
							AND ST_Distance_Sphere(POINT(up_users.lng, up_users.lat), POINT(?, ?)) < ?
							AND (
								up_users.type_provider = 'elite' OR up_users.type_provider = 'great'
								OR
								(
												up_users.type_provider <> 'elite' AND up_users.type_provider <> 'great' AND
												(
																SELECT COUNT(*) FROM valorations_provider_links WHERE valorations_provider_links.user_id = up_users.id
												) > 1
								)
				)

							GROUP BY up_users.id,up_users.type_provider
							HAVING AVG(valorations.valoration) > 4 OR up_users.id IN (
								SELECT up_users.id
								FROM up_users
								WHERE up_users.type_provider = 'elite'
								OR up_users.type_provider = 'great'
							)

							ORDER BY AVG(valorations.valoration) DESC
							LIMIT ?, ?;
			`,
					[
						user_id,
						user_id,
						lng,
						lat,
						distance,
						start,
						limit,
					]
				)
			} else {

				proID = await strapi.db.connection.raw(
					`SELECT up_users.id
								FROM up_users
								LEFT JOIN valorations_provider_links ON up_users.id = valorations_provider_links.user_id
								LEFT JOIN valorations ON valorations.id = valorations_provider_links.valoration_id
								WHERE up_users.is_provider = true
								AND up_users.confirmed = true
								AND up_users.blocked = false
								AND (up_users.id <> ? OR ? IS NULL)
								AND (
									up_users.type_provider = 'elite' OR up_users.type_provider = 'great'
									OR
									(
													up_users.type_provider <> 'elite' AND up_users.type_provider <> 'great' AND
													(
																	SELECT COUNT(*) FROM valorations_provider_links WHERE valorations_provider_links.user_id = up_users.id
													) > 1
									)
					)
								GROUP BY up_users.id,up_users.type_provider
								HAVING AVG(valorations.valoration) > 4 OR up_users.id IN (
									SELECT up_users.id
									FROM up_users
									WHERE up_users.type_provider = 'elite'
									OR up_users.type_provider = 'great'
					)


								LIMIT ?, ?;
				`,
					[
						user_id,
						user_id,
						start,
						limit,
					]
				)

			}

			proID = proID[0].map((pro) => pro.id);


			const proveedores = await strapi.entityService.findMany(
				"plugin::users-permissions.user",
				{
					filters: {
						$and: [
							{
								id: {
									$in: proID,
								},
							},
						],
					},
					// no incluyo al que hace la busqueda

					start: start,
					limit: limit,
					populate: [
						"avatar_image",
						"provider_skills",
						"provider_skills.categorias_skill,provider_skills.media",
					],
				}
			);

			// segundo filtrado para saber si tienen disponibilidad

			for (const proveedor of proveedores) {


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

				} else {

					proveedor.distanceLineal = null;

				}

				delete proveedor.createdAt;
				delete proveedor.updatedAt;
				delete proveedor.provider;
				delete proveedor.password;
				delete proveedor.resetPasswordToken;
				delete proveedor.confirmationToken;
				delete proveedor.otp;
				delete proveedor.blocked;
				delete proveedor.confirmed;
				delete proveedor.stripe_customer_id;
				delete proveedor.stripe_connect_id;
				delete proveedor.is_stripe_connect;
				proveedor.lat ? delete proveedor.lat : null;
				proveedor.lng ? delete proveedor.lng : null;
				delete proveedor.email;
				delete proveedor.phone;
				delete proveedor.username;
				delete proveedor.postal_code;



				proveedor.avatar_image = proveedor.avatar_image
					? URL + proveedor.avatar_image.url
					: null;

				proveedor.online = await strapi.db
					.query("api::online-user.online-user")
					.findOne({
						where: { user: proveedor.id },
						select: ["socket_id", "lastConnection", "status"],
					});

				let average = await strapi.db
					.query("api::valoration.valoration")
					.findMany({
						where: { provider: proveedor.id },
					});

				proveedor["averageScore"] =
					average.length > 0
						? average.reduce((a, b) => a + b.valoration, 0) / average.length
						: 0;
				proveedor["averageCount"] = average.length;
				let taskCompleted = await strapi.db
					.query("api::task-assigned.task-assigned")
					.count({
						where: {
							provider: proveedor.id,
							status: "completed",
						},
					});







				proveedor["taskCompleted"] = taskCompleted;

				if (proveedor.online) {
					if (proveedor.online.status == "offline") {
						proveedor.online.lastConnection = generateConnectionMessage(
							proveedor.online.lastConnection
						);
					} else {
						proveedor.online.lastConnection = "online";
					}
				} else {
					proveedor.online = {
						socket_id: null,
						lastConnection: null,
						status: "offline",
					};
				}



				proveedor.provider_skills = proveedor.provider_skills.map(
					(skillP) => {
						// si la skillP recorrida comparte id con skill de la consulta , lo agrego al campo proveedor.skill_select

						let media = [];

						if (skillP.media) {
							media = skillP.media.map((media) => {
								return URL + media.url;
							});
						}



						return {
							id: skillP.id,
							type_price: skillP.type_price,
							cost: skillP.cost,
							media: skillP.media ? media : null,
							categorias_skill: skillP.categorias_skill
								? skillP.categorias_skill.name
								: null,
							categorias_skill_id: skillP.categorias_skill
								? skillP.categorias_skill.id
								: null,
							description: skillP.description ? skillP.description : null,
							hourMinimum: skillP.hourMinimum ? skillP.hourMinimum : "hour_1",
						};
					}
				);

			}

			proveedores.sort((a, b) => b.averageScore - a.averageScore);

			//creo meta	para la paginacion

			const meta = {
				start: start,
				limit: limit,

				total: proveedores.length,
			};

			return ctx.send({ data: proveedores, meta: meta });
		} catch (error) {

			console.error("Error al buscar proveedores:", error);

			return ctx.badRequest("Error al buscar proveedores");

		}

	};

	plugin.controllers.user.buscarProveedoresBorF = async (ctx) => {
		try {
			// saco el usuario del token

			const user = ctx.state.user;

			console.log(user);

			//verifico exista

			if (!user) return ctx.badRequest("No se envio el usuario");

			// reviso el filtro que se mandó buscnado el diltro status

			let { status, lat, lng, start, limit, distance } = ctx.query;

			if (lat && lng) {

				lat = parseFloat(lat);

				lng = parseFloat(lng);

				if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {

					// los vuelvo null

					lat = null;

					lng = null;

				}


			}

			status = status ? status : "booked";


			distance = distance ? distance : 6000;

			start = start ? parseInt(start) : 0;

			limit = limit ? parseInt(limit) : 10;

			let idSkill = null;
			let idsUnicos = [];

			if (status == "booked") {
				// saco los proveedores de las tareas asignadas

				const proveedores = await strapi.entityService.findMany(
					"api::task-assigned.task-assigned",
					{
						filters: {
							client: {
								id: {
									$eq: user.id,
								},
							},
						},

						populate: { provider: true },
					}
				);

				const ids = proveedores.map((proveedor) => proveedor.provider.id);

				idsUnicos = [...new Set(ids)];


			} else {

				const proveedores = await strapi.entityService.findMany(
					"api::favorite.favorite",
					{
						filters: {
							user: {
								id: {
									$eq: user.id,
								},
							},
						},
						populate: { favorite: true },
					}
				);

				// saco los ids de los proveedores y los guardo en un array unico

				const ids = proveedores.map((proveedor) => proveedor.favorite.id);

				idsUnicos = [...new Set(ids)];


			}

			const proveedores = await strapi.entityService.findMany(
				"plugin::users-permissions.user",
				{
					filters: {
						$and: [
							{
								id: {
									$in: idsUnicos,
								},
							},
						],
					},
					// no incluyo al que hace la busqueda

					start: start,
					limit: limit,
					populate: [
						"avatar_image",
						"provider_skills",
						"provider_skills.categorias_skill,provider_skills.media",
					],
				}
			);

			// segundo filtrado para saber si tienen disponibilidad

			for (const proveedor of proveedores) {


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

				} else {

					proveedor.distanceLineal = null;

				}

				delete proveedor.createdAt;
				delete proveedor.updatedAt;
				delete proveedor.provider;
				delete proveedor.password;
				delete proveedor.resetPasswordToken;
				delete proveedor.confirmationToken;
				delete proveedor.otp;
				delete proveedor.blocked;
				delete proveedor.confirmed;
				delete proveedor.stripe_customer_id;
				delete proveedor.stripe_connect_id;
				delete proveedor.is_stripe_connect;
				proveedor.lat ? delete proveedor.lat : null;
				proveedor.lng ? delete proveedor.lng : null;
				delete proveedor.email;
				delete proveedor.phone;
				delete proveedor.username;
				delete proveedor.postal_code;



				proveedor.avatar_image = proveedor.avatar_image
					? URL + proveedor.avatar_image.url
					: null;

				proveedor.online = await strapi.db
					.query("api::online-user.online-user")
					.findOne({
						where: { user: proveedor.id },
						select: ["socket_id", "lastConnection", "status"],
					});

				let average = await strapi.db
					.query("api::valoration.valoration")
					.findMany({
						where: { provider: proveedor.id },
					});

				proveedor["averageScore"] =
					average.length > 0
						? average.reduce((a, b) => a + b.valoration, 0) / average.length
						: 0;
				proveedor["averageCount"] = average.length;
				let taskCompleted = await strapi.db
					.query("api::task-assigned.task-assigned")
					.count({
						where: {
							provider: proveedor.id,
							status: "completed",
						},
					});







				proveedor["taskCompleted"] = taskCompleted;

				proveedor["skill_select"] = null;

				if (proveedor.online) {
					if (proveedor.online.status == "offline") {
						proveedor.online.lastConnection = generateConnectionMessage(
							proveedor.online.lastConnection
						);
					} else {
						proveedor.online.lastConnection = "online";
					}
				} else {
					proveedor.online = {
						socket_id: null,
						lastConnection: null,
						status: "offline",
					};
				}



				proveedor.provider_skills = proveedor.provider_skills.map(
					(skillP) => {
						// si la skillP recorrida comparte id con skill de la consulta , lo agrego al campo proveedor.skill_select

						let media = [];

						if (skillP.media) {
							media = skillP.media.map((media) => {
								return URL + media.url;
							});
						}

						if (idSkill) {
							if (skillP.categorias_skill.id == idSkill) {
								proveedor.skill_select = {
									id: skillP.id,
									taskCompleted: taskCompletedSkill,
									scoreAverage: avgAux.averageScore,
									count: avgAux.averageCount,
									type_price: skillP.type_price,
									cost: skillP.cost,
									media: skillP.media ? media : null,
									categorias_skill: skillP.categorias_skill
										? skillP.categorias_skill.name
										: null,
									categorias_skill_id: skillP.categorias_skill
										? skillP.categorias_skill.id
										: null,
									description: skillP.description ? skillP.description : null,
									hourMinimum: skillP.hourMinimum ? skillP.hourMinimum : "hour_1",
								};
							}
						}



						return {
							id: skillP.id,
							type_price: skillP.type_price,
							cost: skillP.cost,
							media: skillP.media ? media : null,
							categorias_skill: skillP.categorias_skill
								? skillP.categorias_skill.name
								: null,
							categorias_skill_id: skillP.categorias_skill
								? skillP.categorias_skill.id
								: null,
							description: skillP.description ? skillP.description : null,
							hourMinimum: skillP.hourMinimum ? skillP.hourMinimum : "hour_1",
						};
					}
				);

			}

			proveedores.sort((a, b) => b.averageScore - a.averageScore);

			//creo meta	para la paginacion

			const meta = {
				start: start,
				limit: limit,

				total: proveedores.length,
			};

			return ctx.send({ data: proveedores, meta: meta });


		} catch (error) {
			console.error("Error al buscar proveedores:", error);

			return ctx.badRequest("Error al buscar proveedores");
		}
	};

	plugin.controllers.user.buscarConversation = async (ctx) => {
		try {
			// saco el usuario del token

			const user = ctx.state.user;

			//verifico exista

			if (!user) return ctx.badRequest("No se envio el usuario");

			// saco el id	del proveedor enviado como parametro

			const { id } = ctx.params;

			const { isNew } = ctx.query;

			// busco la conversacion entre el usuario y el proveedor , recordando que en una conversacion los usuarios se	guardan en el campo users que es un array de ids de usuarios
			let conversation = [];

			if (!isNew) {
				conversation = await strapi.db
					.query("api::conversation.conversation")
					.findMany({
						where: {
							$and: [
								{
									users: {
										id: {
											$eq: user.id,
										},
									},
								},

								{
									users: {
										id: {
											$eq: id,
										},
									},
								},
							],
						},
					});

				if (conversation.length == 0) {
					// creo una conversacion con los usuarios

					conversation = await strapi.entityService.create(
						"api::conversation.conversation",
						{
							data: {
								name: "Conversacion between " + user.id + " and " + id,
								users: [user.id, id],
							},
						}
					);
				} else {
					conversation = conversation[0];
				}
			} else {
				conversation = await strapi.entityService.create(
					"api::conversation.conversation",
					{
						data: {
							name: "Conversacion between " + user.id + " and " + id,
							users: [user.id, id],
						},
					}
				);
			}

			return ctx.send({ data: conversation });
		} catch (error) {
			console.error("Error al buscar proveedores:", error);

			return ctx.badRequest("Error al buscar proveedores");
		}
	};

	// ruta para cobro de comision por registro

	plugin.controllers.user.cobrarComisionPedido = async (ctx) => {
		try {
			// saco el usuario del token

			const user = ctx.state.user;

			//verifico exista

			if (!user) return ctx.badRequest("No se envio el usuario");

			// establezco el costo de la comision que son 15$ pero en centimos

			const comision = 1500;

			// busco el usuario en la base de datos

			// si el usuario tiene el campo stripe_customer_id vacio entonces lo creo en stripe

			let customer = {};

			if (!user.stripe_customer_id) {
				customer["stripe_customer_id"] = await stripe.customers.create();
				await strapi.entityService.update(
					"plugin::users-permissions.user",
					user.id,
					{
						data: {
							stripe_customer_id: customer["stripe_customer_id"],
						},
					}
				);
			} else {
				customer["stripe_customer_id"] = user.stripe_customer_id;
			}

			const ephemeralKey = await stripe.ephemeralKeys.create(
				{ customer: customer.stripe_customer_id },
				{ apiVersion: "2022-11-15" }
			);

			// actualizo el usuario con el id del cliente de stripe

			const paymentIntent = await stripe.paymentIntents.create({
				amount: comision,
				currency: "usd",
				customer: customer.stripe_customer_id,
				payment_method_types: ["card"],
				statement_descriptor: "Fee register " + user.id,
				description:
					"Fee register how provider, ID: " +
					user.id +
					" " +
					user.name +
					" " +
					user.lastname,
			});

			data = {
				paymentIntent: paymentIntent.client_secret,
				ephemeralKey: ephemeralKey.secret,
				customer: customer.stripe_customer_id,
				publishableKey: STRIPE_PUBLIC_KEY,
			};

			console.log(data);

			return ctx.send({ data: data });
		} catch (error) {
			console.error("Error al buscar proveedores:", error);

			return ctx.badRequest("Error al cobrar comisión", error);
		}
	};

	// ruta para cobro de comision por registro

	plugin.controllers.user.stripeCobrarTask = async (ctx) => {
		try {
			// saco el usuario del token

			const user = ctx.state.user;

			//verifico exista

			if (!user) return ctx.badRequest("No se envio el usuario");

			let {
				provider,
				location,
				location_geo,
				length,
				date,
				time,
				car,
				description,
				skill,
				brutePrice,
				createType
			} = ctx.request.body.data;





			// verifico si brutePrice es tipo string lo paso a numero

			if (typeof brutePrice == "string") {

				brutePrice = parseFloat(brutePrice);

			}



			brutePrice = brutePrice * 100; // lo paso a centimos

			//brutePrice = parseInt(brutePrice); // lo paso a entero



			COMISION_BASE = parseFloat(COMISION_BASE);

			let comision = brutePrice * COMISION_BASE;



			comision = parseInt(comision);



			let netoPrice = brutePrice - comision;





			let customer = {};
			if (!user.stripe_customer_id) {
				let aux = await stripe.customers.create();

				customer["stripe_customer_id"] = aux.id;

				await strapi.entityService.update(
					"plugin::users-permissions.user",
					user.id,
					{
						data: {
							stripe_customer_id: customer["stripe_customer_id"],
						},
					}
				);
			} else {
				customer["stripe_customer_id"] = user.stripe_customer_id;
			}

			const ephemeralKey = await stripe.ephemeralKeys.create(
				{ customer: customer.stripe_customer_id },
				{ apiVersion: "2022-11-15" }
			);

			const paymentIntent = await stripe.paymentIntents.create({
				amount: netoPrice,
				currency: "usd",
				customer: customer.stripe_customer_id,
				payment_method_types: ["card"],
				statement_descriptor: "Payment for task " + user.id,
				description:
					"Payment for task " +
					user.id +
					" " +
					user.name +
					" " +
					user.lastname +
					" " +
					provider +
					skill +
					" " +
					netoPrice,
			});

			let metodo_pago = paymentIntent.payment_method_types ? paymentIntent.payment_method_types[0] : "Stripe";

			const data = {
				total: netoPrice,
				sub_total: brutePrice,
				usuario: user.id,
				metodo_de_pago: metodo_pago,
				monto_comision: comision,
				estado: paymentIntent.status,
				stripe_sesion_id: paymentIntent.id,
				fee: COMISION_BASE,
				paymentIntentId: paymentIntent.id,
				paymentIntent: paymentIntent,
				provider: provider,
				datosTarea: {
					location: {
						latitud: location.lat,
						longitud: location.lng,
						name: location_geo,
					},

					taskLength: length,
					date: date,
					time: time,
					transportation: car,
					description: description,
					skill: skill,
					client: user.id,
					description: description,
					paymentIntentId: paymentIntent.id,
					provider: provider,
					brutePrice: brutePrice,
					netoPrice: netoPrice,
					idCreador: user.id,
					createType: createType,
					addDetails: false,

				}
			}
			await strapi.entityService.create("api::order.order", {

				data: data

			});


			return ctx.send({
				data: {
					paymentIntent: paymentIntent.client_secret,
					ephemeralKey: ephemeralKey.secret,
					customer: customer.stripe_customer_id,
					publishableKey: STRIPE_PUBLIC_KEY,
					paymentIntentId: paymentIntent.id
				}
			});
		} catch (error) {
			console.error("Error al cobrar:", error);

			return ctx.badRequest("Error al cobrar", error);
		}
	};

	plugin.controllers.user.stripeCheckout = async (ctx) => {




		const sig = ctx.request.headers['stripe-signature'];




		let event;

		try {

			event = stripe.webhooks.constructEvent(ctx.request.body[unparsed], sig, STRIPE_WEBHOOK_SECRET);
		} catch (err) {
			console.log(err.message);
			ctx.badRequest(`Webhook Error: ${err.message}`, { error: 'Ha ocurrido un error con el Webhook' });


			return ctx.badRequest(`Webhook Error: ${err.message}`);
		}




		switch (event.type) {
			case 'payment_intent.amount_capturable_updated':
				const paymentIntentAmountCapturableUpdated = event.data.object;
				console.log("payment_intent.amount_capturable_updated", paymentIntentAmountCapturableUpdated);
				break;
			case 'payment_intent.canceled':
				const paymentIntentCanceled = event.data.object;
				console.log("payment_intent.canceled", paymentIntentCanceled);
				break;
			case 'payment_intent.created':
				const paymentIntentCreated = event.data.object;
				console.log("payment_intent.created", paymentIntentCreated);
				break;
			case 'payment_intent.partially_funded':
				const paymentIntentPartiallyFunded = event.data.object;
				console.log("payment_intent.partially_funded", paymentIntentPartiallyFunded);
				break;
			case 'payment_intent.payment_failed':
				const paymentIntentPaymentFailed = event.data.object;
				console.log("payment_intent.payment_failed", paymentIntentPaymentFailed);
				break;
			case 'payment_intent.processing':
				const paymentIntentProcessing = event.data.object;
				console.log("payment_intent.processing", paymentIntentProcessing);
				break;
			case 'payment_intent.requires_action':
				const paymentIntentRequiresAction = event.data.object;
				console.log("payment_intent.requires_action", paymentIntentRequiresAction);
				break;
			case 'payment_intent.succeeded':
				const paymentIntentSucceeded = event.data.object;


				let order = await strapi.db
					.query("api::order.order")
					.findOne({
						where: { paymentIntentId: paymentIntentSucceeded.id },

						populate: { usuario: true },
					});


				if (!order) {

					console.log("No se encontro la orden", { error: 'No se encontro la orden con el paymentIntentId' + paymentIntentSucceeded.id });

					return ctx.badRequest("No se encontro la orden", { error: 'No se encontro la orden con el paymentIntentId' + paymentIntentSucceeded.id });

				}


				// actualizo el estado de la orden

				await strapi.entityService.update("api::order.order", order.id, {
					data: {
						estado: paymentIntentSucceeded.status,

					}
				});


				// creo la tarea 

				let response = await crearTarea(order.usuario, order.datosTarea, ctx);

				console.log("payment_intent.succeeded", response);

				// actualizo la orden con el id de la tarea

				await strapi.entityService.update("api::order.order", order.id, {

					data: {

						task_assigned: response.taskEntity.id,

					}

				});

				return ctx.send({ data: response });

				break;
			// ... handle other event types
			default:
				console.log(`Unhandled event type ${event.type}`);
		}



		return ctx.send({ data: "ok" });

	};

	async function crearTarea(user, data, ctx) {

		try {



			if (!user) {
				console.log("No tienes permiso", { error: 'No autorizado' });
				return ctx.unauthorized("No tienes permiso", { error: 'No autorizado' });
			}



			let { location, taskLength, date, time, transportation, description, skill, client, paymentIntentId, provider, brutePrice, netoPrice, idCreador, createType, addDetails } = data;


			console.log("========================CREANDO TAREA=============");
			console.log("data", data);

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

			if (!providerx.isProvider) {

				console.log("El provider no es un proveedor", { error: 'El provider no es un proveedor' });
				return ctx.badRequest("El provider no es un proveedor", { error: 'El provider no es un proveedor' });

			}


			// verifico que el provider no sea el mismo que el cliente


			if (provider == user.id) {

				console.log("El provider no puede ser el mismo que el cliente", { error: 'El provider no puede ser el mismo que el cliente' });

				return ctx.badRequest("El provider no puede ser el mismo que el cliente", { error: 'El provider no puede ser el mismo que el cliente' });


			}



			// transportation solo puede ser "motorcycle"  "transportation"  "truck"  "not_necessary"

			if (transportation != 'car' && transportation != "motorcycle" && transportation != "transportation" && transportation != "truck" && transportation != "not_necessary") {
				console.log("El campo transportation solo puede ser motorcycle, transportation, truck o not_necessary", { error: 'El campo transportation solo puede ser motorcycle, transportation, truck o not_necessary' });
				return ctx.badRequest("El campo transportation solo puede ser motorcycle, transportation, truck o not_necessary", { error: 'El campo transportation solo puede ser motorcycle, transportation, truck o not_necessary' });

			}







			let combinedDateTime = "";
			if (time != "I'm Flexible") {

				// TIME TIENE FORMATO 11:30am o 11:30pm LE QUITO EL AM O PM

				time = time.replace("am", "");

				time = time.replace("pm", "");





				combinedDateTime = moment(date).format('YYYY-MM-DD') + ' ' + time + ':00.000';

				combinedDateTime = Date.parse(combinedDateTime);

				combinedDateTime = moment(combinedDateTime).format('YYYY-MM-DD HH:mm:ss');

			} else {

				combinedDateTime = moment(date).format('YYYY-MM-DD') + ' ' + "00:00:00.000";
				combinedDateTime = moment(combinedDateTime).format('YYYY-MM-DD HH:mm:ss');
			}




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


			let taskp = strapi.entityService.create('api::task-assigned.task-assigned', {
				data: {
					provider,

					client: user.id,
					transportation: transportation,
					description: description,
					taskLength: taskLength,
					location: location,
					datetime: combinedDateTime,
					time: moment(combinedDateTime).format('HH:mm:ss'),
					status: "acepted",
					timeFlexible: time == "I'm Flexible" ? true : false,
					idCreador: idCreador,
					paymentIntentId: paymentIntentId,
					skill: skill,
					createType: 'client',
					conversation: conversation.id,
					netoPrice: netoPrice.toString(),
					brutePrice: brutePrice.toString(),
					addDetails: false,

				},
			});



			let chatP = await strapi.entityService.create('api::chat-message.chat-message', {

				data: {
					conversation: conversation.id,
					bot: true,
					message: "Task request created ",
					emit: provider,
					type: "system" // mensaje de bienvenida
				}

			});

			let [taskEntity, chatEntity] = await Promise.all([taskp, chatP]);




			console.log("taskEntity", taskEntity);

			console.log("chatEntity", chatEntity);

			//await super.create(ctx);

			return {
				taskEntity,
				chatEntity,
				conversation
			};
		} catch (error) {
			console.error("Error al crear tarea:", error);
			throw new Error(error);
		}

	};


	function getTimes(start, end) {
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
	}
	plugin.controllers.user.stripeConnect = async (ctx) => {
		// recibo el usuario logueado

		const user = ctx.state.user;

		// verifico que sea usuario y tenga role instructor

		if (!user || !user.isProvider) {
			//ctx.response.status	= 401;
			return ctx.response.unauthorized(
				"No autorizado",

				{
					id: "No autorizado",

					message: "No autorizado",
				}
			);
		}

		// verifico que no tenga ya una cuenta creada con el campo stripe_account_id

		if (user.is_stripe_connect) {
			// entonces quiere desconectar la cuenta

			await stripe.accounts.del(user.stripe_connect_id);

			await strapi.entityService.update(
				"plugin::users-permissions.user",
				user.id,
				{
					data: {
						stripe_connect_id: "",
						is_stripe_connect: false,
					},
				}
			);
			return ctx.send("ok");
		}

		//	si no tiene cuenta creada, creo la cuenta

		const account = await stripe.accounts.create({
			type: "express",
			country: "US",
			email: user.email,
			capabilities: {
				transfers: { requested: true },
			},
			//tos_acceptance: {service_agreement: 'recipient'},
			business_type: "individual",
			individual: {
				first_name: user.name,
				last_name: user.lastname,
			},
		});

		// saco URL del .env

		const host = process.env.URL;

		await strapi.entityService.update(
			"plugin::users-permissions.user",
			user.id,
			{
				data: {
					stripe_connect_id: account.id,
					is_stripe_connect: false,
				},
			}
		);

		const data = await stripe.accountLinks.create({
			account: account.id,
			refresh_url: `${host}/api/users-permissions/strapi/account/refresh?account_id=${account.id}`,
			return_url: `${host}/api/users-permissions/strapi/account/reauth?account_id=${account.id}`,
			type: "account_onboarding",
		});
		console.log("host", data);
		return ctx.send(data.url);
	};

	plugin.controllers.user.stripeConnectReauth = async (ctx) => {
		const { account_id } = ctx.query;

		if (!account_id) {
			return ctx.badRequest("No se ha encontrado la cuenta", {
				message: "No se ha encontrado la cuenta",
			});
		}

		// busco el user con el	account_id

		const user = await strapi.db
			.query("plugin::users-permissions.user")
			.findOne({
				where: { stripe_connect_id: account_id },
			});

		console.log("user", user);

		if (!user || !user.isProvider) {
			return ctx.response.unauthorized("No autorizado", {
				id: "No autorizado",
				message: "No autorizado",
			});
		}

		// verifico que no tenga ya una cuenta creada con el campo stripe_account_id

		/*	if (user.is_stripe_connect) {
	
		return ctx.badRequest("Ya tienes una cuenta creada", { message: "Ya tienes una cuenta creada" });
	
	}
*/

		// busco id de la cuenta con stripe_account_id

		const account = await stripe.accounts.retrieve(account_id);

		if (!account) {
			return ctx.badRequest("No se encontró la cuenta", {
				message: "No se encontró la cuenta",
			});
		}

		await strapi.entityService.update(
			"plugin::users-permissions.user",
			user.id,
			{
				data: {
					stripe_connect_id: account.id,
					is_stripe_connect: true,
				},
			}
		);

		// redirecciono a la pagon

		return ctx.redirect(`${process.env.URL}/return-app.html`);
	};

	plugin.controllers.user.stripeDeleteAcountTest = async (ctx) => {
		const { account_id } = ctx.query;

		const deleted = await stripe.accounts.del(account_id);

		return ctx.send(deleted);
	};

	// la funcion buscarReviewsProveedor

	plugin.controllers.user.buscarReviewsProveedor = async (ctx) => {
		try {
			// saco el id del proveedor enviado como parametro

			let { id, skill, page, limit } = ctx.params;

			page = page ? parseInt(page) : 0;

			limit = limit ? parseInt(limit) : 10;

			// si id no existe retorno error

			if (!id) return ctx.badRequest("No se envio el id del proveedor");

			//	busco las valoraciones del proveedor si se envio el id de la skill entonces busco las valoraciones de esa skill tomando en cuenta la page y el limit

			let reviews = [];

			let reviewsCout = 0;

			if (skill) {
				reviews = await strapi.db.query("api::valoration.valoration").findMany({
					where: { provider: id, categorias_skill: skill },

					sort: "createdAt:desc",

					limit: limit ? limit : 10,

					start: page ? page : 0,

					populate: ["client", "client.avatar_image"],
				});

				reviewsCout = await strapi.db
					.query("api::valoration.valoration")
					.count({
						where: { provider: id, categorias_skill: skill },
					});
			} else {
				reviews = await strapi.db.query("api::valoration.valoration").findMany({
					where: { provider: id },

					sort: "createdAt:desc",

					limit: limit ? limit : 10,

					start: page ? page : 0,

					populate: ["client", "client.avatar_image"],
				});

				reviewsCout = await strapi.db
					.query("api::valoration.valoration")
					.count({
						where: { provider: id },
					});
			}

			// recorro las valoraciones para agregar la url de la imagen del cliente

			reviews = reviews.map((review) => {
				return {
					valoration: review.valoration,
					comment: review.description,
					date: review.createdAt,
					client: review.client.name + " " + review.client.lastname,
					avatar: review.client.avatar_image
						? URL + review.client.avatar_image.url
						: null,
				};
			});

			let pages = Math.ceil(reviewsCout / limit);

			console.log(pages);

			return ctx.send({
				data: reviews,
				metadata: { count: reviewsCout, page: page ? page : 0, pages },
			});
		} catch (error) {
			console.error("Error al buscar proveedores:", error);

			return ctx.badRequest("Error al buscar proveedores", error);
		}
	};

	plugin.controllers.user.saveFCM = async (ctx) => {

		const user = ctx.state.user;

		if (!user) return ctx.badRequest("No se envio el usuario");


		console.log("ctx.request.body", ctx.request.body);

			const { token } = ctx.request.body;

			if (!token) return ctx.badRequest("No se envio el token");

		 await strapi.entityService.update('plugin::users-permissions.user', ctx.state.user.id, { data: { device_token: token } });
		
		return ctx.send({ data: "ok" });
	};



	plugin.routes["content-api"].routes.push(
		{
			method: "GET",
			path: "/proveedores",
			handler: "user.buscarProveedores",
		},
		{
			method: "GET",
			path: "/proveedores/conversation/:id",
			handler: "user.buscarConversation",
		},
		{
			method: "GET",
			path: "/proveedores/destacados",
			handler: "user.buscarProveedoresDestacados",


		},
		{
			method: "GET",
			path: "/proveedores/fav-or-book",
			handler: "user.buscarProveedoresBorF",
		},
		{
			method: "GET",
			path: "/proveedores/reviews/:id",
			handler: "user.buscarReviewsProveedor",
		},
		{
			method: "GET",
			path: "/proveedores/:id",
			handler: "user.perfilProveedor",
		},
		{
			method: 'POST',
			path: '/auth/local/fcm',
			handler: 'user.saveFCM',
			config: {
				prefix: '',
				policies: []
			}
		},
		{
			method: "POST",
			path: "/users/otp",
			handler: "user.getOTP",
			config: {
				prefix: "",
			},
		},

		// ruta /otp/verify
		{
			method: "POST",
			path: "/users/otp/verify",
			handler: "user.verifyOTP",
			config: {
				prefix: "",
			},
		},
		// change password for otp
		{
			method: "POST",
			path: "/users/otp/change-password",
			handler: "user.otpChangePassword",
			config: {
				prefix: "",
			},
		},
		{
			method: "GET",
			path: "/users-permissions/create-payment-intent-register",
			handler: "user.cobrarComisionPedido",
			config: {
				prefix: "",
			},
		},
		{
			method: "GET",
			path: "/users-permissions/connet-stripe",
			handler: "user.stripeConnect",
			config: {
				prefix: "",
			},
		},
		{
			method: "GET",
			path: "/users-permissions/strapi/account/reauth",
			handler: "user.stripeConnectReauth",
			config: {
				prefix: "",
			},
		},
		{
			method: "GET",
			path: "/users-permissions/strapi/account/delete",
			handler: "user.stripeDeleteAcountTest",
			config: {
				prefix: "",
			},
		},

		{
			method: "POST",
			path: "/users-permissions/create-payment-task",
			handler: "user.stripeCobrarTask",
			config: {
				prefix: "",
			},
		},
		{
			method: "POST",
			path: "/users-permissions/payment-stripe",
			handler: "user.stripeCheckout",
			config: {
				prefix: "",
			},
		}
	);

	return plugin;
};
