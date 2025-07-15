const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

let usuarios = []; // simulação de banco

router.post("/register", async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
  }

  const existe = usuarios.find(u => u.email === email);
  if (existe) return res.status(409).json({ erro: "Usuário já existe" });

  const hash = await bcrypt.hash(senha, 10);
  usuarios.push({ nome, email, senha: hash });

  return res.status(201).json({ mensagem: "Usuário criado com sucesso" });
});

router.post("/login", async (req, res) => {
  const { email, senha } = req.body;
  const usuario = usuarios.find(u => u.email === email);
  if (!usuario) return res.status(404).json({ erro: "Usuário não encontrado" });

  const valido = await bcrypt.compare(senha, usuario.senha);
  if (!valido) return res.status(401).json({ erro: "Senha incorreta" });

  const token = jwt.sign({ email: usuario.email }, "segredo123", { expiresIn: "1h" });
  return res.json({ token });
});

module.exports = router;
