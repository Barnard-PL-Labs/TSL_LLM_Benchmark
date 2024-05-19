// Assuming cube is a global object which has a property rotation with subproperty y
let cube = {
  rotation: {
    y: 0 // Initial rotation of the cube on the y-axis
  }
};

// Function to rotate the cube to the left
function rotateLeft() {
  // Increment the cube's y rotation to the left
  cube.rotation.y -= 10; // Decrease the angle, adjust the value as needed for desired rotation speed
  console.log(`Cube rotated to the left. Current y rotation: ${cube.rotation.y} degrees.`);
}

// Function to rotate the cube to the right
function rotateRight() {
  // Increment the cube's y rotation to the right
  cube.rotation.y += 10; // Increase the angle, adjust the value as needed for desired rotation speed
  console.log(`Cube rotated to the right. Current y rotation: ${cube.rotation.y} degrees.`);
}

// Predicate to detect left button press
function pressL(e) {
  return e.key === 'ArrowLeft'; // Assuming left arrow key is used for the left button
}

// Predicate to detect right button press
function pressR(e) {
  return e.key === 'ArrowRight'; // Assuming right arrow key is used for the right button
}

// Event listeners for key press events
document.addEventListener('keydown', function(e) {
  if (pressL(e)) {
    rotateLeft(); // Rotate cube left if left button (left arrow key) is pressed
  } else if (pressR(e)) {
    rotateRight(); // Rotate cube right if right button (right arrow key) is pressed
  }
});

