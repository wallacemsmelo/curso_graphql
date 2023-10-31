const db = require("../config/db");

async function salvarUsuario(nome, email, senha) {
  let usuario = await db("usuarios").select("id").where({ email }).first();

  if (!usuario) {
    let [id] = await db("usuarios").insert({ nome, email, senha });
    (usuario = await db("usuarios")).where({ id }).first();
  } else {
    await db("usuarios")
      .where({ id: usuario.id })
      .update({ nome, email, senha });
    usuario = { ...usuario, nome, email, senha };
  }

  return usuario;
}

async function salvarPerfil(nome, rotulo) {
  let perfil = await db("perfis").where({ nome }).first();

  if (!perfil) {
    let [id] = await db("perfis").insert({ nome, rotulo });
    perfil = await db("perfis").where({ id }).first();
  } else {
    await db("perfis").where({ id: perfil.id }).update({ nome, rotulo });
    usuario = { ...perfil, nome, rotulo }; //Merge
  }

  return perfil;
}

async function adicionaPerfis(usuario, ...perfis) {
  const usuario_id = usuario.id;
  await db("usuarios_perfis").where({ usuario_id }).delete();
  for (let perfil of perfis) {
     const perfil_id = perfil.id
     await db('usuarios_perfis').insert({ usuario_id, perfil_id})
  }
}

async function executar() {
  const usuario = await salvarUsuario(
    "Eduarda",
    "eduarda@empresa.com.br",
    "1234656"
  );
  const perfilA = await salvarPerfil("comunicacao", "Comunicação");
  const perfilB = await salvarPerfil("recepcao", "Recepção");

  console.log(usuario);
  console.log(perfilA);
  console.log(perfilB);

  await adicionaPerfis(usuario, perfilA, perfilB);
}

executar()
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => db.destroy());
