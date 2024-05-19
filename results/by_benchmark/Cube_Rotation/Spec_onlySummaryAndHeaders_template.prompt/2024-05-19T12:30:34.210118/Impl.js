// Assuming cube is an object accessible within this scope with a property rotation that is also an object having a y property
const cube = {
  rotation: {
    y: 0
  }
};

// Functions to rotate the cube
function rotateLeft(cube) {
  cube.rotation.y -= 0.1; // Decrease the y rotation to rotate left
  console.log(`Rotated Left: New y rotation = ${cube.rotation.y}`);
}

function rotateRight(cube) {
  cube.rotation.y += 0.1; // Increase the y rotation to rotate right
  console.log(`Rotated Right: New y rotation = ${cube.rotation.y}`);
}

// Predicates for button presses, simulated using event listeners on the document
// Assume 'e' is an event object with a property 'key' indicating which key was pressed

function pressL(e) {
  return e.key === 'ArrowLeft'; // Returns true when the left arrow key is pressed
}

function pressR(e) {
  return e.key === 'ArrowRight'; // Returns true when the right arrow key is pressed
}

// Adding event listeners to the document to handle key presses
document.addEventListener('keydown', function(e) {
  if (pressL(e)) {
    rotateLeft(cube); // Rotate cube left if left arrow key is pressed
  } else if (pressR(e)) {
    rotateRight(cube); // Rotate cube right if right arrow key is pressed
  }
});
