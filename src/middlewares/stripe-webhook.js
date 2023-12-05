'use strict';
const unparsed = require("koa-body/unparsed.js");
/**
 * `stripe-webhook` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    console.log(ctx.request.url);
    if (ctx.request.method === 'POST' && ctx.request.url === '/api/users-permissions/payment-stripe') {



      console.log(ctx.request.body[unparsed]);

      ctx.request.body = ctx.request.body[unparsed]

     

      

    }

    await next();
  };
};
