// Assuming a global "cube" object with rotation properties
var cube = {
  rotation: {
    y: 0
  }
};

// Functions to rotate the cube
function rotateLeft(cube) {
  // Assuming that rotating left decreases the y rotation angle
  cube.rotation.y -= 10; // Rotate the cube left by 10 degrees
  console.log("Rotated left to:", cube.rotation.y);
}

function rotateRight(cube) {
  // Assuming that rotating right increases the y rotation angle
  cube.rotation.y += 10; // Rotate the cube right by 10 degrees
  console.log("Rotated right to:", cube.rotation.y);
}

// Predicates to detect button presses
function setupButtonListeners() {
  // Event listeners to detect button presses
  document.addEventListener('keydown', function(e) {
    if (pressL(e)) {
      console.log("Left button pressed");
      rotateLeft(cube);
    } else if (pressR(e)) {
      console.log("Right button pressed");
      rotateRight(cube);
    }
  });
}

function pressL(e) {
  // Check if the pressed key is the left arrow key
  return e.key === 'ArrowLeft';
}

function pressR(e) {
  // Check if the pressed key is the right arrow key
  return e.key === 'ArrowRight';
}

// Initialize the button listeners
setupButtonListeners();
