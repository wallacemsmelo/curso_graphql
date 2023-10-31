const usuario = require('./usuarios');
const perfil = require('./perfil');

module.exports = {
  ...usuario,
  ...perfil,
};
