const readline = require('readline-sync');

const peso = readline.question('Digite seu peso: ');
const altura = readline.question('Digite sua altura: ');
let imc = 0

const calculaIMC = (peso, altura) => {
  imc = peso / (altura * altura)
  return imc.toFixed(1)
};

console.log(calculaIMC(peso, altura));

const situacaoIMC = () => {
  if (imc <= 18.5) {
    return console.log('Abaixo do peso (magreza)')
  }
  if (imc >= 18.5 && imc <= 24.9) {
    return console.log('Peso normal')
  }
  if (imc >= 25.0 && imc <= 29.9) {
    return console.log('Acima do peso (sobrepeso)')
  }
  if (imc >= 30.0 && imc <= 34.9) {
    return console.log('Obesidade grau I')
  }
  if (imc >= 35.0 && imc <= 39.9) {
    return console.log('Obesidade grau II')
  }
  if (imc >= 40.0) {
    return console.log('Obesidade grau III')
  }
}

situacaoIMC();
