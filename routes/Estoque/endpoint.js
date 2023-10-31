const express = require('express');
const router = express.Router();
const jsonServer = require('json-server');
const db = jsonServer.router('data/db.json');
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

  router.post("/", (req, res) => {
    const {nome, referencia } = req.body;
    const id = db.db.get('Estoque').value() ? db.db.get('Estoque').value().length + 1 : 1;
    const novoEstoque = Estoque.criar(id, nome, referencia);
    if (novoEstoque) {
        db.db.get("Estoque").push(novoEstoque).write();
        res.status(201).json(novoEstoque);
    }
    else {
        res.status(500).json({ message: "Erro na inserção do Estoque" });
    }
});

  router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, referencia } = req.body;
    const estoque = Estoque.atualizar(db.db.get('Estoque').value(), id, nome,referencia);
    if (estoque) {
      console.log(estoque);
      res.status(200).json(estoque);
    } else {
      res.status(200).json({ message: 'Não há nada no Estoque' });
    }
  });

  router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const estoque = Estoque.deletar(db.db.get('Estoque'), id);
    if (estoque) {
      res.json({ message: 'Peça retirada do estoque', Estoque });
    } else {
      res.status(404).json({ message: 'Peca não encontrada no Estoque' });
    }
  });
  
  module.exports = router;
  