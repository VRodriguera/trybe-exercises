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
      tagLi.setAttribute('class','day');
      itemLi.appendChild(tagLi).innerText = '' + dezDaysList[index];

      if(dezDaysList[index] == 24 || dezDaysList[index] == 31) {
       
        tagLi.setAttribute('class','day holiday');
      }
      if(dezDaysList[index] == 4 || dezDaysList[index] == 11 || dezDaysList[index] == 18) {
       
        tagLi.setAttribute('class','day friday');
      }
      if(dezDaysList[index] == 25) {
       
        tagLi.setAttribute('class','day holiday friday');
      }
  }