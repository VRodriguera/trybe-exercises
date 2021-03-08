function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
//exercicio 1//
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

let itemLi = document.querySelector('#days');
let tagLi = document.createElement('li');

for (let index = 0; index < dezDaysList.length; index += 1) {

    tagLi = document.createElement('li');
    tagLi.setAttribute('class', 'day');
    itemLi.appendChild(tagLi).innerText = '' + dezDaysList[index];

    if (dezDaysList[index] == 24 || dezDaysList[index] == 31) {

        tagLi.setAttribute('class', 'day holiday');
    }
    if (dezDaysList[index] == 4 || dezDaysList[index] == 11 || dezDaysList[index] == 18) {

        tagLi.setAttribute('class', 'day friday');
    }
    if (dezDaysList[index] == 25) {

        tagLi.setAttribute('class', 'day holiday friday');
    }
}

//exercicio 2//

//criacao do botao//
let botao1 = document.querySelector('.buttons-container');
let btn1 = document.createElement('BUTTON');
btn1.setAttribute('id', 'btn-holiday');
botao1.appendChild(btn1);
btn1.innerText = 'Feriados';

const botao = document.querySelector('#btn-holiday');//const para definir quem e meu botao
let interruptor = false;
let feriados = [25, 25, 31];

function colorHolidays() {//funçao que define qual cor de fundo os feriados vao receber 

    if (interruptor == false) {
        for (let index = 0; index < feriados.length; index += 1) {
            interruptor = true;
            document.getElementsByClassName('holiday')[index].style.backgroundColor = 'green';
        }
    }
    else if (interruptor == true) {
        for (let index = 0; index < feriados.length; index += 1) {
            interruptor = false;
            document.getElementsByClassName('holiday')[index].style.backgroundColor = 'rgb(238,238,238)';
        }
    }
}
    botao.addEventListener("click", colorHolidays);

//exercicio 3//



