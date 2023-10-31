const db = require("../config/db");

//EXCLUIR por ID
db('usuarios').where({id: 1}) 
.delete()
.then(res => console.log(res)) // neste caso RES apenas informa quantos regsitros foram deletados
.finally(()=> db.destroy()) //interrompe a execução da ação


//Excluir todos os dados da tabela
 /*  db('perfis')
  .delete()
  .then(res => console.log(res))
  .finally(() => db.destroy()) */
