const db = require("../config/db");

/*SELECT ========== opção 1 =======================
 db('perfis')
  .map((p) => p.nome)
  .then((nomes) => console.log(nomes))
  .finally(() => db.destroy()); */

/*SELECT ========== opção 2 =======================
db('perfis').select('nome', 'id')
  .then(res => console.log(res))
  .finally(()=> db.destroy())
 */

/* SELECT ========== opção 3 =======================
 Exemplo mais proximo da consulta SQL
db.select("nome", "id")
  .from("perfis")
  .then((res) => console.log(res))
  .finally(() => db.destroy());
 */

// SELECT ========== opção 4 =======================
db("perfis")
  .select("nome", "id")
  .where({ id: 3 })
  .first()
  .then((res) => console.log(res))
  .finally(() => db.destroy());
