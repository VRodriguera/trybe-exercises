// const greaterThan = (firstNumber) => (secondNumber) => secondNumber > firstNumber;

// const greaterThan10 = greaterThan(10);
// console.log(greaterThan(10)(15));
// // true

const wakeUp = () => {
   return console.log('Acordando!!');
};
const firstMeal = () => {
   return console.log('Bora tomar café!!');
};
const toSleep = () => {
   return console.log('Partiu dormir!!');
};

const doingThings = (wakeUp) => {
    return wakeUp()
}

doingThings(wakeUp);
