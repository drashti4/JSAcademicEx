function createWithInnerHTML() {
    let elementType = document.getElementById("elementType").value;
    let elementContent = document.getElementById("elementContent").value;
    document.getElementById("output").innerHTML += "<" + elementType + ">" + elementContent + "</" + elementType + ">";
    let newType = "<" + elementType + ">" + elementContent + "</" + elementType + ">";
    newType.classList.add("inner-html");

}

function createWithCreateElement() {
    let elementType = document.getElementById("elementType").value;
    let elementContent = document.getElementById("elementContent").value;
    let newType = document.createElement(elementType);
    let newContent = document.createTextNode(elementContent + "\n");
    newType.appendChild(newContent);
    newType.classList.add("inner-html");
    document.body.appendChild(newType);
}