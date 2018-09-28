
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

  let playerLeft = window.getComputedStyle(player1, null).getPropertyValue("left");
  console.log('person' + playerLeft)

  let hurdleLeft = window.getComputedStyle(hurdle, null).getPropertyValue("left");
console.log('hurdle' + hurdleLeft)



playerLeft = parseInt(playerLeft.split('px')[0])
hurdleLeft = parseInt(hurdleLeft.split('px')[0])

if (hurdleLeft <= playerLeft + 60){
  alert('you lose')
}
 // if (object_1.left < object_2.left + object_2.width  && object_1.left + object_1.width  > object_2.left &&
 //   object_1.top < object_2.top + object_2.height && object_1.top + object_1.height > object_2.top) {
 //   alert("collide");
 // }

 // else{
 //   rect.classList.remove("collide");
 // }
}
setInterval(function(){
  isCollapsed(player1, hurdle)
}, 300)


// let sI = setInterval( () => {
//       console.log('inside setInterval')
//
//       right = parseInt(right.split('px')[0])
//       if(right > 783) {
//       console.log('this is right: ', right)
//        document.removeEventListener('keydown', jump)
//         document.player1.style.animationPlayState = 'paused';
//        clearInterval(sI)
//      }
//     },50)

// alert('crash')
