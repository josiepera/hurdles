let hurdle = document.querySelector('.hurdle')
let player1 = document.querySelector('.user')
let two = document.querySelector('#two')
let three = document.querySelector('#three')
let four = document.querySelector('#four')
let five = document.querySelector('#five')
let six = document.querySelector('#six')
let seven = document.querySelector('#seven')
let eight = document.querySelector('#eight')
let nine = document.querySelector('#nine')
let ten = document.querySelector('#ten')
let winner = document.querySelector('#winner')

function startGame() {
   hurdle.classList.toggle("main");
   two.classList.toggle("main");
   three.classList.toggle("main");
   four.classList.toggle("main");
   five.classList.toggle("main");
   six.classList.toggle("main");
   seven.classList.toggle("main");
   eight.classList.toggle("main");
   nine.classList.toggle("main");
   ten.classList.toggle("main");
   winner.classList.toggle("main");
}
// function startGame(){
//   // hurdles.style.animation = "move 5s linear";
//   let two = document.querySelector('#two').style.animation = "move 5s linear"
//   let three = document.querySelector('#three').style.animation = "move 5s linear"
//   let four = document.querySelector('#four').style.animation = "move 5s linear"
//   let five = document.querySelector('#five').style.animation = "move 5s linear"
//   let six = document.querySelector('#ix').style.animation = "move 5s linear"
//   let seven = document.querySelector('#seven').style.animation = "move 5s linear"
//   let eight = document.querySelector('#eight').style.animation = "move 5s linear"
//   let nine = document.querySelector('#nine').style.animation = "move 5s linear"
//   let ten = document.querySelector('#ten').style.animation = "move 5s linear"
//
// }



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

let playerBottom = window.getComputedStyle(player1, null).getPropertyValue("bottom");
let playerLeft = window.getComputedStyle(player1, null).getPropertyValue("left");
let playerHeight = window.getComputedStyle(player1, null).getPropertyValue("height");
let playerWidth = window.getComputedStyle(player1, null).getPropertyValue("width");

let hurdleLeft = window.getComputedStyle(hurdle, null).getPropertyValue("left");
let hurdleHeight = window.getComputedStyle(hurdle, null).getPropertyValue("height");
let hurdleWidth = window.getComputedStyle(hurdle, null).getPropertyValue("width");
let hurdleBottom = window.getComputedStyle(hurdle, null).getPropertyValue("bottom");



playerBottom = parseInt(playerBottom.split('px')[0])
playerLeft = parseInt(playerLeft.split('px')[0])
playerWidth = parseInt(playerWidth.split('px')[0])

hurdleLeft = parseInt(hurdleLeft.split('px')[0])
hurdleHeight = parseInt(hurdleHeight.split('px')[0])
hurdleWidth = parseInt(hurdleWidth.split('px')[0])

if (hurdleLeft <= (playerLeft + 40) &&
      playerBottom < hurdleHeight) {
    alert('hit')
}
}



setInterval(function(){
isCollapsed(player1, hurdle)
}, 300)


function twoCollision(player1, two){

let playerBottom = window.getComputedStyle(player1, null).getPropertyValue("bottom");
let playerLeft = window.getComputedStyle(player1, null).getPropertyValue("left");
let playerHeight = window.getComputedStyle(player1, null).getPropertyValue("height");
let playerWidth = window.getComputedStyle(player1, null).getPropertyValue("width");

let hurdleLeft = window.getComputedStyle(two, null).getPropertyValue("left");
let hurdleHeight = window.getComputedStyle(two, null).getPropertyValue("height");
let hurdleWidth = window.getComputedStyle(two, null).getPropertyValue("width");
let hurdleBottom = window.getComputedStyle(two, null).getPropertyValue("bottom");

playerBottom = parseInt(playerBottom.split('px')[0])
playerLeft = parseInt(playerLeft.split('px')[0])
playerWidth = parseInt(playerWidth.split('px')[0])

hurdleLeft = parseInt(hurdleLeft.split('px')[0])
hurdleHeight = parseInt(hurdleHeight.split('px')[0])
hurdleWidth = parseInt(hurdleWidth.split('px')[0])

if (hurdleLeft <= (playerLeft + 40) &&
      playerBottom <= hurdleHeight) {
    alert('hit')
}
}

setInterval(function(){
twoCollision(player1, two)
}, 300)

function threeCollision(player1, three){
let playerBottom = window.getComputedStyle(player1, null).getPropertyValue("bottom");
let playerLeft = window.getComputedStyle(player1, null).getPropertyValue("left");
let playerHeight = window.getComputedStyle(player1, null).getPropertyValue("height");
let playerWidth = window.getComputedStyle(player1, null).getPropertyValue("width");

let hurdleLeft = window.getComputedStyle(three, null).getPropertyValue("left");
let hurdleHeight = window.getComputedStyle(three, null).getPropertyValue("height");
let hurdleWidth = window.getComputedStyle(three, null).getPropertyValue("width");

playerBottom = parseInt(playerBottom.split('px')[0])
playerLeft = parseInt(playerLeft.split('px')[0])
playerWidth = parseInt(playerWidth.split('px')[0])

hurdleLeft = parseInt(hurdleLeft.split('px')[0])
hurdleHeight = parseInt(hurdleHeight.split('px')[0])
hurdleWidth = parseInt(hurdleWidth.split('px')[0])

if (hurdleLeft <= (playerLeft + 40) &&
      playerBottom < hurdleHeight) {
    alert('hit')
}
}

setInterval(function(){
threeCollision(player1, three)
}, 300)

function fourCollision(player1, four){
let playerBottom = window.getComputedStyle(player1, null).getPropertyValue("bottom");
let playerLeft = window.getComputedStyle(player1, null).getPropertyValue("left");
let playerHeight = window.getComputedStyle(player1, null).getPropertyValue("height");
let playerWidth = window.getComputedStyle(player1, null).getPropertyValue("width");

let hurdleLeft = window.getComputedStyle(four, null).getPropertyValue("left");
let hurdleHeight = window.getComputedStyle(four, null).getPropertyValue("height");
let hurdleWidth = window.getComputedStyle(four, null).getPropertyValue("width");

playerBottom = parseInt(playerBottom.split('px')[0])
playerLeft = parseInt(playerLeft.split('px')[0])
playerWidth = parseInt(playerWidth.split('px')[0])

hurdleLeft = parseInt(hurdleLeft.split('px')[0])
hurdleHeight = parseInt(hurdleHeight.split('px')[0])
hurdleWidth = parseInt(hurdleWidth.split('px')[0])

if (hurdleLeft <= (playerLeft + 40) &&
      playerBottom < hurdleHeight) {
    alert('hit')
}
}

setInterval(function(){
fourCollision(player1, four)
}, 300)


function fiveCollision(player1, five){
let playerBottom = window.getComputedStyle(player1, null).getPropertyValue("bottom");
let playerLeft = window.getComputedStyle(player1, null).getPropertyValue("left");
let playerHeight = window.getComputedStyle(player1, null).getPropertyValue("height");
let playerWidth = window.getComputedStyle(player1, null).getPropertyValue("width");

let hurdleLeft = window.getComputedStyle(five, null).getPropertyValue("left");
let hurdleHeight = window.getComputedStyle(five, null).getPropertyValue("height");
let hurdleWidth = window.getComputedStyle(five, null).getPropertyValue("width");

playerBottom = parseInt(playerBottom.split('px')[0])
playerLeft = parseInt(playerLeft.split('px')[0])
playerWidth = parseInt(playerWidth.split('px')[0])

hurdleLeft = parseInt(hurdleLeft.split('px')[0])
hurdleHeight = parseInt(hurdleHeight.split('px')[0])
hurdleWidth = parseInt(hurdleWidth.split('px')[0])

if (hurdleLeft <= (playerLeft + 40) &&
      playerBottom < hurdleHeight) {
    alert('hit')
}
}

setInterval(function(){
fiveCollision(player1, five)
}, 300)

function sixCollision(player1, six){
let playerBottom = window.getComputedStyle(player1, null).getPropertyValue("bottom");
let playerLeft = window.getComputedStyle(player1, null).getPropertyValue("left");
let playerHeight = window.getComputedStyle(player1, null).getPropertyValue("height");
let playerWidth = window.getComputedStyle(player1, null).getPropertyValue("width");

let hurdleLeft = window.getComputedStyle(six, null).getPropertyValue("left");
let hurdleHeight = window.getComputedStyle(six, null).getPropertyValue("height");
let hurdleWidth = window.getComputedStyle(six, null).getPropertyValue("width");

playerBottom = parseInt(playerBottom.split('px')[0])
playerLeft = parseInt(playerLeft.split('px')[0])
playerWidth = parseInt(playerWidth.split('px')[0])

hurdleLeft = parseInt(hurdleLeft.split('px')[0])
hurdleHeight = parseInt(hurdleHeight.split('px')[0])
hurdleWidth = parseInt(hurdleWidth.split('px')[0])

if (hurdleLeft <= (playerLeft + 40) &&
      playerBottom < hurdleHeight) {
    alert('hit')
}
}

setInterval(function(){
sixCollision(player1, six)
}, 300)

function sevenCollision(player1, seven){
let playerBottom = window.getComputedStyle(player1, null).getPropertyValue("bottom");
let playerLeft = window.getComputedStyle(player1, null).getPropertyValue("left");
let playerHeight = window.getComputedStyle(player1, null).getPropertyValue("height");
let playerWidth = window.getComputedStyle(player1, null).getPropertyValue("width");

let hurdleLeft = window.getComputedStyle(seven, null).getPropertyValue("left");
let hurdleHeight = window.getComputedStyle(seven, null).getPropertyValue("height");
let hurdleWidth = window.getComputedStyle(seven, null).getPropertyValue("width");

playerBottom = parseInt(playerBottom.split('px')[0])
playerLeft = parseInt(playerLeft.split('px')[0])
playerWidth = parseInt(playerWidth.split('px')[0])

hurdleLeft = parseInt(hurdleLeft.split('px')[0])
hurdleHeight = parseInt(hurdleHeight.split('px')[0])
hurdleWidth = parseInt(hurdleWidth.split('px')[0])

if (hurdleLeft <= (playerLeft + 40) &&
      playerBottom < hurdleHeight) {
    alert('hit')
}
}

setInterval(function(){
sevenCollision(player1, seven)
}, 300)


function eightCollision(player1, eight){
let playerBottom = window.getComputedStyle(player1, null).getPropertyValue("bottom");
let playerLeft = window.getComputedStyle(player1, null).getPropertyValue("left");
let playerHeight = window.getComputedStyle(player1, null).getPropertyValue("height");
let playerWidth = window.getComputedStyle(player1, null).getPropertyValue("width");

let hurdleLeft = window.getComputedStyle(eight, null).getPropertyValue("left");
let hurdleHeight = window.getComputedStyle(eight, null).getPropertyValue("height");
let hurdleWidth = window.getComputedStyle(eight, null).getPropertyValue("width");

playerBottom = parseInt(playerBottom.split('px')[0])
playerLeft = parseInt(playerLeft.split('px')[0])
playerWidth = parseInt(playerWidth.split('px')[0])

hurdleLeft = parseInt(hurdleLeft.split('px')[0])
hurdleHeight = parseInt(hurdleHeight.split('px')[0])
hurdleWidth = parseInt(hurdleWidth.split('px')[0])

if (hurdleLeft <= (playerLeft + 40) &&
      playerBottom < hurdleHeight) {
    alert('hit')
}
}

setInterval(function(){
eightCollision(player1, eight)
}, 300)

function nineCollision(player1, nine){
let playerBottom = window.getComputedStyle(player1, null).getPropertyValue("bottom");
let playerLeft = window.getComputedStyle(player1, null).getPropertyValue("left");
let playerHeight = window.getComputedStyle(player1, null).getPropertyValue("height");
let playerWidth = window.getComputedStyle(player1, null).getPropertyValue("width");

let hurdleLeft = window.getComputedStyle(nine, null).getPropertyValue("left");
let hurdleHeight = window.getComputedStyle(nine, null).getPropertyValue("height");
let hurdleWidth = window.getComputedStyle(nine, null).getPropertyValue("width");

playerBottom = parseInt(playerBottom.split('px')[0])
playerLeft = parseInt(playerLeft.split('px')[0])
playerWidth = parseInt(playerWidth.split('px')[0])

hurdleLeft = parseInt(hurdleLeft.split('px')[0])
hurdleHeight = parseInt(hurdleHeight.split('px')[0])
hurdleWidth = parseInt(hurdleWidth.split('px')[0])

if (hurdleLeft <= (playerLeft + 40) &&
      playerBottom < hurdleHeight) {
    alert('hit')
}
}

setInterval(function(){
nineCollision(player1, nine)
}, 300)


function tenCollision(player1, ten){
let playerBottom = window.getComputedStyle(player1, null).getPropertyValue("bottom");
let playerLeft = window.getComputedStyle(player1, null).getPropertyValue("left");
let playerHeight = window.getComputedStyle(player1, null).getPropertyValue("height");
let playerWidth = window.getComputedStyle(player1, null).getPropertyValue("width");

let hurdleLeft = window.getComputedStyle(ten, null).getPropertyValue("left");
let hurdleHeight = window.getComputedStyle(ten, null).getPropertyValue("height");
let hurdleWidth = window.getComputedStyle(ten, null).getPropertyValue("width");

playerBottom = parseInt(playerBottom.split('px')[0])
playerLeft = parseInt(playerLeft.split('px')[0])
playerWidth = parseInt(playerWidth.split('px')[0])

hurdleLeft = parseInt(hurdleLeft.split('px')[0])
hurdleHeight = parseInt(hurdleHeight.split('px')[0])
hurdleWidth = parseInt(hurdleWidth.split('px')[0])

if (hurdleLeft <= (playerLeft + 40) &&
      playerBottom < hurdleHeight) {
    alert('hit')
}
}

setInterval(function(){
tenCollision(player1, ten)
}, 300)

function won(player1, winner){
let playerBottom = window.getComputedStyle(player1, null).getPropertyValue("bottom");
let playerLeft = window.getComputedStyle(player1, null).getPropertyValue("left");
let playerHeight = window.getComputedStyle(player1, null).getPropertyValue("height");
let playerWidth = window.getComputedStyle(player1, null).getPropertyValue("width");

let hurdleLeft = window.getComputedStyle(winner, null).getPropertyValue("left");
let hurdleHeight = window.getComputedStyle(winner, null).getPropertyValue("height");
let hurdleWidth = window.getComputedStyle(winner, null).getPropertyValue("width");

playerBottom = parseInt(playerBottom.split('px')[0])
playerLeft = parseInt(playerLeft.split('px')[0])
playerWidth = parseInt(playerWidth.split('px')[0])

hurdleLeft = parseInt(hurdleLeft.split('px')[0])
hurdleHeight = parseInt(hurdleHeight.split('px')[0])
hurdleWidth = parseInt(hurdleWidth.split('px')[0])

if (hurdleLeft <= (playerLeft + 40) &&
      playerBottom < hurdleHeight) {
    alert('You Win!!!!!!')
}
}

setInterval(function(){
won(player1, winner)
}, 300)
