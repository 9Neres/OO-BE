console.log("DESAFIO 1: Objeto literal e paradoxo do const");

const pessoa = {
  nome: "Ana",
  idade: 25
};

console.log("Objeto inicial:", pessoa);

pessoa.profissao = "Desenvolvedora";
console.log("Depois de adicionar 'profissao':", pessoa);

pessoa.idade = 26;
console.log("Depois de alterar 'idade':", pessoa);

delete pessoa.nome;
console.log("Depois de apagar 'nome':", pessoa);

console.log(
  "Explicacao: const impede trocar a referencia da variavel, mas nao impede alterar o conteudo interno do objeto."
);
