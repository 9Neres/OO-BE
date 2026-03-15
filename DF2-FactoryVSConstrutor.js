console.log("DESAFIO 2: Factory Function vs Funcao Construtora");

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.descrever = function () {
  return `${this.nome} custa R$ ${this.preco.toFixed(2)}`;
};

function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    descrever() {
      return `${nome} custa R$ ${preco.toFixed(2)}`;
    }
  };
}

const produtoConstrutor = new Produto("Teclado", 150);
const produtoFactory = criarProduto("Teclado", 150);

console.log("Criado com construtor:", produtoConstrutor);
console.log("Descricao (construtor):", produtoConstrutor.descrever());

console.log("Criado com factory:", produtoFactory);
console.log("Descricao (factory):", produtoFactory.descrever());

console.log(
  "Reflexao: a factory evita depender de 'this' e do uso correto de 'new', reduzindo erros de escopo."
);
