const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { criarUsuario, buscarUsuarioPorEmail } = require('../models/User');

const SECRET = 'chave-jwt';

exports.register = async (req, res) => {
  try {
    const { email, senha, tipo_usuario } = req.body;
    const user = await criarUsuario({ email, senha, tipo_usuario });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, senha } = req.body;
  const user = await buscarUsuarioPorEmail(email);
  if (!user) return res.status(401).json({ message: 'Usuário não encontrado' });

  const match = await bcrypt.compare(senha, user.senha_hash);
  if (!match) return res.status(401).json({ message: 'Senha inválida' });

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: '1h' });
  res.json({ token });
};
