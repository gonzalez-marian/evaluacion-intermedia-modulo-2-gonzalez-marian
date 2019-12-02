'use strict'

const elementNumber = document.querySelector('#text');
const elementButton = document.querySelector('#button__form');
const elementInput = document.querySelector('#pista');
const randomNumber = getRandomNumber(100);


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

// function upNumber() {

// }


const changeInput = (number) => {
    if (elementNumber.value > randomNumber) {
        console.log(' Demasiado alto ');
    } else if (elementNumber.value < randomNumber) {
        console.log(' Demasiado bajo ');
    } else if (elementNumber.value == randomNumber) {
        console.log(' Haz ganado campeona!!!');
    } else {
        console.log(' El numero debe estar entre 1 y 100 ');
    }
}
console.log(randomNumber);

elementButton.addEventListener('click', changeInput);
