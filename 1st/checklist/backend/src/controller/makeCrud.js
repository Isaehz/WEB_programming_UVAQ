function makeCrudController(service) {
    const getAll = async (req, res) => {
      try {
        res.json(await service.getAll(req.query));
      } catch (e) {
        res.status(500).json({ error: e.message });
      }
    };
  
    const getOne = async (req, res) => {
      try {
        res.json(await service.getOne(req.params.id));
      } catch (e) {
        res.status(404).json({ error: e.message });
      }
    };
  
    const create = async (req, res) => {
      try {
        res.status(201).json(await service.create(req.body));
      } catch (e) {
        res.status(400).json({ error: e.message });
      }
    };
  
    const update = async (req, res) => {
      try {
        res.json(await service.update(req.params.id, req.body));
      } catch (e) {
        res.status(400).json({ error: e.message });
      }
    };
  
    const remove = async (req, res) => {
      try {
        res.json(await service.remove(req.params.id));
      } catch (e) {
        res.status(400).json({ error: e.message });
      }
    };
  
    return { getAll, getOne, create, update, remove };
  }
  
  module.exports = makeCrudController;