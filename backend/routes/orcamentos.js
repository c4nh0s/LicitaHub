const expressOrcamentos = require('express');
const orcamentosRouter = expressOrcamentos.Router();

const orcamentos = [];

orcamentosRouter.get('/', (req, res) => {
  res.json(orcamentos);
});

orcamentosRouter.post('/', (req, res) => {
  const orcamento = req.body;
  orcamentos.push(orcamento);
  res.status(201).json(orcamento);
});

module.exports = orcamentosRouter;