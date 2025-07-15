const pool = require('../db');
const bcrypt = require('bcryptjs');

async function criarUsuario({ email, senha, tipo_usuario }) {
  const hash = await bcrypt.hash(senha, 10);
  const result = await pool.query(
    'INSERT INTO usuarios (email, senha_hash, tipo_usuario) VALUES ($1, $2, $3) RETURNING id, email, tipo_usuario',
    [email, hash, tipo_usuario]
  );
  return result.rows[0];
}

async function buscarUsuarioPorEmail(email) {
  const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
  return result.rows[0];
}

module.exports = { criarUsuario, buscarUsuarioPorEmail };
