// Assuming cube is an object with a rotation property which itself is an object with a y property.
let cube = {
  rotation: {
    y: 0 // Initial rotation of the cube on the y-axis
  }
};

// Functions to rotate the cube
function rotateLeft(cube) {
  // Rotates the cube to the left by decreasing the y rotation
  cube.rotation.y -= 10;
  console.log(`Cube rotated to the left. New rotation: ${cube.rotation.y} degrees.`);
}

function rotateRight(cube) {
  // Rotates the cube to the right by increasing the y rotation
  cube.rotation.y += 10;
  console.log(`Cube rotated to the right. New rotation: ${cube.rotation.y} degrees.`);
}

// Predicates for button presses using event listeners
function setupButtonListeners() {
  document.addEventListener('keydown', function(e) {
    if (pressL(e)) {
      rotateLeft(cube);
    } else if (pressR(e)) {
      rotateRight(cube);
    }
  });
}

function pressL(e) {
  // Returns true if the left arrow key is pressed
  return e.key === 'ArrowLeft';
}

function pressR(e) {
  // Returns true if the right arrow key is pressed
  return e.key === 'ArrowRight';
}

// Initialize button listeners
setupButtonListeners();
