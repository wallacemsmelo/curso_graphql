const { usuarios, perfis } = require("../data/db");

module.exports = {
  ola() {
    return "Bom dia!";
  },
  horaCerta() {
    const date = new Date();
    return date.toString();
  },
  usuarioLogado() {
    return {
      id: 1,
      nome: "Wallace",
      idade: 35,
      email: "wallace.melo@el.com.br",
      salario_real: 1000.0,
      vip: true,
    };
  },
  produtoEmDestaque() {
    return {
      nome: "Arroz Tio Juca",
      preco: 18.99,
      desconto: 0.2,
    };
  },
  numerosMegaSena() {
    //return [1,2,3,4,5,6]
    const crescente = (a, b) => a - b;
    return Array(6)
      .fill(0)
      .map((n) => parseInt(Math.random() * 60 + 1))
      .sort(crescente);
  },
  usuarios() {
    return usuarios;
  },
  usuario(obj, args) {
    const sels = usuarios.filter((obj) => obj.id === args.id);
    return sels ? sels[0] : null;
  },
  perfis() {
    return perfis;
  },
  perfil(_, { id }) {
    const sels = perfis.filter((obj) => obj.id === id);
    return sels ? sels[0] : null;
  },
};
