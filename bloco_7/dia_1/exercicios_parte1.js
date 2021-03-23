//exercicio 1//

let escopo = true;
const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
}

testingScope(true);

//exercicio 2//

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

const sortfunction = (a, b) => a - b;//usei como base a solução encontrada aqui: https://pt.stackoverflow.com/questions/9900/como-ordenar-um-array-por-valores//
 
const ordenaNumeros = (oddsAndEvens) => {
    if (oddsAndEvens !== []) {
       let resultado = oddsAndEvens.sort(sortfunction);
       resultado = `Os números ${resultado} se encontram ordenados de forma crescente!`;
       console.log(resultado);
    }
 }

 ordenaNumeros(oddsAndEvens);
