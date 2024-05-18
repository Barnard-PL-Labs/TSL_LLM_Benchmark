// System API Simulation (to be replaced with actual API calls)
const cube = {
  scale: {
    x: 1.0,
  }
};

// Functions:
/**
 * Returns the sine of x.
 * @param {number} x - The angle in radians.
 * @return {number} The sine of x.
 */
function sin(x) {
  return Math.sin(x);
}

/**
 * Returns the sawtooth wave of x.
 * @param {number} x - The input value.
 * @return {number} The sawtooth wave output.
 */
function saw(x) {
  return 2 * (x - Math.floor(x + 0.5));
}

// Predicates:
/**
 * Predicate to check if the left button is pressed.
 * @return {Promise<boolean>} A promise that resolves to true when left button is pressed.
 */
function pressL() {
  return new Promise((resolve) => {
    document.addEventListener('keydown', function handler(e) {
      if (e.key === 'ArrowLeft') {
        document.removeEventListener('keydown', handler);
        resolve(true);
      }
    });
  });
}

/**
 * Predicate to check if the right button is pressed.
 * @return {Promise<boolean>} A promise that resolves to true when right button is pressed.
 */
function pressR() {
  return new Promise((resolve) => {
    document.addEventListener('keydown', function handler(e) {
      if (e.key === 'ArrowRight') {
        document.removeEventListener('keydown', handler);
        resolve(true);
      }
    });
  });
}

// Example Usage:
// Setting cube scale.x using sine function
cube.scale.x = sin(Math.PI / 4);  // Set cube's scale.x based on sine of PI/4
console.log("Cube's scale.x set to sine of PI/4:", cube.scale.x);

// Listening for button presses
pressL().then(() => {
  console.log("Left button was pressed.");
  // Perform actions based on left button press
});

pressR().then(() => {
  console.log("Right button was pressed.");
  // Perform actions based on right button press
});
