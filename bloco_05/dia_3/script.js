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

//exercicio 3//

let botao = document.querySelector('#btn-holiday');//const para definir quem e meu botao
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

//exercicio 4//

let botao2 = document.querySelector('.buttons-container');
let btn2 = document.createElement('BUTTON');
btn2.setAttribute('id', 'btn-friday');
botao2.appendChild(btn2);
btn2.innerText = 'Sexta-feira';

let Botao = document.querySelector('#btn-friday');//const para definir quem e meu botao
let interruptor2 = false;
let sextas = [4, 11, 18, 25];

//exercicio 5//

function textFriday() {//funçao que define qual texto as sextar vao receber 

    if (interruptor2 == false) {
        for (let jindex = 0; jindex < sextas.length; jindex += 1) {
            interruptor2 = true;
            document.getElementsByClassName('friday')[jindex].innerText = 'Dia de Maldade';
        }
    }
    else if (interruptor2 == true) {
        for (let jindex = 0; jindex < sextas.length; jindex += 1) {
            interruptor2 = false;
            document.getElementsByClassName('friday')[jindex].innerText = sextas[jindex];
        }
    }
}
Botao.addEventListener("click", textFriday);

//exercicio 6//

function dayZoom() {
    let days = document.querySelector('#days');

    days.addEventListener('mouseover', function (event) {
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = '600';
    })
};

function dayNoZoom() {
    let days = document.querySelector('#days');

    days.addEventListener('mouseout', function (event) {
        event.target.style.fontWeight = '200';
        event.target.style.fontSize = '20px';
    })
};
dayZoom()
dayNoZoom()

//exercicio 7//

function tasks (nomeDaTarefa) {
    let varPai = document.getElementsByClassName('my-tasks')[0];
    let varSon = document.createElement('SPAN');
    varSon.setAttribute('class', 'task');
    varSon.innerText = nomeDaTarefa;
    varPai.appendChild(varSon);
    
}
tasks('cozinhar');

//exercicio 8//

function newTaskDiv(color) {

    let tasksContainer = document.querySelector('.my-tasks');
    let newTask = document.createElement('div');
  
    newTask.className = 'task';
    newTask.style.backgroundColor = color;
    tasksContainer.appendChild(newTask);
  };
  
  newTaskDiv('green');

//exercicio 9//copiado do gabario por estar muito atrasado

function setTaskClass() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
  
    myTasks.addEventListener('click', function(event) {
      if (selectedTask.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });
  };
  
  setTaskClass();
//exercicio 10//copiado do gabario por estar muito atrasado
function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  };
  //exercicio 11//copiado do gabario por estar muito atrasado
  setDayColor();

  function addNewTask() {
    let getInputField = document.querySelector('#task-input');
    let addInputButton = document.querySelector('#btn-add');
    let getTaskList = document.querySelector('.task-list');
  
    addInputButton.addEventListener('click', function() {
      if (getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      } else {
        alert('Error: Digite ao menos 1 caractere.');
      }
    })
  
    getInputField.addEventListener('keyup', function(event) {
      if (event.keyCode === 13 && getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      }
    });
  };
  
  addNewTask();