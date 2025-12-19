// Woofy tracker animation
const dog = document.querySelector('.tracker .dog');
let progress = 0;

function moveDog() {
  progress += 0.05; // Slow speed
  if (progress > 100) progress = 0;
  dog.style.left = progress + '%';
  requestAnimationFrame(moveDog);
}

moveDog();
