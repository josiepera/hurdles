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
   document.querySelector('p').style.visibility = 'hidden';
   document.querySelector('h1').style.visibility = 'hidden';
   document.querySelector('img').style.maxHeight = "110%";
   document.querySelector('img').style.width = "150px";
   document.querySelector('button').textContent = 'Restart';
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

document.addEventListener('keydown', function jump(event){
    if(event.keyCode == 38) {
      player1.style.bottom = '340px';
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
  let hurdleLeft = window.getComputedStyle(hurdle, null).getPropertyValue("left");
  let hurdleHeight = window.getComputedStyle(hurdle, null).getPropertyValue("height");


  playerBottom = parseInt(playerBottom.split('px')[0])
  playerLeft = parseInt(playerLeft.split('px')[0])
  hurdleLeft = parseInt(hurdleLeft.split('px')[0])
  hurdleHeight = parseInt(hurdleHeight.split('px')[0])


  if (hurdleLeft <= (playerLeft + 40) &&
        playerBottom < hurdleHeight) {
          alert('You Lose, Back to Start Page', startGame())
}
}


setInterval(function(){
isCollapsed(player1, hurdle)
}, 300)


function twoCollision(player1, two){

  let playerBottom = window.getComputedStyle(player1, null).getPropertyValue("bottom");
  let playerLeft = window.getComputedStyle(player1, null).getPropertyValue("left");
  let hurdleLeft = window.getComputedStyle(two, null).getPropertyValue("left");
  let hurdleHeight = window.getComputedStyle(two, null).getPropertyValue("height");


  playerBottom = parseInt(playerBottom.split('px')[0])
  playerLeft = parseInt(playerLeft.split('px')[0])
  hurdleLeft = parseInt(hurdleLeft.split('px')[0])
  hurdleHeight = parseInt(hurdleHeight.split('px')[0])


  if (hurdleLeft <= (playerLeft + 40) &&
      playerBottom <= hurdleHeight) {
    alert('You Lose, Back to Start Page', startGame())
}
}

  setInterval(function(){
    twoCollision(player1, two)
}, 300)

function threeCollision(player1, three){
  let playerBottom = window.getComputedStyle(player1, null).getPropertyValue("bottom");
  let playerLeft = window.getComputedStyle(player1, null).getPropertyValue("left");
  let hurdleLeft = window.getComputedStyle(three, null).getPropertyValue("left");
  let hurdleHeight = window.getComputedStyle(three, null).getPropertyValue("height");

  playerBottom = parseInt(playerBottom.split('px')[0])
  playerLeft = parseInt(playerLeft.split('px')[0])
  hurdleLeft = parseInt(hurdleLeft.split('px')[0])
  hurdleHeight = parseInt(hurdleHeight.split('px')[0])

  if (hurdleLeft <= (playerLeft + 40) &&
      playerBottom < hurdleHeight) {
    alert('You Lose, Back to Start Page', startGame())
}
}

setInterval(function(){
threeCollision(player1, three)
}, 300)

function fourCollision(player1, four){
  let playerBottom = window.getComputedStyle(player1, null).getPropertyValue("bottom");
  let playerLeft = window.getComputedStyle(player1, null).getPropertyValue("left");
  let hurdleLeft = window.getComputedStyle(four, null).getPropertyValue("left");
  let hurdleHeight = window.getComputedStyle(four, null).getPropertyValue("height");
  let hurdleWidth = window.getComputedStyle(four, null).getPropertyValue("width");

  playerBottom = parseInt(playerBottom.split('px')[0])
  playerLeft = parseInt(playerLeft.split('px')[0])
  hurdleLeft = parseInt(hurdleLeft.split('px')[0])
  hurdleHeight = parseInt(hurdleHeight.split('px')[0])


  if (hurdleLeft <= (playerLeft + 40) &&
      playerBottom < hurdleHeight) {
    alert('You Lose, Back to Start Page', startGame())
}
}

setInterval(function(){
fourCollision(player1, four)
}, 300)


function fiveCollision(player1, five){
  let playerBottom = window.getComputedStyle(player1, null).getPropertyValue("bottom");
  let playerLeft = window.getComputedStyle(player1, null).getPropertyValue("left");
  let hurdleLeft = window.getComputedStyle(five, null).getPropertyValue("left");
  let hurdleHeight = window.getComputedStyle(five, null).getPropertyValue("height");

  playerBottom = parseInt(playerBottom.split('px')[0])
  playerLeft = parseInt(playerLeft.split('px')[0])
  hurdleLeft = parseInt(hurdleLeft.split('px')[0])
  hurdleHeight = parseInt(hurdleHeight.split('px')[0])


  if (hurdleLeft <= (playerLeft + 40) &&
      playerBottom < hurdleHeight) {
    alert('You Lose, Back to Start Page', startGame())
}
}

setInterval(function(){
fiveCollision(player1, five)
}, 300)

function sixCollision(player1, six){
  let playerBottom = window.getComputedStyle(player1, null).getPropertyValue("bottom");
  let playerLeft = window.getComputedStyle(player1, null).getPropertyValue("left");
  let hurdleLeft = window.getComputedStyle(six, null).getPropertyValue("left");
  let hurdleHeight = window.getComputedStyle(six, null).getPropertyValue("height");

  playerBottom = parseInt(playerBottom.split('px')[0])
  playerLeft = parseInt(playerLeft.split('px')[0])
  hurdleLeft = parseInt(hurdleLeft.split('px')[0])
  hurdleHeight = parseInt(hurdleHeight.split('px')[0])


  if (hurdleLeft <= (playerLeft + 40) &&
      playerBottom < hurdleHeight) {
    alert('You Lose, Back to Start Page', startGame())
}
}

setInterval(function(){
sixCollision(player1, six)
}, 300)

function sevenCollision(player1, seven){
  let playerBottom = window.getComputedStyle(player1, null).getPropertyValue("bottom");
  let playerLeft = window.getComputedStyle(player1, null).getPropertyValue("left");
  let hurdleLeft = window.getComputedStyle(seven, null).getPropertyValue("left");
  let hurdleHeight = window.getComputedStyle(seven, null).getPropertyValue("height");

  playerBottom = parseInt(playerBottom.split('px')[0])
  playerLeft = parseInt(playerLeft.split('px')[0])
  hurdleLeft = parseInt(hurdleLeft.split('px')[0])
  hurdleHeight = parseInt(hurdleHeight.split('px')[0])


  if (hurdleLeft <= (playerLeft + 40) &&
      playerBottom < hurdleHeight) {
    alert('You Lose, Back to Start Page', startGame())
}
}

setInterval(function(){
sevenCollision(player1, seven)
}, 300)


function eightCollision(player1, eight){
  let playerBottom = window.getComputedStyle(player1, null).getPropertyValue("bottom");
  let playerLeft = window.getComputedStyle(player1, null).getPropertyValue("left");
  let hurdleLeft = window.getComputedStyle(eight, null).getPropertyValue("left");
  let hurdleHeight = window.getComputedStyle(eight, null).getPropertyValue("height");

  playerBottom = parseInt(playerBottom.split('px')[0])
  playerLeft = parseInt(playerLeft.split('px')[0])
  hurdleLeft = parseInt(hurdleLeft.split('px')[0])
  hurdleHeight = parseInt(hurdleHeight.split('px')[0])


  if (hurdleLeft <= (playerLeft + 40) &&
      playerBottom < hurdleHeight) {
    alert('You Lose, Back to Start Page', startGame())
}
}

setInterval(function(){
eightCollision(player1, eight)
}, 300)

function nineCollision(player1, nine){
  let playerBottom = window.getComputedStyle(player1, null).getPropertyValue("bottom");
  let playerLeft = window.getComputedStyle(player1, null).getPropertyValue("left");
  let hurdleLeft = window.getComputedStyle(nine, null).getPropertyValue("left");
  let hurdleHeight = window.getComputedStyle(nine, null).getPropertyValue("height");

  playerBottom = parseInt(playerBottom.split('px')[0])
  playerLeft = parseInt(playerLeft.split('px')[0])
  hurdleLeft = parseInt(hurdleLeft.split('px')[0])
  hurdleHeight = parseInt(hurdleHeight.split('px')[0])


  if (hurdleLeft <= (playerLeft + 40) &&
      playerBottom < hurdleHeight) {
    alert('You Lose, Back to Start Page', startGame())
}
}

setInterval(function(){
nineCollision(player1, nine)
}, 300)


function tenCollision(player1, ten){
  let playerBottom = window.getComputedStyle(player1, null).getPropertyValue("bottom");
  let playerLeft = window.getComputedStyle(player1, null).getPropertyValue("left");
  let hurdleLeft = window.getComputedStyle(ten, null).getPropertyValue("left");
  let hurdleHeight = window.getComputedStyle(ten, null).getPropertyValue("height");

  playerBottom = parseInt(playerBottom.split('px')[0])
  playerLeft = parseInt(playerLeft.split('px')[0])
  hurdleLeft = parseInt(hurdleLeft.split('px')[0])
  hurdleHeight = parseInt(hurdleHeight.split('px')[0])

  if (hurdleLeft <= (playerLeft + 40) &&
      playerBottom < hurdleHeight) {
    alert('You Lose, Back to Start Page', startGame())
}
}

setInterval(function(){
tenCollision(player1, ten)
}, 300)

function won(player1, winner){
  let playerBottom = window.getComputedStyle(player1, null).getPropertyValue("bottom");
  let playerLeft = window.getComputedStyle(player1, null).getPropertyValue("left");
  let hurdleLeft = window.getComputedStyle(winner, null).getPropertyValue("left");
  let hurdleHeight = window.getComputedStyle(winner, null).getPropertyValue("height");

  playerBottom = parseInt(playerBottom.split('px')[0])
  playerLeft = parseInt(playerLeft.split('px')[0])
  hurdleLeft = parseInt(hurdleLeft.split('px')[0])
  hurdleHeight = parseInt(hurdleHeight.split('px')[0])

  if (hurdleLeft <= (playerLeft + 40) &&
      playerBottom < hurdleHeight) {
    alert('YOU WIN')
}
}

setInterval(function(){
won(player1, winner)
}, 300)
