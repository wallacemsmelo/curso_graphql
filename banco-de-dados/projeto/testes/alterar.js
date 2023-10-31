const db = require("../config/db");
//Primeira inserção - não existe dados então criaremos um para alterar
const novoUsuario = {
  nome: "Pedro",
  email: "pedro@empresa.com.br",
  senha: "12345678",
};
//UPDATE ================
async function exercicio() {
  const { qtde } = await db("usuarios") //QTDE retorna quantos usuarios existem na tabela
    .count("* as qtde")
    .first();

  if (qtde === 0) {
    //inserir - Se a tabela estiver vazia preecha como novo usuario
    await db("usuarios").insert(novoUsuario);
  }

  //consulta pelo ID para encontar o usuario dentro da tabela e armazena em let id
  let { id } = await db("usuarios").select("id").limit(1).first();

  //ALTERAR o usuario exsitente com este ID dentro da tabela
  await db("usuarios").where({ id }).update({
    nome: "Pedro Garcia",
    email: "pedro.garcia@empresa.com.br",
  });

  return db("usuarios").where({ id }); //retorna o usuario alterado
}

exercicio() //Como chamamos a função async então podemos usar o Then e finally
  .then((usuario) => console.log(usuario)) //then recebe o objeto passado pela função....posso colocar qualquer nome nesta variavel
  .finally(() => db.destroy());
