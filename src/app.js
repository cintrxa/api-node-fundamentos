const express = require("express");

const usuariosRoutes = require("./routes/usuarios.routes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API rodando" });
});

app.use("/usuarios", usuariosRoutes);

console.log("usuariosRoutes =>", usuariosRoutes);

module.exports = app;