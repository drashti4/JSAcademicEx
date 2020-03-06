function readForm() {
    document.getElementById("output").innerHTML = "";
    let lastName = document.getElementById("lastName").value;
    let firstName = document.getElementById("firstName").value;
    document.getElementById("output").innerHTML += "<p>" + lastName + "</p>";
    document.getElementById("output").innerHTML += "<p>" + firstName + "</p>";
}