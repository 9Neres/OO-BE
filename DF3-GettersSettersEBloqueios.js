console.log("DESAFIO 3: Getters, setters, seal e freeze");

const contaBancaria = {
  titular: "Ricardo",
  _saldo: 1000,

  get saldo() {
    return this._saldo;
  },

  set saldo(novoSaldo) {
    if (novoSaldo < 0) {
      console.error("Saldo invalido: o saldo nao pode ser negativo.");
      return;
    }

    this._saldo = novoSaldo;
  }
};

console.log("Saldo inicial:", contaBancaria.saldo);

contaBancaria.saldo = 1500;
console.log("Saldo apos atualizacao valida:", contaBancaria.saldo);

contaBancaria.saldo = -200;
console.log("Saldo apos tentativa invalida:", contaBancaria.saldo);

const contaSelada = {
  titular: "Maria",
  saldo: 500
};

Object.seal(contaSelada);
contaSelada.saldo = 700;
contaSelada.novaPropriedade = "teste";
delete contaSelada.titular;

console.log("Objeto selado:", contaSelada);
console.log(
  "Seal: permite alterar valores existentes, mas impede adicionar ou remover propriedades."
);

const contaCongelada = {
  titular: "Joao",
  saldo: 900
};

Object.freeze(contaCongelada);
contaCongelada.saldo = 1200;
contaCongelada.novaPropriedade = "teste";
delete contaCongelada.titular;

console.log("Objeto congelado:", contaCongelada);
console.log(
  "Freeze: impede adicionar, remover e alterar propriedades."
);
