console.log("DESAFIO 5: JSON vs objeto JavaScript");

const objetoJS = {
  mensagem: "Ola, mundo!",
  versao: 1,
  executar() {
    return "Executando...";
  }
};

console.log("Objeto original:", objetoJS);
console.log("Resultado da funcao antes da serializacao:", objetoJS.executar());

const jsonGerado = JSON.stringify(objetoJS, null, 2);

console.log("JSON gerado:");
console.log(jsonGerado);

console.log(
  "Reflexao: a funcao nao aparece no JSON porque JSON transporta apenas dados serializaveis, nao comportamento."
);
