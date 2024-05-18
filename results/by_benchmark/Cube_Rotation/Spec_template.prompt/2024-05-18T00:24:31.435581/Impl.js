// Assuming "cube" is an object with a property "rotation" which itself is an object with property "y" for the rotation about the y-axis

// Function to rotate the cube to the left
function rotateLeft(cube) {
  // Rotating left means decreasing the y rotation value
  cube.rotation.y -= Math.PI / 4;  // Rotate by 45 degrees as an example
}

// Function to rotate the cube to the right
function rotateRight(cube) {
  // Rotating right means increasing the y rotation value
  cube.rotation.y += Math.PI / 4;  // Rotate by 45 degrees as an example
}

// Predicate and event listener for the left button press
function pressL(e) {
  return e.key === "ArrowLeft";  // Assumes pressing left arrow is the trigger
}

// Predicate and event listener for the right button press
function pressR(e) {
  return e.key === "ArrowRight";  // Assumes pressing right arrow is the trigger
}

// Adding event listeners for button presses
document.addEventListener('keydown', function(e) {
  if (pressL(e)) {
    console.log("Left button pressed!");
    // Call rotateLeft function when left button is pressed
    rotateLeft(cube);
  } else if (pressR(e)) {
    console.log("Right button pressed!");
    // Call rotateRight function when right button is pressed
    rotateRight(cube);
  }
});

// Example cube object
let cube = {
  rotation: {
    y: 0  // Initial rotation about the y-axis
  }
};
