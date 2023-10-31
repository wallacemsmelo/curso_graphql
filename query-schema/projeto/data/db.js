/* -------------------------------------------
Criação dos array para passagem de parametros
---------------------------------------------- */
const perfis = [
  { id: 1, nome: "comum" },
  { id: 2, nome: "administrador" },
];

const usuarios = [
  {
    id: 1,
    nome: "João Silva",
    email: "jsilva@zemail.com",
    idade: 29,
    perfil_id: 1,
    status: 'ATIVO'
  },
  {
    id: 2,
    nome: "Rafael Junior",
    email: "rafajunior@zemail.com",
    idade: 31,
    perfil_id: 2,
    status: 'INATIVO'
  },
  {
    id: 3,
    nome: "Daniela Smith",
    email: "danismi@zemail.com",
    idade: 24,
    perfil_id: 1,
    status: 'BLOQUEADO'
  },
];

module.exports = { usuarios, perfis };
