'use strict';

let size = 6;
drawA(size);
drawB(size);
drawC(size);
drawD(size);
drawE(size);


size = 7;
drawNumberA(size);
drawNumberB(size);
drawNumberC(size);
drawNumberD(size);

function drawA(size) {
    let i, j
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            if (i == 0 || i == size - 1 || j == 0 || j == size - 1) {
                process.stdout.write("*")
            } else {
                process.stdout.write(" ")
            }
        }
        process.stdout.write("\n")
    }
}

function drawB(size) {
    let i, j
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            if (i == 0 || i == size - 1 || i == j) {
                process.stdout.write("*")
            } else {
                process.stdout.write(" ")
            }
        }
        process.stdout.write("\n")
    }
}


function drawC(size) {
    let i, j
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            if (i == 0 || i == size - 1 || i + j == size) {
                process.stdout.write("*")
            } else {
                process.stdout.write(" ")
            }
        }
        process.stdout.write("\n")
    }
}

function drawD(size) {
    let i, j
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            if (i == 0 || i == size - 1 || i + j == size || i == j) {
                process.stdout.write("*")
            } else {
                process.stdout.write(" ")
            }
        }
        process.stdout.write("\n")
    }
}

function drawE(size) {
    let i, j
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            if (j == 0 || j == size - 1 || i == 0 || i == size - 1 || i + j == size || i == j) {
                process.stdout.write("*")
            } else {
                process.stdout.write(" ")
            }
        }
        process.stdout.write("\n")
    }
}

function drawNumberA(size) {
    let i, j
    let output = '';
    for (i = 1; i <= size; i++) {
        for (j = 1; j <= i; j++) {
            output += j + '  ';
        }
        console.log(output);
        output = '';
    }
}

function drawNumberB(size) {
    let i, j
    let output = '';
    for (i = 1; i < size; i++) {
        for (j = 1; j < size; j++) {
            output += j + ' ';
        }
        console.log(output);
        output = '';
    }
}

function drawNumberC(size) {

}

function drawNumberD(size) {

}