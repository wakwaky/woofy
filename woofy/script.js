// Slow dog tracker animation
const dog = document.querySelector('.tracker .dog');
let progress = 0;
let speed = 0.05; // slowest speed

function animateDog() {
  progress += speed;
  if(progress > 100) progress = 0;
  dog.style.left = progress + '%';
  requestAnimationFrame(animateDog);
}
animateDog();

// Tracking simulation
function trackPackage() {
  const number = document.getElementById('tracking-number').value.trim();
  const status = document.getElementById('tracking-status');
  if(!number) {
    status.innerText = "Please enter a tracking number.";
    return;
  }

  // Random simulated tracking progress
  const steps = [
    "Woofy is waking up…",
    "Woofy is sniffing your package…",
    "Woofy is slowly walking…",
    "Woofy stopped for a snack…",
    "Woofy is almost there…",
    "Package delivered… eventually!"
  ];

  let i = 0;
  status.innerText = steps[i];
  const interval = setInterval(() => {
    i++;
    if(i < steps.length) {
      status.innerText = steps[i];
    } else {
      clearInterval(interval);
    }
  }, 2000);
}
