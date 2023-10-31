const { ApolloServer, gql } = require("apollo-server"); /* Importando o server para rodar a aplicacação */
const { importSchema } = require("graphql-import"); /* Permite reconhecer o importes dos schema*/
const resolvers = require("./resolvers"); /* Todos os resolvers sendo importados, basta apontar a pasta */

const schemaPath = "./schema/index.graphql";
const server = new ApolloServer({
  typeDefs: importSchema(schemaPath),
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`);
});
