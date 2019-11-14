const mongoose = require('mongoose');

function conecta () {
  mongoose.connect(
    'mongodb://uzojqdo3yh5x3szwsbs8:OGA5Tho4P5zXlLe24bTu@bws2p91ixgitqlv-mongodb.services.clever-cloud.com:27017/bws2p91ixgitqlv',
    { useUnifiedTopology: true, useNewUrlParser: true }
  );
  const db = mongoose.connection;
  db.on('error', (error) => console.error('error: ', error));
  db.once('open', () => console.info('MongoDB conectado!'));
}

module.exports = conecta;
