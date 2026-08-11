const crudRouter = require('./crudRouter');

module.exports = crudRouter(require('../controller/task.controller'));