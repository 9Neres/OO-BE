console.log("DESAFIO 4: Heranca por prototipos");

const Veiculo = {
  tipo: "Veiculo generico",
  acelerar() {
    console.log(`${this.modelo} esta acelerando.`);
  }
};

const Carro = Object.create(Veiculo);
Carro.modelo = "Fusca";
Carro.rodas = 4;

console.log("Objeto filho:", Carro);
console.log(
  "O prototipo de Carro e Veiculo:",
  Object.getPrototypeOf(Carro) === Veiculo
);

Carro.acelerar();
