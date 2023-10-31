const express = require('express');
const router = express.Router();
const jsonServer = require('json-server');
const db = jsonServer.router('data/db.json');
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

  router.post("/", (req, res) => {
    const {nome, referencia } = req.body;
    const id = db.db.get('Peca').value() ? db.db.get('Peca').value().length + 1 : 1;
    const novaPeca = Peca.criar(id, nome, referencia);
    if (novaPeca) {
        db.db.get("Peca").push(novaPeca).write();
        res.status(201).json(novaPeca);
    }
    else {
        res.status(500).json({ message: "Erro na inserção da Peca" });
    }
});

  router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, referencia } = req.body;
    const peca = Peca.atualizar(db.db.get('Peca').value(), id, nome, referencia);
    if (peca) {
      console.log(peca);
      res.status(200).json(peca);
    } else {
      res.status(200).json({ message: 'Peca não encontrada' });
    }
  });

  router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const peca = Peca.deletar(db.db.get('Peca'), id);
    if (peca) {
      res.json({ message: 'Peca excluído com sucesso', Peca });
    } else {
      res.status(404).json({ message: 'Peca não encontrada' });
    }
  });
  
  module.exports = router;