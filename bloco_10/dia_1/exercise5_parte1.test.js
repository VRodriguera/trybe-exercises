const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui

test('Verifica se os objetos sao identicos', () => {

  expect(obj1).toBe(obj1)

  expect(obj2).not.toBe(obj1)

  expect(obj3).not.toBe(obj1)

})