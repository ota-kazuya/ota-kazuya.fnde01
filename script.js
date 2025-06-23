'use strict'

const avoidImageElement = document.getElementById("avoidImage");
const randomImageElement = document.getElementById("randomImage");
const documentElement = document.documentElement;
const clientWidth = documentElement.clientWidth;
const clientHeight = documentElement.clientHeight;

const battleAreacElement = document.getElementById("battleArea");

const startButtonElement = document.getElementById("startButton");
startButtonElement.addEventListener("click", start);

console.log(clientHeight);

function imageRandomMove() {

    const randomX = Math.floor(Math.random() * (clientWidth - randomImageElement.offsetWidth));
    const randomY = Math.floor(Math.random() * (clientHeight  - randomImageElement.offsetHeight));
    // console.log(randomX);
    randomImageElement.style.left = `${randomX}px`;
    randomImageElement.style.top = `${randomY}px`;
    console.log(randomImageElement.style.left);
    console.log(randomImageElement.style.top);
}

    // 一定間隔で画像を移動
function start() {
    setInterval(imageRandomMove, 2000); // 1000ミリ秒（1秒）ごと
}
