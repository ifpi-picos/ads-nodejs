const express = require('express');
const roteamentoUsuarios = require('./roteamentoUsuarios');

const rota = express.Router();

//trata requisições do método GET na url /
rota.get('/', (req, res) => { 
  res.send('App Online');
});

rota.use('/usuarios', roteamentoUsuarios); 

module.exports = rota;