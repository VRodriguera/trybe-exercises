document.getElementById('header-container').style.backgroundColor = '#02B069';
document.getElementById('footer-container').style.backgroundColor = '#003533';
document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = '#FF9D83';
document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = '#F9DB5E';

let cor1 = document.getElementsByClassName('cor1');
for (let index = 0; index < cor1.length; index += 1){   
cor1[index].style.backgroundColor = '#A52BF3';
}

let cor2 = document.getElementsByClassName('cor2');
for (let index = 0; index < cor2.length; index += 1){   
cor2[index].style.backgroundColor = '#232525';
}
