const UsuarioModel = require('../modelos/usuario');

class UsuarioControlador { 
  
  async add(dadosUsuario) { 
    const usuarioModel = new UsuarioModel(dadosUsuario);
    await usuarioModel.save();
  }

  async get() { 
    const usuarios = await UsuarioModel.find({});
    return usuarios;
  }
}

module.exports = new UsuarioControlador();