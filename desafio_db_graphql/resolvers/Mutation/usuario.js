const db = require("../../config/db");

module.exports = {
  async novoUsuario(_, { dados }) {
    try {
      const idsPerfis = [];
      if (dados.perfis) {
        for (let filtro of dados.perfis) {
          const perfil = await obterPerfil(_, {
            filtro,
          });
          if (perfil) idsPerfis.push(perfil.id);
        }
      }
      delete dados.perfis;
      const [id] = await db("usuarios").insert({ ...dados });

      for (perfil_id of idsPerfis) {
        await db("usuarios_perfis").insert({ perfil_id, usuario_id: id });
      }

      return db("usuarios").where({ id }).first();
    } catch (e) {
      throw new Error(e.sqlMessage);
    }
  },
  async excluirUsuario(_, { filtro }) {
    try {
      const usuario = await obterUsuario(_, { filtro });
      if (usuario) {
        const { id } = usuario;
        await db("usuario_perfis").where({ usuario_id: id }).delete();
        await db("usuarios").where({ id }).delete();
      }
      return usuario;
    } catch (e) {
      throw new Error(e.sqlMessage);
    }
  },
  async alterarUsuario(_, { filtro, dados }) {
    try {
      const usuario = await obterUsuario(_, { filtro }); // obter o usuario
      if (usuario) {
        // se tiver o usuario entra nesse fluxo
        const { id } = usuario;
        if (dados.perfis) {
          //limpa todos os perfis antigos desse usuario
          await db("usuario_perfis").where({ usuario_id: id }).delete();

          for (let filtro of dados.perfis) {
            //adiciona os perfis novos desse usuario novamente conforme atualização
            const perfil = await obterPerfil(_, { filtro });
            if (perfil) {
              await db("usuario_perfis").insert({
                perfil_id: perfil.id,
                usuario_id: id,
              });
            }
          }
        }
        delete dados.perfis; //deleta os dados para não dar conflito na inserção no bd
        await db("usuarios").where({ id }).update(dados); // se tudo certo então ele vai terminar aqui
      }
      return !usuario
        ? null
        : {
            ...usuario,
            ...dados,
          }; /* se usuario for false ( vazio ) ele retorna NULO, senão retorna um objeto como dados MERGE e retorna um objeto novo*/
    } catch (e) {
      throw new Error(e.sqlMessage);
    }
  },
};
