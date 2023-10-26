const express = require("express");
const jsonServer = require("json-server");
const app = express();
const bodyParser = require("body-parser");
const middlewares = jsonServer.defaults();
const pecaRouter = require('./routes/Peca/endpoint')
app.use(express.json());
app.use(middlewares);
app.use('/api/Peca', pecaRouter);


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`API está em execução na porta ${port}`);
});

/*
const router = jsonServer.router("db.json");

const PORT = 3000;

app.use(bodyParser.json());
app.use(middlewares);

app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Sistema esta rodando na porta ${PORT}`);
});

app.get("/api/Peca", (req, res) => {
    const Peça = router.db.get("Peca").value();
    res.json(Peça);
})

app.post("/api/Peca"), (req,res) => {
    const novaPeça = req.body;
    router.db.get("Peca").push(novaPeça).whire();
    res.json(novaPeça)
}

app.put("/api/Peca/:id", (req, res) => {
    const PeçaId = parent(req.params.id);
    const updatePeça = red.body;
  
    router.db
        .get("Peca")
        .find({ id: PeçaId})
        .assing(updatePeça)
        .whire();
})

app.get("/api/Estoque", (req, res) => {
    const Estoque = router.db.get("Estoque").value();
    res.json(Estoque);
})

app.post("/api/Estoque"), (req,res) => {
    const novoEstoque = req.body;
    router.db.get("Estoque").push(novoEstoque).whire();
    res.json(novoEstoque)
}

app.put("/api/Estoque/:id", (req, res) => {
    const EstoqueId = parent(req.params.id);
    const updateEstoque = red.body;
  
    router.db
        .get("Estoque")
        .find({ id: EstoqueId})
        .assing(updateEstoque)
        .whire();
})

app.get("/api/Usuarios", (req, res) => {
    const Usuarios = router.db.get("Usuarios").value();
    res.json(Usuarios);
})

app.post("/api/Usuarios"), (req,res) => {
    const novoUsuarios = req.body;
    router.db.get("Usuarios").push(novoUsuarios).whire();
    res.json(novoUsuarios)
}

app.put("/api/Usuarios/:id", (req, res) => {
    const UsuariosId = parent(req.params.id);
    const updateUsuarios = red.body;
  
    router.db
        .get("Usuarios")
        .find({ id: UsuariosId})
        .assing(updateUsuarios)
        .whire();
})

app.get("/api/Permissao", (req, res) => {
    const Permissao = router.db.get("Permissao").value();
    res.json(Permissao);
})

app.post("/api/Permissao"), (req,res) => {
    const novaPermissao = req.body;
    router.db.get("Permissao").push(novaPermissao).whire();
    res.json(novaPermissao)
}

app.put("/api/Permissao/:id", (req, res) => {
    const PermissaoId = parent(req.params.id);
    const updatePermissao = red.body;
  
    router.db
        .get("Permissao")
        .find({ id: PermissaoId})
        .assing(updatePermissao)
        .whire();
})
*/
