// Define the cube object with a rotation property
let cube = {
  rotation: {
    y: 0 // Initial y rotation of the cube
  }
};

// Function to rotate the cube to the left
function rotateLeft(cube) {
  cube.rotation.y -= 5;  // Decrease the rotation by 5 degrees
  console.log(`Cube rotated left to ${cube.rotation.y} degrees`);
}

// Function to rotate the cube to the right
function rotateRight(cube) {
  cube.rotation.y += 5;  // Increase the rotation by 5 degrees
  console.log(`Cube rotated right to ${cube.rotation.y} degrees`);
}

// Predicate to check if the left button is pressed
function pressL(e) {
  return e.key === 'ArrowLeft';  // Returns true if the left arrow key is pressed
}

// Predicate to check if the right button is pressed
function pressR(e) {
  return e.key === 'ArrowRight';  // Returns true if the right arrow key is pressed
}

// Event listeners for keyboard events
document.addEventListener('keydown', function(e) {
  if (pressL(e)) {
    rotateLeft(cube);  // Rotate left if the left button is pressed
  } else if (pressR(e)) {
    rotateRight(cube);  // Rotate right if the right button is pressed
  }
});

// Example usage to show rotation without user input (for demonstration)
rotateLeft(cube);  // Manually rotate left
rotateRight(cube); // Manually rotate right
