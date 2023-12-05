'use strict';

/**
 * payment-card service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::payment-card.payment-card');
