'use strict'

let img = document.getElementsByTagName('img');

const number = document.getElementById("numberInput");
number.addEventListener("change", () => {
    img[0].src = "file:///C:/isi/JavaScript/Excercises/EVENTS/exercise-number-image_pandya-drashti/image/" + number.value + ".jpg";
}, false);