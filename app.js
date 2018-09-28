
let hurdle = document.querySelector('.hurdle')
let player1 = document.querySelector('.user')
let hurdleOne = document.querySelector('#one')

// let hurdleOneRight = document.querySelector('#one')
// console.log(window.getComputedStyle(hurdleOneRight, null).getPropertyValue("right"));

// let hurdleOneTop = document.querySelector('#one')
// console.log(window.getComputedStyle(hurdleOneTop, null).getPropertyValue("height"));
//
// let player1Bottom = document.querySelector('#one')
// console.log(window.getComputedStyle(Player1Bottom, null).getPropertyValue("bottom"));
//
// let player1Right = document.querySelector('#one')
// console.log(window.getComputedStyle(playerOneRight, null).getPropertyValue("right"));


document.addEventListener('keydown', function jump(event){
  if(event.keyCode == 38) {
    player1.style.bottom = '250px';
setTimeout(down, 800);
}
})
function down () {
  player1.style.bottom = '0px'
}


function myFunction() {
    var x = document.getElementById("myAudio").autoplay;
    document.getElementById("demo").innerHTML = x;
}



function isCollapsed(player1, hurdle){
let playerRight = window.getComputedStyle(player1, null).getPropertyValue("right");
let playerTop = window.getComputedStyle(player1, null).getPropertyValue("top");
let playerBottom = window.getComputedStyle(player1, null).getPropertyValue("bottom");

let playerLeft = window.getComputedStyle(player1, null).getPropertyValue("left");

let playerHeight = window.getComputedStyle(player1, null).getPropertyValue("height");

let playerWidth = window.getComputedStyle(player1, null).getPropertyValue("width");

let hurdleTop = window.getComputedStyle(hurdle, null).getPropertyValue("top");

let hurdleLeft = window.getComputedStyle(hurdle, null).getPropertyValue("left");

let hurdleHeight = window.getComputedStyle(hurdle, null).getPropertyValue("height");

let hurdleWidth = window.getComputedStyle(hurdle, null).getPropertyValue("width");

let hurdleBottom = window.getComputedStyle(hurdle, null).getPropertyValue("bottom");
let hurdleRight = window.getComputedStyle(hurdle, null).getPropertyValue("right");

playerTop = parseInt(playerBottom.split('px')[0])
playerBottom = parseInt(playerBottom.split('px')[0])
playerLeft = parseInt(playerLeft.split('px')[0])
playerHeight = parseInt(playerHeight.split('px')[0])
playerWidth = parseInt(playerWidth.split('px')[0])
playerRight = parseInt(playerRight.split('px')[0])

hurdleTop = parseInt(hurdleTop.split('px')[0])
hurdleLeft = parseInt(hurdleLeft.split('px')[0])
hurdleHeight = parseInt(hurdleHeight.split('px')[0])
hurdleWidth = parseInt(hurdleWidth.split('px')[0])
hurdleBottom = parseInt(hurdleBottom.split('px')[0])
hurdleRight = parseInt(hurdleRight.split('px')[0])


if (hurdleTop <=playerTop + playerHeight && hurdleTop + hurdleHeight > playerTop &&
   hurdleLeft < playerLeft + playerWidth && hurdleLeft + hurdleWidth > playerLeft) {
 alert('hit')
// if (hurdleTop <= playerBottom + playerWidth &&
//    hurdleHeight > playerBottom &&
//    hurdleLeft <= playerLeft + playerWidth &&
//    hurdleLeft + hurdleWidth > playerLeft) {
//  alert('hit')

}
}

setInterval(function(){
isCollapsed(player1, hurdle)
}, 300)
