const { resolve } = require('path');
const { config } = require('dotenv');

config({
  path: resolve('../../.env'),
});

const dbConfig = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
};

const development = {
  ...dbConfig,
};

module.exports = {
  development,
};
