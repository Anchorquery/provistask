'use strict';

/**
 * task-assigned router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::task-assigned.task-assigned');
