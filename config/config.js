module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "d1838bb10cede4205ad9420ae59ed191"),
    },
  },
});

// module.exports = ({ env }) => ({
//   url: env("MY_HEROKU_URL"),
// });

// Ianh8UYtVrW6Gdh8otCFp1hhb4M d1838bb10cede4205ad9420ae59ed191
