'use strict';

/**
 * online-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::online-user.online-user');
