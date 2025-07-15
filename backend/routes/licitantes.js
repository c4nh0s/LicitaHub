const expressLicitantes = require('express');
const licitantesRouter = expressLicitantes.Router();

const licitantes = [];

licitantesRouter.get('/', (req, res) => {
  res.json(licitantes);
});

licitantesRouter.post('/', (req, res) => {
  const licitante = req.body;
  licitantes.push(licitante);
  res.status(201).json(licitante);
});

module.exports = licitantesRouter;