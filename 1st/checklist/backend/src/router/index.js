const express = require('express');
const taskRouter = require('./task.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/tasks', taskRouter);
}

module.exports = routerApi;