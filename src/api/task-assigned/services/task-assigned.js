'use strict';

/**
 * task-assigned service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::task-assigned.task-assigned');
