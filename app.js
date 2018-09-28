

let hurdle = document.querySelector('.hurdle')
let player1 = document.querySelector('.user')


// player1.addEventListener('click', function() {
//     player1.style.bottom = '250px';
//
// setTimeout(down, 1000);
//
// })

document.addEventListener('keydown', function jump(event){
  if(event.keyCode == 38) {
    player1.style.bottom = '250px';
    //if (player1Right == hurdleLeft ) {
    // alert('crash')
setTimeout(down, 800);
  }


})

function down () {
  player1.style.bottom = '5px'
}


function myFunction() {
    var x = document.getElementById("myAudio").autoplay;
    document.getElementById("demo").innerHTML = x;
}




// function collision() {
//     // if ((player1.left + player1.width) > hurdle.left &&
//     //     player1.left < (hurdle.left + hurdle.width) &&
//     //     (player1.top + player1.height) > player1.height &&
//     //     player1.top < (hurdle.top + Hurdle.height)) {
//     //       console.log('collision');
//     //     };
//     if (player1.right = hurdle.left) {
//         console.log('collision');
//       } else if (player1.bottom = hurdle.top) {
//         console.log('collision')
//       }
// }
// collision()
