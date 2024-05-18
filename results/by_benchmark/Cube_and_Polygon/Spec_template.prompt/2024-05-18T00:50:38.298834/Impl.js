// System API mockup (assuming a simple object structure for demonstration)
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
  const period = 2 * Math.PI; // Define the period of the sawtooth wave
  return 2 * (x / period - Math.floor(x / period + 0.5)); // Calculate sawtooth wave
}

// Predicates
function pressL(e) {
  return e.key === 'ArrowLeft';
}

function pressR(e) {
  return e.key === 'ArrowRight';
}

// Event listeners for detecting left and right key presses
document.addEventListener('keydown', function(e) {
  if (pressL(e)) {
    console.log('Left button pressed');
    // Example: Set cube's scale.x based on sawtooth wave of some variable t
    cube.scale.x = saw(Date.now() / 1000); // Update using a sawtooth wave based on time
    console.log('Updated cube.scale.x to:', cube.scale.x);
  } else if (pressR(e)) {
    console.log('Right button pressed');
    // Example: Set cube's scale.x based on sine wave of some variable t
    cube.scale.x = sin(Date.now() / 1000); // Update using a sine wave based on time
    console.log('Updated cube.scale.x to:', cube.scale.x);
  }
});

// Logging current cube.scale.x for debugging
setInterval(() => {
  console.log('Current cube.scale.x:', cube.scale.x);
}, 2000);
