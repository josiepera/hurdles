

let hurdle = document.querySelector('.hurdle')
let player1 = document.querySelector('.user')

// let player, hurdle, hurdleH, hurdleW, hurdleX, hurdleY, playerH, playerW, playerX, playerY;


player1.addEventListener('click', function() {
    player1.style.bottom = '250px';

setTimeout(down, 1000);

})

function down () {
  player1.style.bottom = '5px'
}

//use the DOM to create more hurdles, a finite amount


function hurdles(){
let newDiv = document.createElement('div');
let newHurdle = newDiv.classList.add('hurdle');

document.querySelector('.game-box').appendChild(newDiv);

return newDiv;

}


setTimeout(hurdles, 2000);

for(i = 0; i < 5; i++) {
  hurdles();

}

function collision() {

    // let playerW = player.offsetWidth;
    // let playerH = player.offsetHeight;
    // let playerX = player.offsetLeft;
    // let playerY = player.offsetTop;
    // let hurdleW = hurdle.offsetWidth;
    // let hurdleH = hurdle.offsetHeight;
    // let hurdleX = hurdle.offsetLeft;
    // let hurdleY = hurdle.offsetTop;
    //
    // if ((player1.left + player1.width) > hurdle.left &&
    //     player1.left < (hurdle.left + hurdle.width) &&
    //     (player1.top + player1.height) > player1.height &&
    //     player1.top < (hurdle.top + Hurdle.height)) {
    //       console.log('collision');
    //     };
    if (player1.right = hurdle.left) {
        console.log('collision');
      } else if (player1.bottom = hurdle.top) {
        console.log('collision')
      }
}
collision()


// if (player.left < hurdle.left + hurdle.width  && player.left + player.width  > hurdle.left &&
// 		player.top < hurdle.top + hurdle.height && player.top + player.height > hurdle.top) {
//     console.log('collision');
//   }
