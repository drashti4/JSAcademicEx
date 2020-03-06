'use strict'

const element = document.getElementById("colorSelect");
element.addEventListener("change", () => {
    let colorSelect = document.getElementById("colorSelect").value;
    console.log(colorSelect);
    document.body.style.backgroundColor = colorSelect;
}, false);