const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  nome: {
    type: String,
  },
  email: {
    type: String
  },
});

const Usuario = mongoose.model('Usuario', schema);

module.exports = Usuario;