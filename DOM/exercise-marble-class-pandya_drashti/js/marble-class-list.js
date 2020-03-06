let marbles = document.getElementsByClassName("marble");

console.log(marbles);

marbles[0].classList.add("orange", "rounded");
marbles[1].classList.add("purple");
marbles[2].classList.add("rounded", "size_x");
marbles[3].classList.add("size_x", "purple");
marbles[4].classList.add("size_xx", "orange", "rounded");