const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'licitahub',
  password: 'SUA_SENHA_AQUI', // 👈 troque aqui pela sua senha real
  port: 5432,
});

module.exports = pool;
