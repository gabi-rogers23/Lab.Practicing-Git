let score = 0;

let holes = document.getElementsByClassName('hole');


setInterval(
    function (){
        const randomHoleIndex = Math.floor(Math.random() * holes.length);
    holes[randomHoleIndex].classList.toggle("mole");
}, 
1000);

const gameArea = document.getElementById('whack-a-mole');

gameArea.addEventListener('click', function(clickEvent) {
  if (clickEvent.target.matches('.mole')) {
    // we hit a mole!
    score ++ 
    document.getElementById("score").innerText = score 
    clickEvent.target.classList.remove('mole');
  }
});