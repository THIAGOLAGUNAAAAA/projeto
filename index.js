const express = require("express");
const jsonServer = require("json-server");
const app = express();
const middlewares = jsonServer.defaults();

const pecaRouter = require('./routes/Peca/endpoint');
const estoqueRouter = require('./routes/Estoque/endpoint');
const UsuariosRouter = require('./routes/Usuarios/endpoint');
const permissaoRouter = require('./routes/Permissao/endpoint');


app.use(express.json());
app.use(middlewares);

app.use('/api/Peca', pecaRouter);
app.use('/api/Estoque',estoqueRouter);
app.use('/api/Usuarios',UsuariosRouter);
app.use('/api/Permissao', permissaoRouter);



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`API está em execução na porta ${port}`);
});