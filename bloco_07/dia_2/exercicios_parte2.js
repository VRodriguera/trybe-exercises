const lesson1 = {
    materia : 'Matemática',
    numeroEstudantes : 20,
    professor : 'Maria Clara',
    turno : 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  // exercicio 1

  let turno = {
    turno: 'manhã'
  };

   Object.assign(lesson2, turno);

  //console.log(lesson2);

  // exercicio 2

  const keys = (lesson1) => {
       return Object.keys(lesson1);
  }
  //console.log(keys(lesson1));

  // exercicio 3

  const objectSize = (lesson2) => {
    return Object.keys(lesson2).length;
  }
  //console.log(objectSize(lesson2));

  // exercicio 4

  const value = (lesson3) => {
        return Object.values(lesson3);
    }
  //console.log(value(lesson3));

  // exercicio 5

  const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

  //console.log(allLessons);

  // exercicio 6

const somaAlunos = (allLessons) => {
  let soma = 0;
  let arr = Object.values(allLessons);
  for (let index in arr) {
    soma += arr[index].numeroEstudantes;
  }
  return soma;
}
//console.log(somaAlunos(allLessons));

// exercicio 7

const valueInPosition = (lesson3, number) => {
  return Object.values(lesson3)[number];
}
//console.log(valueInPosition(lesson3, 2));

// exercicio 8

const checkTrue = (obj, key, value) => {
    const arr = Object.entries(obj);
    let result = false;
    for (let index in arr) {
      if (arr[index][0] === key && arr[index][1] === value) result = true;
    }
    return result;
}
checkTrue(lesson1, 'materia', 'matematica');
console.log(checkTrue(lesson1, 'materia', 'Matemática'));
