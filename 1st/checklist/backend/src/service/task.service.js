const { models } = require('../libs/sequelize');

const getAll = async () =>
  models.Task.findAll({ order: [['createdAt', 'ASC']] });

const getOne = async (id) => {
  const task = await models.Task.findByPk(id);
  if (!task) throw new Error('Tarea no encontrada');
  return task;
};

const create = async (data) => {
  if (!data.title?.trim()) throw new Error('El título es obligatorio');
  return models.Task.create({ title: data.title.trim() });
};

const update = async (id, data) => {
  const task = await models.Task.findByPk(id);
  if (!task) throw new Error('Tarea no encontrada');
  return task.update({
    title: data.title?.trim() ?? task.title,
    completed: data.completed ?? task.completed,
  });
};

const remove = async (id) => {
  const task = await models.Task.findByPk(id);
  if (!task) throw new Error('Tarea no encontrada');
  await task.destroy();
  return { mensaje: 'Tarea eliminada' };
};

module.exports = { getAll, getOne, create, update, remove };