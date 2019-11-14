// importa o módulo(depência) do express.
const express = require('express');
const bodyParser = require('body-parser');
const roteamento = require('./rotas');
const mongodb = require('./config/mongodb');

// cria a instância(aplicação) do express.
const app = express();
// middlweare do body-parser para converter p/ json
app.use(bodyParser.json());

app.use('/', roteamento);

// app online (atendendo) na porta 3000
mongodb();
app.listen(3000);
