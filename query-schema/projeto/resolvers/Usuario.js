const { perfis } = require("../data/db");

module.exports = {
  salario(usuario) {
    return usuario.salario_real;
  },
  perfil(usuario) {
    const sels = perfis.filter((obj) => obj.id === usuario.perfil_id);
    return sels ? sels[0] : null;
  },
};
