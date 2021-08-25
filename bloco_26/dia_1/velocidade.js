const readline = require('readline-sync');

const distancia = readline.question('Digite a distancia: ');
const tempo = readline.question('Digite o tempo: ');
let velocidade = 0

const calculaVelociade = (distancia, tempo) => {
  velocidade = distancia / tempo
  return (
    console.log(`A velocidade media é ${velocidade} m/s`),
    console.log(`A velocidade media é ${velocidade * 3.6} km/h`)
  )
}

calculaVelociade(distancia, tempo);
