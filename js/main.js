'use strict'

const elementNumber = document.querySelector('#text');
const elementButton = document.querySelector('#button__form');
const elementInput = document.querySelector('pista');
const randomNumber = getRandomNumber(100);


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

// function upNumber() {

// }


const changeInput = (number) => {
    if (elementNumber.Value === randomNumber) {
        consola.log(' Haz ganado campeona!!!');
    } else if (elementNumber.Value < randomNumber) {
        consola.log(' Demasiado bajo ');
    } else if (elementNumber.Value > randomNumber) {
        consola.log(' Demasiado alto ');
    } else {
        consola.log(' El numero debe estar entre 1 y 100 ');
    }
}
console.log.elementNumber.Value(changeInput);

elementButton.addEventListener('click', changeInput);