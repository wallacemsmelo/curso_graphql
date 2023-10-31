const Query = require("./Query");
const Produto = require("./Produto");
const Usuario = require("./Usuario");
// retorno de dados solicitados, os resolvers estão as funções contidas em service(projeto Frotas)

module.exports = {
  Query /* Todas as funções devem ter o mesmo nome dos atributos de dentro de Query */,
  Produto,
  Usuario,
};
