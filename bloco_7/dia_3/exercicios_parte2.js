// //exercicio 1

// const assert = require('assert');
// // escreva a função addOne aqui
// const addOne = (myArray) => {
//     let result = [];
//     for (let index in myArray) {
//         result.push(myArray[index] + 1);
//     }
//     return result;
// }

// const myArray = [31, 57, 12, 5];
// const unchanged = [31, 57, 12, 5];
// const expected = [32, 58, 13, 6];
// const output = addOne(myArray);

// //assert.strictEqual(typeof addOne, 'function');
// //assert.deepStrictEqual(output, expected);
// //assert.deepStrictEqual(myArray, unchanged);

//exercicio 2

// const assert = require('assert');
// // escreva a função wordLengths aqui
// const wordLengths = (words) => {
//     let result = [];
//     for (let index in words) {
//         result.push(words[index].length)
//     }
//     return result;
// }

// const words = ['sun', 'potato', 'roundabout', 'pizza'];
// const expected = [3, 6, 10, 5];

// assert.strictEqual(typeof wordLengths, 'function');
// const output = wordLengths(words);
// assert.deepStrictEqual(output, expected);

//exercicio 3

// const assert = require('assert');
// // escreva a função sumAllNumbers aqui

// const sumAllNumbers = (numbers) => {
//     let result = 0;
//     for (let index in numbers) {
//         result += numbers[index];
//     }
//     return result;
// }

// const numbers = [9, 23, 10, 3, 8];
// const expected = 53;
// const output = sumAllNumbers(numbers);

// assert.strictEqual(typeof sumAllNumbers, 'function');
// assert.strictEqual(output, expected);

//exercicio 4

const assert = require('assert');
// escreva a função findTheNeedle aqui
const findTheNeedle = (words, item) => {
    let result = -1;
    for (let index in words) {
        if(words[index] === item){
            result = Number(index);
        }
    }
    return result;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);