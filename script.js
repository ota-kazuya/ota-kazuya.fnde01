'use strict'

const avoidImageElement = document.getElementById("avoidImage"); //子供画像
const avoidImgWidth = avoidImageElement.offsetWidth; //子供幅
const avoidImgHeight = avoidImageElement.offsetHeight; //子供高さ

const randomImageElement = document.getElementById("randomImage"); //おばさん画像
const randomImgWidth = randomImageElement.offsetWidth; //おばちゃん幅
const randomImgHeight = randomImageElement.offsetHeight; //おばちゃん高さ

const documentElement = document.documentElement;
const clientWidth = documentElement.clientWidth; //ぶらうざの幅
const clientHeight = documentElement.clientHeight; //ブラウザの高さ

const div1Element = document.getElementById("div1");
const div1Height = div1Element.clientHeight;

const startButtonElement = document.getElementById("startButton");
startButtonElement.addEventListener("click", start);
//ランダムでおばちゃんスライド
function imageRandomMove() {
    const randomX = Math.floor(Math.random() * (clientWidth - randomImgWidth * 2));
    const randomY = Math.floor(Math.random() * (clientHeight - div1Height - randomImgHeight * 2));
    
    randomImageElement.animate(
        {transform: `translate(${randomX}px, ${randomY}px)`},
        {fill: "forwards", duration: 2000,}, //移動後そのまま//2秒かけて移動
    );
}

// 一定間隔でおばちゃんスライド関数を実行
function start() {
    setInterval(imageRandomMove, 2000); //2秒間隔で実行
}


//矢印キー子供がスライド
let avoidImgX = 0; 
let avoidImgY = 0; 
const step = 100; //移動量

document.addEventListener('keydown', (event) => {
    switch (event.key) {       
        case 'ArrowLeft':
        avoidImgX = Math.max(avoidImgX - step, 0); 
        break;
        case 'ArrowRight':
        avoidImgX = Math.min(avoidImgX + step, (clientWidth - avoidImgWidth * 3.1)); 
        break;
        case 'ArrowUp':
        avoidImgY = Math.max(avoidImgY - step, 0); 
        break;
        case 'ArrowDown':
        avoidImgY = Math.min(avoidImgY + step, (clientHeight - div1Height - avoidImgHeight * 1.6)); 
        break;
    }
    avoidImageElement.animate(
        {transform: `translate(${avoidImgX}px, ${avoidImgY}px)`},
        {fill: "forwards", duration: 100,},
    );
});
