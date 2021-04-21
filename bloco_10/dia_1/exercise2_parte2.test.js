function techList(tech, name) {
  // seu código aqui
  let result = [];

    if(tech.length === 0) return 'Vazio!';

    for(let index = 0 ; index < tech.length; index += 1){
        result.push({tech: tech[index], name: name})
    }

    result.sort(compare);
    return result;

}

function compare(a,b){
    if(a.tech < b.tech){
        return -1;
    }
    if(a.tech > b.tech){
        return 1;
    }
    return 0;
}

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});
