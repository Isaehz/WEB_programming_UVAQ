const express = require('express');

function crudRouter(ctrl) {
  const router = express.Router();
  router.get('/', ctrl.getAll);
  router.get('/:id', ctrl.getOne);
  router.post('/', ctrl.create);
  router.put('/:id', ctrl.update);
  router.delete('/:id', ctrl.remove);
  return router;
}

module.exports = crudRouter;