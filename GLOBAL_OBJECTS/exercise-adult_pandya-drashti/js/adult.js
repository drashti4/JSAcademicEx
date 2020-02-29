'use strict'

// Age to be considered an adult
const MAJOR = 18

// Four groups of ages
const AGES = [
    [25, 39, 51, 22, 15, 44],
    [25, 39, 51, 22, 55, 44],
    [25],
    [15]
]


let isAdult = true;

AGES.forEach(
    function (ages, index) {
        let counter = 0
        isAdult = true;
        ages.forEach(function (entry) {
            if (entry < 19) {
                isAdult = false;
            }
        });
        if (isAdult) {
            document.write("<tr><td><h2>Group", index, " are all adults</h2></td></tr>")
        } else {
            document.write("<tr><td><h4>Group", index, " are not all adults</h4></td></tr>")
        }
    });