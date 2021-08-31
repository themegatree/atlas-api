require("dotenv").config();

module.exports = {
  "development": {
    "username": process.env.ATLAS_DATABASE_USER,
    "password": process.env.ATLAS_DATABASE_PASSWORD,
    "database": "atlas_development",
    "seederStorage": "json",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.ATLAS_DATABASE_USER,
    "password": process.env.ATLAS_DATABASE_PASSWORD,
    "database": "atlas_test",
    // "seederStorage": "json",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "ci": {
    "username": "postgres",
    "password": "postgres",
    "database": "atlas_ci",
    // "seederStorage": "json",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres",
    "ssl": {
      "rejectUnauthorized": false
    } 
  }
};
