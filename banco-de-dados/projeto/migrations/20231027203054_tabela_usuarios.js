exports.up = function (knex) {
  return knex.schema
    .createTable("usuarios", (table) => {
      table.increments("id").primary();
      table.string("nome").notNull();
      table.string("email").notNull().unique();
      table.string("senha", 60).notNull();
      table.boolean("ativo").notNull().defaultTo(true);
      table.timestamp("data_criacao").defaultTo(knex.fn.now());
    })
    /* .then(function () {
      return knex("perfis").insert([
        { nome: "Joselito Rodrigues", email: "joselitoR@panda.com", senha:"123", ativo: true},
        { nome: "André Santiago", email: "andresantiago@panda.com", senha:"123", ativo: true },
        { nome: "Roberto Moraes", email: "robertomoraes@panda.com", senha:"123", ativo: true },
        { nome: "Carla Ferreira", email: "carlaferreira@panda.com", senha:"123", ativo: true },
      ]);
    }); */
};

exports.down = function (knex) {
  return knex.schema.dropTable("usuarios");
};
