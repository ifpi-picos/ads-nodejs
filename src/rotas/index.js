const express = require('express');
const fs = require('fs');
const usuarioControlador = require('../controlador/usuarios');

const rota = express.Router();

//trata requisições do método GET na url /
rota.get('/', (req, res) => { 
  res.send('App Online');
});

rota.get('/usuarios', async (req, res) => { 
  const usuarios = await usuarioControlador.get();
  res.send(usuarios);
});

rota.get('/usuarios/:id', async (req, res) => { 
  const usuarios = await usuarioControlador.get();
  res.send(usuarios);
});

rota.post('/usuarios', async (req, res) => { 
  const dadosUsuario = req.body;
  await usuarioControlador.add(dadosUsuario);
  res.send('Usuário Cadastrado com Sucesso');
});

module.exports = rota;