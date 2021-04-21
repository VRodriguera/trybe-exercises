function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
test('verifica soma', () => {
  const result = sum(4, 5)

  expect(result).toBe(9)

  expect(sum(0, 0)).toBe(0)

  expect( () => sum(4, '5')).toThrow()

  expect( () => sum(4, '5')).toThrowError('parameters must be numbers')
})