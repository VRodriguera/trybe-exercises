const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let numbers = [];
for (let index = 0; index < 10; index += 1) {
    numbers.push(getRandomInt(1, 50))
}

let squaredNumbers = [];
const squares = () => {
    numbers.forEach((element) => {
        squaredNumbers.push(Math.pow(element, 2))
    });
    return squaredNumbers.reduce((acc, curr) => acc + curr);
}

const comparaValor = (num) => {
    return new Promise((resolve, reject) => {
        if (num < 8000) {
            resolve([num / 2, num / 3, num / 5, num / 10])
        } else {
            reject(console.log('É mais de oito mil! Essa promise deve estar quebrada!'))
        }
    })
};

const execute = () => {
    comparaValor(squares())
        .then((result) => new Promise((resolve, reject) => {
            if (typeof result !== 'undefined') {
                resolve(console.log(result.reduce((acc, curr) => acc + curr)))
            } else {
                reject(console.log('Deu tudo errado!!!'))
            }
        }))
        .catch((erro) => erro);
};

execute();