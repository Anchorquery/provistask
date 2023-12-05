'use strict';

/**
 * task-canceled service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::task-canceled.task-canceled');
