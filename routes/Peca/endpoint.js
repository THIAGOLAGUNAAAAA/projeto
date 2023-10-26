const express = require('express');
const router = express.Router();
const jsonServer = require('json-server');
const db = jsonServer.router('../../data/db.json');
const Peca = require('./Peca');

router.get('/', (req, res) => {
  const peca = Peca.listar(db.db.get('Peca'));
  res.json(Peca);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const peca = Peca.obter(db.db.get('Peca'), id);
    if (peca) {
      res.json(Peca);
    } else {
      res.status(404).json({ message: 'Peca não encontrada' });
    }
  });

  router.post('/', (req, res) => {
    const { nome, ativo } = req.body;
    const peca = Peca.criar(db.db.get('Peca'), id, nome, ativo);
    res.status(201).json(Peca);
  });

  router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, ativo } = req.body;
    const Peca = Peca.atualizar(db.db.get('Peca'), id, nome, ativo);
    if (Peca) {
      res.json(Peca);
    } else {
      res.status(404).json({ message: 'Cliente não encontrado' });
    }
  });

  router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const Peca = Peca.deletar(db.db.get('Peca'), id);
    if (Peca) {
      res.json({ message: 'Peca excluído com sucesso', Peca });
    } else {
      res.status(404).json({ message: 'Peca não encontrada' });
    }
  });
  
  module.exports = router;