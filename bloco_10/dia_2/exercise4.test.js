const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
}

//// TESTES ////         

it('Testa se os repositorios existem', () => {
  const URL = 'https://api.github.com/orgs/tryber/repos';

  return getRepos(URL).then(result => {
    expect(result).toContain('sd-01-week4-5-project-todo-list');
    expect(result).toContain('sd-01-week4-5-project-meme-generator');
  });

});