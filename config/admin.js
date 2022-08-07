module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f28fa294305788eefd1abcb14d5817aa'),
  },
});
