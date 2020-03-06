'use strict'

console.log('Salut jQuery !')

// (1) Display in the console the innerHTML of the id div "first"
$("#first").append("This is some text");

// (2) Display in the console the number of CSS class elements "info"
console.log('Number of elemenet with INFO classname ' + $(".info").length);

// (3) Display in the console the total number of images on the page
console.log('Total number of images ' + $("img").length);

// (4) Display in the console the number of images contained in the id div "first"
console.log('Total number of images ' + $("#first img").length);

// (5) Display in the console the number of images whose source has a path that contains the word "gallery"
var imgs = $('img').map(function () {
    return $(this).attr('src').match('gallery')
}).get();
console.log('Number of image witg src GALLERY in src ' + imgs.length);

// (6) Declare a jQ variable named firstDiv that contains the id element "first"
let firstDiv = $("#first");

// (7) Display in the console the number of images of this element #first and whose source contains the substring "gallery"

var imgs = $('#first img').map(function () {
    return $(this).attr('src').match('gallery')
}).get();
console.log('Number of image witg src FIRST => GALLERY in src ' + imgs.length);

// (8) Declare a firstDivById variable that contains the "first" id DOM element (the same as above), use document.getElementById
let firstDivById = document.getElementById("first");

// (9) "jQuerisez" this variable firstDivById (DOM element), ie pass it in the function $ (), and display the number of direct children of type p it contains
function display() {

}