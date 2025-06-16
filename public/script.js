function createHeart() {
  const heart = document.createElement('div');
  const shapeType = Math.random() < 0.1 ? 'envelope' : 'heart';
  heart.className = `animated-${shapeType}`;

  // Add the shape
  const shape = document.createElement('div');
  shape.className = `${shapeType}-shape`;
  if (shapeType === 'heart') {
    shape.style.transform = 'rotate(-45deg)';
  }
  heart.appendChild(shape);

  // Random size
  const size = 10 + Math.random() * 20;
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;
  if (shapeType === 'heart') {
    shape.style.transform = 'rotate(45deg)';
  }

  // Random horizontal position (centered)
  const x = Math.random() * window.innerWidth;
  heart.style.left = `calc(${x}px - ${size / 2}px)`;

  // Random speed
  const duration = 3 + Math.random() * 3;
  heart.style.animationDuration = `${duration}s`;

  // Add to container
  document.getElementById('heart-container').appendChild(heart);

  // Remove after animation ends
  setTimeout(() => heart.remove(), duration * 1000);
}

setInterval(createHeart, 300);

const possibleShapes = ['heart', 'envelope'];
const isEnvelope = Math.random() < 0.1;  // ~10% envelopes

function createConfetti() {
  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.backgroundColor = getRandomColor();

    // Start anywhere horizontally across the screen
    const startX = Math.random() * window.innerWidth;
    confetti.style.left = `${startX}px`;

    // Start at top
    confetti.style.top = `0px`;

    // Random horizontal shift while falling (optional)
    const x = (Math.random() - 0.5) * 100 + 'px'; // small sway left/right

    // Random vertical fall distance (e.g. 300-600px)
    const y = (300 + Math.random() * 300) + 'px';

    // Random rotation
    const r = (Math.random() * 360) + 'deg';

    confetti.style.setProperty('--x', x);
    confetti.style.setProperty('--y', y);
    confetti.style.setProperty('--r', r);

    document.querySelector('.confetti-container').appendChild(confetti);

    setTimeout(() => confetti.remove(), 1000); // adjust to match animation duration
  }


  confetti.style.backgroundColor = getRandomColor();

  const startX = window.innerWidth / 2;
  confetti.style.left = `${startX}px`;

  const x = (Math.random() - 0.5) * 200 + 'px';
  const y = (Math.random() * 300 + 100) + 'px';
  const r = (Math.random() * 360) + 'deg';

  confetti.style.setProperty('--x', x);
  confetti.style.setProperty('--y', y);
  confetti.style.setProperty('--r', r);

  document.querySelector('.confetti-container').appendChild(confetti);

  setTimeout(() => confetti.remove(), 800);
}

const envelope = document.querySelector('.envelope-wrapper');
let confettiInterval;

if (envelope) {
  envelope.addEventListener('mouseenter', () => {
    confettiInterval = setInterval(() => createConfettiBatch(5), 100);

  });
  function createConfettiBatch(count = 5) {
    for (let i = 0; i < count; i++) {
      createConfetti();
    }
  }

  envelope.addEventListener('mouseleave', () => {
    clearInterval(confettiInterval);
  });
}

function getRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

document.addEventListener('DOMContentLoaded', () => {
  const cuteMessages = [
    "You make my heart flutter! 💖",
    "Sending you all the love today! 🌈",
    "You're pawsome! 🐾",
    "Stay cozy and keep smiling! 😊",
    "You light up the world! ✨",
    "Hugs and kisses coming your way! 😘",
    "You’re simply the best! 💕",
    "Keep shining bright! 🌟",
    "You’re my favorite notification! 📬",
    "Smile, it’s a beautiful day! ☀️",
    "I love you! ^_^",
    "You make me smile! :3",
    "You're the best! >.<",
  ];

  const msgElem = document.getElementById('cute-message');

  // Show a random message immediately
  const randomIndex = Math.floor(Math.random() * cuteMessages.length);
  msgElem.textContent = cuteMessages[randomIndex];
  msgElem.style.opacity = 1;

  // After 3 seconds, add the "hidden" class to start fade out
  setTimeout(() => {
    msgElem.classList.add('hidden'); // opacity goes from 1 to 0 smoothly

    // After fade out duration (1s), hide completely to remove from layout
    setTimeout(() => {
      msgElem.style.display = 'none';
    }, 1); // match this to CSS transition duration
  }, 3000);
});
