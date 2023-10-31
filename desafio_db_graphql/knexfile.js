// Update with your config settings.

module.exports = {
  client: "mysql",
  connection: {
    database: "desafio",
    user: "root",
    password: "",
  },
  pool: {
    min: 2,
    max: 100,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
