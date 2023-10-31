const Query = require("./Query"); /*Require somente da pasta, pois ela contem um index.js que e procurado*/
const Usuario = require("./Usuario");

const Mutation  = require("./Mutation");
module.exports = {
  /*Exportando todos os arquivos contidos nas pastas requeridas pelas contantes*/
  Query,
  Mutation,
  Usuario
};
