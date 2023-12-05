'use strict';

/**
 * meta-user service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::meta-user.meta-user');
