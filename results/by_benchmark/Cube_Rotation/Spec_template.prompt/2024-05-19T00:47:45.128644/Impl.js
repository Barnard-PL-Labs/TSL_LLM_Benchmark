// Assuming we have a global 'cube' object with a rotation property
var cube = {
  rotation: {
    y: 0
  }
};

/**
 * Function to rotate the cube to the left
 * @param {object} cube - The cube object to manipulate
 */
function rotateLeft(cube) {
  cube.rotation.y -= 0.1; // Decrease rotation; adjust the value as needed for smoothness
  console.log('Rotated Left: New Y rotation = ', cube.rotation.y);
}

/**
 * Function to rotate the cube to the right
 * @param {object} cube - The cube object to manipulate
 */
function rotateRight(cube) {
  cube.rotation.y += 0.1; // Increase rotation; adjust the value as needed for smoothness
  console.log('Rotated Right: New Y rotation = ', cube.rotation.y);
}

// Predicates for button presses, using event listeners on the document or specific elements.
// We're assuming 'e' is the event object from the event listeners.

/**
 * Predicate to determine if the left button is pressed
 * @param {Event} e - The event object from the event listener
 * @returns {boolean}
 */
function pressL(e) {
  return e.key === 'ArrowLeft'; // Adjust key detection as needed
}

/**
 * Predicate to determine if the right button is pressed
 * @param {Event} e - The event object from the event listener
 * @returns {boolean}
 */
function pressR(e) {
  return e.key === 'ArrowRight'; // Adjust key detection as needed
}

// Setting up event listeners for the keys
document.addEventListener('keydown', function(e) {
  if (pressL(e)) {
    rotateLeft(cube);
  } else if (pressR(e)) {
    rotateRight(cube);
  }
});
