// exercicio 1

const fatorial = (n) => {
    let resultado = n;
    for (let index = 1; index < n; index += 1) {
        resultado = resultado * index;
    }
    return resultado;
}
//console.log(fatorial(4));

// exercicio 2 

const phrase = 'Antônio foi no banheiro e não sabemos o que aconteceu';

const biggestWord = (phrase) => {
    let myWords = phrase.split(' ');
    let biggest = myWords[0];
    for (let index = 0; index < myWords.length; index += 1) {
        if (biggest.length < myWords[index].length) {
            biggest = myWords[index];
        }
    }
    return biggest;
}
//console.log(biggestWord(phrase));

// exercicio 3

let clickCount = 0;
let box = document.getElementById('guarda-click');
let botao = document.getElementById('btn');
box.innerText = clickCount;
botao.addEventListener('click', () => {
    clickCount += 1;
    box.innerText = clickCount;
});

// exercicio 4

let phrase2 = "Tryber x aqui!";
let newElement = "Vini";
let mySkills = ['Html', 'Css', 'JavaScript', 'Git', 'Soft-Skills'];
let ordMySkills = mySkills.sort();

const replacesStr = (phrase2, newElement) => {
    let result = phrase2.replace('x', newElement);
    return result;
}
let resposta = (replacesStr(phrase2, newElement));

const alphabeticalOrder = (resposta, ordMySkills) => {
    let result2 = `${resposta} Minhas cinco principais habilidades são:
    ${ordMySkills[0]};
    ${ordMySkills[1]};
    ${ordMySkills[2]};
    ${ordMySkills[3]};
    ${ordMySkills[4]}; #goTrybe.`
    return result2;
}
console.log(alphabeticalOrder(resposta, ordMySkills));
