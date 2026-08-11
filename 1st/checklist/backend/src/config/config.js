const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const config = {
  db: {
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbName: process.env.DB_NAME,
  },
};

module.exports = { config };
