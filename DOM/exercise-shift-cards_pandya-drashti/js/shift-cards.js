function shiftLeft() {
    let cardList = document.getElementById("cards");
    let all_img = cardList.getElementsByTagName('img');
    let temp;

    for (let i = 0; i < cardList.childElementCount; i++) {
        temp = all_img[0].src;
        all_img[0].src = all_img[cardList.childElementCount - 1].src;
        all_img[cardList.childElementCount - 1].src = all_img[0].src;
        all_img[i].src = all_img[i + 1].src;
        console.log(i);
    }
}

function shiftRight() {
    /*console.log(document.getElementById("cards")[0].src);
    console.log(cardList.childElementCount);
    console.log(cardList.childNodes[2].src);
     let index = str.substring(
            str.lastIndexOf("a") + 1,
            str.lastIndexOf("."));
        index++;*/
}