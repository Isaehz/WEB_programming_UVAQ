const Task = require('./task.model');

function setupModels(sequelize) {
  Task(sequelize);
}

module.exports = setupModels;