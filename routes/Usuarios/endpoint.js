const express = require('express');
const router = express.Router();
const jsonServer = require('json-server');
const db = jsonServer.router('data/db.json');
const Usuarios = require('./Usuarios');

router.get('/', (req, res) => {
  const estoque = Usuarios.listar(db.db.get('Usuarios'));
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

  router.post('/', (req, res) => {
    const { nome, senha } = req.body;
    const usuarios = Usuarios.criar(db.db.get('Usuarios'), id, nome, senha);
    res.status(201).json(Usuarios);
  });

  router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, senha } = req.body;
    const Usuarios = Usuarios.atualizar(db.db.get('Usuarios'), id, nome,senha);
    if (Usuarios) {
      res.json(Usuarios);
    } else {
      res.status(404).json({ message: 'Usuario não encontrado' });
    }
  });

  router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const Usuarios = Usuarios.deletar(db.db.get('Usuarios'), id);
    if (Usuarios) {
      res.json({ message: 'Usuario excluido com sucesso', Usuarios });
    } else {
      res.status(404).json({ message: 'Usuarios não encontrado' });
    }
  });
  
  module.exports = router;