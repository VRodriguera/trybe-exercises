function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
test('Verifica elemento removido da copia', () => {
  const result = myRemove([1, 2, 3, 4], 3)
  expect(result).toEqual([1, 2, 4])

  expect(result).not.toEqual([1, 2, 3, 4])

  const myList = [5, 6, 7, 8];
  myRemove(myList, 5)
  expect(myList).toEqual([5, 6, 7, 8])

  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
})