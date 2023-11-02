const express = require('express');
const router = express.Router();
const jsonServer = require('json-server');
const db = jsonServer.router('data/db.json');
const Permissao = require('./Permissao');

router.get('/', (req, res) => {
  const permissao = Permissao.listar(db.db.get('Permissao').value());
  res.json(permissao);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const permissao = Permissao.obter(db.db.get('Permissao').value(), id);
    if (permissao) {
      res.json(Permissao);
    } else {
      res.status(404).json({ message: 'Permisao não concendida' });
    }
  });

  router.post("/", (req, res) => {
    const {nome, senha } = req.body;
    const id = db.db.get('Permissao').value() ? db.db.get('Permissao').value().length + 1 : 1;
    const novaPermissao = Permissao.criar(id, nome, senha);
    if (novaPermissao) {
        db.db.get("Permissao").push(novaPermissao).write();
        res.status(201).json(novaPermissao);
    }
    else {
        res.status(500).json({ message: "Errro na Permissao" });
    }
  });

  router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, senha } = req.body;
    const permissao = Permissao.atualizar(db.db.get('Permissao'), id, nome,senha);
    if (permissao) {
      console.log(permissao);
      res.status(200).json(permissao);
    } else {
      res.status(200).json({ message: 'Permissao não concedida' });
    }
  });

  router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const permissao = Permissao.deletar(db.db.get('Permissao'), id);
    if (permissao) {
      res.json({ message: 'Permissao excluida', Estoque });
    } else {
      res.status(404).json({ message: 'Permissao não encontrada' });
    }
  });

  module.exports = router;