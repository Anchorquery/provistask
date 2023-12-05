

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  forgotPassword: {
    from: 'anchorquery@gmail.com',
    replyTo: 'anchorquery@gmail.com',
  },
});
