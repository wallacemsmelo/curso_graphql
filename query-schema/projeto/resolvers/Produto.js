module.exports = {
  // Resolvendo o valor do atributo precoComDesconto de tipo Produto
  precoComDesconto(produto) {
    // função deve ter o mesmo nome precoComDesconto de tipo Produto - recebe um objeto como parametro por padrão
    if (produto.desconto) {
      return produto.preco * (1 - produto.desconto);
    } else {
      return produto.preco;
    }
}
};
