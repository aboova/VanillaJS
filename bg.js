const body = document.querySelector("body");

const IMG_NUM = 7;

function paintImage(imgNum) {
    const image = new Image();
    console.log(imgNum);
    image.src = `C:/Users/wowjd/OneDrive/바탕 화면/Vanilla JS/Images/${imgNum + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUM);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();