const expressFornecedores = require('express');
const fornecedoresRouter = expressFornecedores.Router();

const fornecedores = [];

fornecedoresRouter.get('/', (req, res) => {
  res.json(fornecedores);
});

fornecedoresRouter.post('/', (req, res) => {
  const fornecedor = req.body;
  fornecedores.push(fornecedor);
  res.status(201).json(fornecedor);
});

module.exports = fornecedoresRouter;