'use strict'

let dragged;

window.addEventListener('DOMContentLoaded', (event) => {

    const dropArea = document.getElementById("dropArea");

    document.addEventListener("dragstart", function (event) {
        console.debug("DRAGSTART");
        event.dataTransfer.setData('text/plain', null)
        dragged = event.target;

    }, false);

    document.addEventListener("dragover", function (event) {
        console.debug("drag over");
        // prevent default to allow drop
        event.preventDefault();
    }, false);


    document.addEventListener("drop", function (event) {
        // prevent default action (open as link for some elements)
        event.preventDefault();
        console.debug(event.target);
        console.debug("dragged " + dragged);
        // move dragged elem to the selected drop target
        if (event.target.id == "dropArea") {
            console.debug("dropif");
            dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
        }
    }, false);

});

/**
 * 
 * /*document.addEventListener("drag", function (event) {
        console.debug("DRAG");
    }, false);*/


/* document.addEventListener("dragend", function (event) {
     console.debug("dragend");
     // reset the transparency
     event.target.style.opacity = "";
 }, false);
 
/* document.addEventListener("dragenter", function (event) {
     console.debug("drag center");
     // highlight potential drop target when the draggable element enters it
     if (event.target.id == "dropArea") {
         event.target.style.background = "purple";
     }

 }, false);*/

/*document.addEventListener("dragleave", function (event) {
    console.debug("dragleave");
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.id == "dropArea") {
        event.target.style.background = "";
    }

}, false);*/