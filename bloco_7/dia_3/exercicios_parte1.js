// //exercicio 1

// const assert = require('assert');

// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }

//   return a + b;
// }

// // implemente seus testes aqui
// const expected = sum(4, '5');

// assert.strictEqual(expected, 9, 'Cinco mais quatro é nove');
// //assert.strictEqual(expected, 0, 'Zero mais zero é zero');

// //exercicio 2 

// const assert = require('assert');

// function myRemove(arr, item) {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (item !== arr[index]) {
//       newArr.push(arr[index]);
//     }
//   }
//   return newArr;
// }
// //const expected = myRemove([1, 2, 3, 4], 3)
// // implemente seus testes aqui
// // assert.deepStrictEqual(expected, [1, 2, 4]);
// // assert.notDeepStrictEqual(expected, [1, 2, 3, 4]);

// // const myList = [5, 6, 7, 8];
// // myRemove(myList, 5);
// // assert.deepStrictEqual(myList, [5, 6, 7, 8]);

//  //assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);

// exercicio 3

// const assert = require('assert');

// function myRemoveWithoutCopy(arr, item) {
//   for (let index = 0, len = arr.length; index < len; index += 1) {
//     if (arr[index] === item) {
//       arr.splice(index, 1);
//       index -= 1;
//       len -= 1;
//     }
//   }

//   return arr;
// }

// // implemente seus testes aqui

// //let expected = myRemoveWithoutCopy([1, 2, 3, 4], 3);
// //expected = myRemoveWithoutCopy([1, 2, 3, 4], 5);

// //assert.deepStrictEqual(expected, [1, 2, 4]);

// //assert.notDeepStrictEqual(expected, [1, 2, 3, 4]);

// // const myArr = [10, 11, 12, 13, 14];
// // myRemoveWithoutCopy(myArr, 10);
// // assert.notDeepStrictEqual(myArr, [10, 11, 12, 13, 14]);

// //assert.deepStrictEqual(expected, [1, 2, 3, 4]);

// exercicio 4

// const assert = require('assert');

// function myFizzBuzz(num) {
//   if (typeof num !== 'number') return false;
//   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//   if (num % 3 === 0) return 'fizz';
//   if (num % 5 === 0) return 'buzz';
//   return num;
// }

// // implemente seus testes aqui
// let expected = myFizzBuzz(15)
// assert.deepStrictEqual(expected, 'fizzbuzz');

// expected = myFizzBuzz(9)
// assert.deepStrictEqual(expected, 'fizz');

// expected = myFizzBuzz(10)
// assert.deepStrictEqual(expected, 'buzz');

// expected = myFizzBuzz(2)
// assert.deepStrictEqual(expected, 2);

// expected = myFizzBuzz('9')
// assert.deepStrictEqual(expected, false);

// exercicio 5

// const assert = require('assert');

// const obj1 = {
//   title: 'My Title',
//   description: 'My Description',
// };

// const obj2 = {
//   description: 'My Description',
//   title: 'My Title',
// };

// const obj3 = {
//   title: 'My Different Title',
//   description: 'My Description',
// };

// // implemente seus testes aqui

// assert.deepStrictEqual(obj1, obj1);
// assert.deepStrictEqual(obj2, obj1);
// assert.deepStrictEqual(obj3, obj1);