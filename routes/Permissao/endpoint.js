const express = require('express');
const router = express.Router();
const jsonServer = require('json-server');
const db = jsonServer.router('../../data/db.json');
const Permissao = require('./Permissao');

router.get('/', (req, res) => {
  const permissao = Permissao.listar(db.db.get('Permissao'));
  res.json(Permissao);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const permissao = Permissao.obter(db.db.get('Permissao'), id);
    if (permissao) {
      res.json(Permissao);
    } else {
      res.status(404).json({ message: 'Permisao não concendida' });
    }
  });

  router.post('/', (req, res) => {
    const { nome, senha } = req.body;
    const permissao = Permissao.criar(db.db.get('Permissao'), id, nome, senha);
    res.status(201).json(permissao);
  });

  router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, senha } = req.body;
    const Permissao = Permissao.atualizar(db.db.get('Permissao'), id, nome,senha);
    if (Permissao) {
      res.json(Permissao);
    } else {
      res.status(404).json({ message: 'Permissao não concedida' });
    }
  });

  router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const Permissao = Permissao.deletar(db.db.get('Permissao'), id);
    if (Permissao) {
      res.json({ message: 'Permissao concendida', Estoque });
    } else {
      res.status(404).json({ message: 'Permissao não concedida' });
    }
  });