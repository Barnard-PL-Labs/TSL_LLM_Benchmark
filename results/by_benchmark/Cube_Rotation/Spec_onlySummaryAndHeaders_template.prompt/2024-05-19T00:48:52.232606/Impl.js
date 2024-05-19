// Assuming "cube" is an object with a rotation property
let cube = {
  rotation: {
    y: 0
  }
};

/**
 * Function to rotate the cube to the left.
 * @param {Object} cube - The cube object with a rotation property.
 */
function rotateLeft(cube) {
  // Decrease the y rotation to rotate left
  cube.rotation.y -= 0.1;
  console.log(`Rotated left to: ${cube.rotation.y}`);
}

/**
 * Function to rotate the cube to the right.
 * @param {Object} cube - The cube object with a rotation property.
 */
function rotateRight(cube) {
  // Increase the y rotation to rotate right
  cube.rotation.y += 0.1;
  console.log(`Rotated right to: ${cube.rotation.y}`);
}

/**
 * Predicate to check if the left button is pressed.
 * Uses an event listener attached to the window or a specific element.
 * @returns {boolean} Returns true if left button is pressed.
 */
function pressL() {
  let leftPressed = false;
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      leftPressed = true;
    }
  });
  document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft') {
      leftPressed = false;
    }
  });
  return () => leftPressed;
}

/**
 * Predicate to check if the right button is pressed.
 * Uses an event listener attached to the window or a specific element.
 * @returns {boolean} Returns true if right button is pressed.
 */
function pressR() {
  let rightPressed = false;
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      rightPressed = true;
    }
  });
  document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowRight') {
      rightPressed = false;
    }
  });
  return () => rightPressed;
}

// Example usage
setInterval(() => {
  if (pressL()()) {
    rotateLeft(cube);
  }
  if (pressR()()) {
    rotateRight(cube);
  }
}, 100);

