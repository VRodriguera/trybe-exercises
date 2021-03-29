// exercicio 1

// const personalData = (nomeCompleto) => {
//     let emailCompleto = nomeCompleto.replace(' ', '_')
//     emailCompleto = emailCompleto.toLowerCase();
//     emailCompleto = `${emailCompleto}@trybe.com`;
//     return {
//         nome: nomeCompleto,
//         email: emailCompleto,
//     }
// };

// const newEmployees = () => {
//     const employees = {
//         id1: personalData('Pedro Guerra'),

//         id2: personalData('Luiza Drumond'),

//         id3: personalData('Carla Paiva'),
//     }
//     return employees;
// };
// console.log(newEmployees());

// exercicio 2

// const randomNumber = () => {
//     return Math.round(Math.random() * 5);
// };

// const prizeDraw = (randomNumber , myNumber) => {
//     if (randomNumber === myNumber) {
//          return 'Parabéns você ganhou!!';
//     }
//     else {
//         return 'Tente novamente'; 
//     }  
// };
// console.log(prizeDraw(randomNumber(),4));

// exercicio 3

// const correctPhrase = 'higher order function';

// const userPhrase = 'HIGHER ORDER FUNCTION';

// const validate = (correctPhrase) => (userPhrase) => correctPhrase === userPhrase.toLowerCase();

// console.log(validate(correctPhrase)(userPhrase));

// exercicio 4 // 

//!!!!!! retirado do gabarito !!!!!!//

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'N.A', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const repeat = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} corretas`;
};

console.log(repeat(RIGHT_ANSWERS, STUDENT_ANSWERS, (rAnswer, uAnswer) => {
  if (rAnswer === uAnswer) {
    return 1;
  } if (uAnswer === 'N.A') {
    return 0;
  }
    return -0.5;
}));