const db = require("../config/db");

/*INSERT ========== opção 1 =======================
const novoPerfil = { 
  nome: "visitante",
  rotulo: "Visitante",
};

db('perfis').insert(novoPerfil)
.then(res => console.log(res))
.catch(err => console.log(err.sqlMessage))
.finally(() => db.destroy())
 */

//INSERT ========== opção 2 =======================
const perfilSU = {
    nome: 'root' + Math.random(),
    rotulo: 'Super Usuário'
}
//  Exemplo mais proximo da consulta SQL
db.insert(perfilSU).into('perfis')
.then(res => res[0])
.then(id => `O codigo gerado foi ${id}`)
.then(string => console.log(string))
.catch(err => console.log(err.sqlMessage))
.finally(() => db.destroy())