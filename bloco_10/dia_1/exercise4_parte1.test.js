function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// // implemente seus testes aqui

// implemente seus testes aqui

test('Testa a função fizz buzz', () => {

  expect(myFizzBuzz(15)).toEqual('fizzbuzz')

  expect(myFizzBuzz(9)).toEqual('fizz')

  expect(myFizzBuzz(10)).toEqual('buzz')

  expect(myFizzBuzz(2)).toEqual(2)

  expect(myFizzBuzz('9')).toEqual(false)
  
})