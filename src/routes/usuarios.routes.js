const express = require("express");
const {
  listarUsuarios,
  criarUsuario,
} = require("../controllers/usuarios.controllers.js");

const router = express.Router();

router.get("/", listarUsuarios);
router.post("/", criarUsuario);

module.exports = router;


