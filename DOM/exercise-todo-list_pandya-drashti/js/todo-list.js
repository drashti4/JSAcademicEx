function addNewLiElement() {
    let input = document.getElementById("textBox").value;
    console.log(input);
    document.getElementById("list").innerHTML += "<li>" + input + "</li>";
}

function deleteLastLiElement() {
    document.getElementById("list").removeChild(document.getElementById("list").lastChild);
}