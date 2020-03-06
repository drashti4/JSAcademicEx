'use strict'

let items;

window.addEventListener('DOMContentLoaded', (event) => {

    let container = document.getElementById("listContainer");
    let output = document.getElementById("output");
    let element = [];

    for (let i = 0; i < 10; i++) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode("Product Number : " + i));
        li.className = 'item';
        container.appendChild(li);
    }

    items = document.getElementsByClassName('item');

    for (let i = 0; i < items.length; i++) {
        //console.log("HI " + i);
        items[i].addEventListener("click", function (e) {
            output.innerHTML = "Product number: " + i + " ID = product_no_" + i;
        });
    }
});

/**
 *  container.addEventListener("click", function (e) {
        console.log(e.target.nodeName);
    });
 */