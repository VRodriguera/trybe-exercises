const readline = require('readline-sync');

const comparador = () => {
  const palpite = readline.question('Digite seu palpite: ');
  numSorteado = Math.floor(Math.random() * 10 + 1)
  if (palpite === numSorteado) {
    return console.log("Parabéns, número correto!");
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${numSorteado}`)
  }
  const jogarDeNovo = readline.question('Jogar novamente: ');
  if (jogarDeNovo === "Sim") {
    comparador();
  }
};

comparador();
