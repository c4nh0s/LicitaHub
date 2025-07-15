const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ erro: "Token não fornecido" });

  try {
    const decoded = jwt.verify(token, "segredo123");
    req.usuario = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ erro: "Token inválido" });
  }
}

module.exports = authMiddleware;
