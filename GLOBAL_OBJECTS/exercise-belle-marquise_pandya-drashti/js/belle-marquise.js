'use strict'

const COMMA = ', '
const BOARD = [
    'beautiful Marquise',
    'your beautiful eyes',
    'make me die',
    'of love'
]

var excludeArray = [];


function getRandomInt(max, excludeArray) {

    let randomNumber = Math.floor(Math.random() * Math.floor(max));
    let flag = false;
    console.log("Random number generated is " + randomNumber);

    for (let i = 0; i < excludeArray.length; i++) {
        if (excludeArray[i] == randomNumber) {
            flag = true;
            break;
        } else {
            flag = false;
        }
    }

    if (flag) {
        let temp = getRandomInt(max, excludeArray);
        console.log("Again number generated is " + temp);
        return temp;
    } else {
        console.log("Returned is " + randomNumber);
        return randomNumber
    }
}


document.write('<ul>');
let rand = 0;

for (let i = 0; i < BOARD.length; i++) {

    rand = 0;
    excludeArray = [];

    rand = getRandomInt(4, rand);
    excludeArray.push(rand);
    document.write("<li>" + BOARD[rand] + COMMA);

    rand = getRandomInt(4, excludeArray);
    excludeArray.push(rand);
    document.write(BOARD[rand] + COMMA);

    rand = getRandomInt(4, excludeArray);
    excludeArray.push(rand);
    document.write(BOARD[rand] + COMMA);

    rand = getRandomInt(4, excludeArray);
    excludeArray.push(rand);
    document.write(BOARD[rand] + "</li>");
}
document.write('</ul>');