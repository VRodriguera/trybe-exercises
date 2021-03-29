// //exercicio 1

// const assert = require('assert');

// const greetPeople = (parameter) => {
//     let result = [];
//     for (let index in parameter) {
//       let greeting = 'Hello ';
//       greeting += parameter[index];
//       result.push(greeting);
//     }
//     return result;
//   };

//   const parameter = ['Irina', 'Ashleigh', 'Elsa'];
//   const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
//   const func =  greetPeople(parameter);

//   assert.deepStrictEqual(func, result);

// exercicio 2

// const assert = require('assert');

// const removeVowels = (parameter) => {
//     const characters = parameter.split('');
//     const results = [];
//     let count = 0;

//     for (let index = 0; index < characters.length; index += 1) {
//         if (
//             characters[index] === 'a' ||
//             characters[index] === 'o' ||
//             characters[index] === 'i' ||
//             characters[index] === 'e' ||
//             characters[index] === 'u'
//         ) {
//             count += 1
//             results.push(count)
//         } else {
//             results.push(characters[index]);
//         }
//     }
//     return results.join(''); 
// };


// const parameter = 'Dayane';
// const result = 'D1y2n3';
// const func = removeVowels(parameter);

// assert.deepStrictEqual(func, result);

// exercicio 3

// const assert = require('assert');

// const greaterThanTen = (parameter) => {
//     let results = [];
//     for (let index = 0; index < parameter.length; index += 1) {
//       if (parameter[index] > 10) {
//         results.push(parameter[index]);
//       }
//     }
//     return results;
//   };
  
//   const parameter = [4, 10, 32, 9, 21];
//   const result = [32, 21];
//   const func = greaterThanTen(parameter);

//   assert.deepStrictEqual(func, result);

// exercicio 4

const assert = require('assert');

function secondThirdSmallest(parameter) {
    let results = []
    parameter.sort(function (a, b) {
        return a - b;
    });
    results = [parameter[1], parameter[2]];
    return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];
const func = secondThirdSmallest(parameter)

assert.deepStrictEqual(func, result);
