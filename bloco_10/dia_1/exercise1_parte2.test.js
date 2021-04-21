function encode(str1) {
  // seu código aqui
  const vowels = { a: 1, e: 2, i: 3, o: 4, u: 5 };//constante volgal que recebe um objeto onde cada key(letra) recebe um valor (numero)
  let encoded = '';//string vazia para guardar nossa frase codificada

  for (let index in str1) {//for que caminha dentro de todas a posiçoes da minha string
    if (vowels[str1[index]]) {//verificando se o valor que estou recebendo existe
      encoded += vowels[str1[index]];// se sim o meu encoded é concatenado com o valor de vowels em string em index 
    }
    else {
      encoded += str1[index];//senao so concateno a letra que eu ja tinha na string
    }
  }
  return encoded
};

  function decode(str2) {
    // seu código aqui
    const numbers = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };//constante volgal que recebe um objeto onde cada key(letra) recebe um valor (numero)
    let decoded = '';//string vazia para guardar nossa frase codificada

    for (let index in str2) {//for que caminha dentro de todas a posiçoes da minha string
      if (numbers[str2[index]]) {//verificando se o valor que estou recebendo existe
        decoded += numbers[str2[index]];// se sim o meu encoded é concatenado com o valor de vowels em string em index 
      }
      else {
        decoded += str2[index];//senao so concateno a letra que eu ja tinha na string
      };
    }
    return decoded
  };

  test('Testa se funçoes encode e decode estao declaradas', () => {

    const encodeIsFunction = typeof encode
    expect(encodeIsFunction).toBe('function')

    const decodeIsFunction = typeof decode
    expect(decodeIsFunction).toBe('function')

  })

  test('Testa se o retorno das funções esta correto', () => {

    expect(encode('carro')).toEqual('c1rr4')

    expect(decode('c1rr4')).toEqual('carro')

    expect(encode('crr')).toEqual('crr')

    expect(decode('c7rr8')).toEqual('c7rr8')

    expect(encode('carro').length).toEqual(5)

    expect(decode('c1rr4').length).toEqual(5)
  })