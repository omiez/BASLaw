module.exports = ({ env }) => ({
  host: '127.0.0.1',
  socket: '/tmp/nginx.socket',
  url:  '/api',
  admin: {
    url:  'http://127.0.0.1:' + env.int('PORT', 1337) + '/admin',
    autoOpen: false,
    auth: {
      secret: env('ADMIN_JWT_SECRET', '19fce41b872056b32f6752ebf50d1515'),
    },
  },
  cron: {
    enabled: false
  },
});
