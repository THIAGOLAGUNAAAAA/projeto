const express = require('express');
const router = express.Router();
const jsonServer = require('json-server');
const db = jsonServer.router('data/db.json');
const Usuarios = require('./Usuarios');

router.get('/', (req, res) => {
  const usuarios = Usuarios.listar(db.db.get('Usuarios'));
  res.json(Usuarios);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const usuarios = Usuarios.obter(db.db.get('Usuarios'), id);
    if (usuarios) {
      res.json(Usuarios);
    } else {
      res.status(404).json({ message: 'Usuario não esncontrado' });
    }
  });

  router.post("/", (req, res) => {
    const {nome, senha } = req.body;
    const id = db.db.get('Usuarios').value() ? db.db.get('Usuarios').value().length + 1 : 1;
    const novoUusuario = Usuarios.criar(id, nome, senha);
    if (novoUusuario) {
        db.db.get("Usuarios").push(novoUusuario).write();
        res.status(201).json(novoUusuario);
    }
    else {
        res.status(500).json({ message: "Erro na inserção do Estoque" });
    }
  });

  router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, senha } = req.body;
    const usuarios = Usuarios.atualizar(db.db.get('Usuarios'), id, nome,senha);
    if (usuarios) {
      console.log(usuarios);
      res.status(200).json(usuarios);
    } else {
      res.status(200).json({ message: 'Usuario não encontrado' });
    }
  });

  router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const usuarios = Usuarios.deletar(db.db.get('Usuarios'), id);
    if (usuarios) {
      res.json({ message: 'Usuario excluido com sucesso', Usuarios });
    } else {
      res.status(404).json({ message: 'Usuarios não encontrado' });
    }
  });
  
  module.exports = router;