'use strict'

window.addEventListener('DOMContentLoaded', (event) => {

    let play = document.getElementById('playButton');
    let stop = document.getElementById('stopButton');
    let image = document.getElementById('frameImage');
    let number = document.getElementById("frameRange");
    let flag = false;

    let i = number.min;

    function running() {

        if (flag != true) {
            if (i < 10) {
                image.src = "file:///C:/isi/JavaScript/Excercises/EVENTS/exercise-frame-player_pandya-drashti/image/img000" + i + "-min.jpg";
            } else {
                image.src = "file:///C:/isi/JavaScript/Excercises/EVENTS/exercise-frame-player_pandya-drashti/image/img00" + i + "-min.jpg";
            }
            i++;
            if (i > 36)
                i = 1;
            number.value = i;
            setTimeout(running, 50)
        }
    }

    play.addEventListener("click", () => {
        setTimeout(running, 50)
        flag = false;
    }, false);

    stop.addEventListener("click", () => {
        flag = true;
    }, false);

});

// play.addEventListener("click", async () => {

//     for (let i = number.min; i < number.max; i++) {
//         image.src = "file:///C:/isi/JavaScript/Excercises/EVENTS/exercise-frame-player_pandya-drashti/image/img000" + i + "-min.jpg";
//         await sleep(50);
//     }
// }, false);

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }


/*  async () => {
     await sleep(200);
   }  function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }*/