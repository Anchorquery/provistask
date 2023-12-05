'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('add-custom-fields')
      .service('myService')
      .getWelcomeMessage();
  },
});
