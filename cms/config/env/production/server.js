module.exports = ({ env }) => ({
  host: 'localhost',
  socket: '/tmp/nginx.socket',
  url: '/api',
  admin: {
    url: 'http://localhost/admin',
    autoOpen: false,
    auth: {
      secret: env('ADMIN_JWT_SECRET', '19fce41b872056b32f6752ebf50d1515'),
    },
  },
  cron: {
    enabled: false
  },
});