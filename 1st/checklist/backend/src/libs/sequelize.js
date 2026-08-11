const { Sequelize } = require('sequelize');
const { config } = require('../config/config.js');
const setupModels = require('../models');

const sequelize = new Sequelize(
  config.db.dbName,
  config.db.dbUser,
  config.db.dbPassword,
  {
    dialect: 'postgres',
    host: config.db.dbHost,
    port: config.db.dbPort,
  }
);

setupModels(sequelize);
sequelize.sync({ alter: true });

module.exports = sequelize;
module.exports.models = sequelize.models;