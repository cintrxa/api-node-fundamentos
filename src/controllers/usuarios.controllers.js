const usuarios = [
  { id: 1, nome: "Matheus" },
  { id: 2, nome: "Ana" },
];

function listarUsuarios(req, res) {
  res.json(usuarios);
}

function criarUsuario(req, res) {
  const { nome } = req.body;
  res.json({ message: "Usuário criado", nome });
}

module.exports = {
  listarUsuarios,
  criarUsuario,
};