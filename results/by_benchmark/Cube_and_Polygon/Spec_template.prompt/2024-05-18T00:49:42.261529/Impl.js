// System API interaction object, assuming an object named 'cube' exists in your environment
const cube = {
  scale: {
    x: 1
  }
};

// Functions
function sin(x) {
  return Math.sin(x);
}

function saw(x) {
  // Implementation of a sawtooth wave function
  const period = 2 * Math.PI; // period, you can adjust this if needed
  return 2 * (x / period - Math.floor(0.5 + x / period));
}

// Predicates using event listeners
let leftPressed = false;
let rightPressed = false;

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') {
    leftPressed = true;
  } else if (e.key === 'ArrowRight') {
    rightPressed = true;
  }
});

document.addEventListener('keyup', function(e) {
  if (e.key === 'ArrowLeft') {
    leftPressed = false;
  } else if (e.key === 'ArrowRight') {
    rightPressed = false;
  }
});

function pressL(e) {
  return leftPressed;
}

function pressR(e) {
  return rightPressed;
}
