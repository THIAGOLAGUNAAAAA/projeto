const express = require('express');
const router = express.Router();
const jsonServer = require('json-server');
const db = jsonServer.router('../../data/db.json');
const Estoque = require('./Estoque');

router.get('/', (req, res) => {
  const estoque = Estoque.listar(db.db.get('Estoque'));
  res.json(Estoque);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const estoque = Estoque.obter(db.db.get('Estoque'), id);
    if (estoque) {
      res.json(Estoque);
    } else {
      res.status(404).json({ message: 'Não há nada no Estoque' });
    }
  });

  router.post('/', (req, res) => {
    const { nome, referencia } = req.body;
    const estoque = Estoque.criar(db.db.get('Estoque'), id, nome, referencia);
    res.status(201).json(Estoque);
  });

  router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, referencia } = req.body;
    const Estoque = Estoque.atualizar(db.db.get('Estoque'), id, nome,referencia);
    if (Estoque) {
      res.json(Estoque);
    } else {
      res.status(404).json({ message: 'Não há nada no Estoque' });
    }
  });

  router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const Estoque = Estoque.deletar(db.db.get('Estoque'), id);
    if (Estoque) {
      res.json({ message: 'Peça retirada do estoque', Estoque });
    } else {
      res.status(404).json({ message: 'Peca não encontrada no Estoque' });
    }
  });
  
  module.exports = router;
  