'use strict'

function createItem(param) {
    return "<li>" + param + "</li>"
}

function createList(param) {
    let array = "<ul>";
    for (let i = 0; i < param.length; i++) {
        array += createItem(param[i])
    }
    array += "</ul>"
    return array
}