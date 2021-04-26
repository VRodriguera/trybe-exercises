// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const myJoke = (joke) => {
    let container = document.getElementById('jokeContainer');
    container.innerHTML = joke;
}

const fetchJoke = () => {
    // Adicionar lógica aqui!
    const myObj = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    };
    fetch(API_URL, myObj)
        .then(response => response.json())
        .then(data => myJoke(data.joke));

};

window.onload = () => fetchJoke();