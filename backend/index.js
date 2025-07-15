const express = require("express");
const cors = require("cors");
const app = express();

// body parser & CORS
app.use(cors());
app.use(express.json());

// importa rotas de auth e middleware
const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middleware/authMiddleware");

// prefixa /auth em todas as rotas de auth
app.use("/auth", authRoutes);

// rota protegida de exemplo
app.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ mensagem: `Bem-vindo, ${req.usuario.email}!` });
});

// inicia servidor
app.listen(3000, () => console.log("API rodando na porta 3000"));
