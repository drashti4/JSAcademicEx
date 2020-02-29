'use strict';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const SALES = [120, 500, 350, 400, 600, 890, 450, 100, 250, 300, 650, 450];

let total = 0; // SALES total

// Creation of a vertical HTML table
document.write('<h2>Vertical Table</h2>');
document.write('<table style="width:10%">');

for (let i = 0; i < MONTHS.length; i++) {
    document.write('<tr>');

    document.write('<td>');
    document.write(MONTHS[i]);
    document.write('</td>');

    document.write('<td>');
    document.write(SALES[i]);
    total += SALES[i];
    document.write('</td>');

    document.write('</tr>');
}
document.write('<tr>');

document.write('<td>');
document.write('<b>Total</b>')
document.write('</td>');

document.write('<td>');
document.write('<b>', total, '$</b>')
document.write('</td>');

document.write('</tr>');
document.write('</table>')

// Creation of a horizontal HTML table

document.write('<h2>Horizontal Table</h2>');
document.write('<table style="width:100%">');

document.write('<tr>');
for (let i = 0; i < MONTHS.length; i++) {

    document.write('<td>');
    document.write(MONTHS[i]);
    document.write('</td>');
}

document.write('<td>');
document.write('<b>Total</b>');
document.write('</td>');

document.write('</tr>');

document.write('<tr>');

for (let i = 0; i < SALES.length; i++) {
    document.write('<td>');
    document.write(SALES[i]);
    document.write('</td>');
}

document.write('<td>');
document.write('<b>', total, '$</b>');
document.write('</td>');

document.write('</tr>');
document.write('</table>')