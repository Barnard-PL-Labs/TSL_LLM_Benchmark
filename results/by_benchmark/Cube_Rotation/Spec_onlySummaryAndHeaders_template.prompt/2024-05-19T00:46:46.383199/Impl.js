// Cell to represent the cube's state
let cube = {
  rotation: {
    y: 0
  }
};

// Function to rotate the cube to the left
function rotateLeft(cube) {
  cube.rotation.y -= 10; // Decrease y rotation value to rotate left
  console.log(`Rotated Left: New rotation.y = ${cube.rotation.y}`);
}

// Function to rotate the cube to the right
function rotateRight(cube) {
  cube.rotation.y += 10; // Increase y rotation value to rotate right
  console.log(`Rotated Right: New rotation.y = ${cube.rotation.y}`);
}

// Predicate to check if the left button is pressed
function pressL(e) {
  return e.key === 'ArrowLeft'; // Return true if the left arrow key is pressed
}

// Predicate to check if the right button is pressed
function pressR(e) {
  return e.key === 'ArrowRight'; // Return true if the right arrow key is pressed
}

// Event listener for key presses
document.addEventListener('keydown', function(e) {
  if (pressL(e)) {
    rotateLeft(cube); // Rotate the cube left if the left key is pressed
  } else if (pressR(e)) {
    rotateRight(cube); // Rotate the cube right if the right key is pressed
  }
});
