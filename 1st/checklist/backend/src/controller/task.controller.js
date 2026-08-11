const makeCrudController = require('./makeCrud');
const taskService = require('../service/task.service');

module.exports = makeCrudController(taskService);