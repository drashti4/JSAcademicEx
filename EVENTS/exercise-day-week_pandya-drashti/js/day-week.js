'use strict'

window.addEventListener('DOMContentLoaded', (event) => {

    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let jours = ['Lundi', 'Mardi', 'Mecredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    let lang = document.getElementById("language");
    let number = document.getElementById("dayNumber");

    let label = document.querySelector('label[for="dayNumber"]');
    let flag = false;

    lang.addEventListener('change', function () {
        if (this.checked) {
            flag = true;
        } else {
            flag = false;
        }
    });

    number.addEventListener('change', function () {
        let digit = number.value;
        console.log(digit);
        if (flag) {
            label.innerHTML = days[digit];
        } else {
            label.innerHTML = jours[digit];
        }
    });
});