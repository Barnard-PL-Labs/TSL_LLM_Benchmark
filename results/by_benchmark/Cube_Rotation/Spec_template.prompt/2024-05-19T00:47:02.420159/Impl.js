// Assuming the cube object is available in the environment
let cube = {
  rotation: {
    y: 0 // Initial y rotation of the cube
  }
};

// Functions to rotate the cube
function rotateLeft(cube) {
  // Rotate the cube to the left (assuming counter-clockwise rotation)
  cube.rotation.y -= Math.PI / 4; // Rotate by 45 degrees (in radians)
}

function rotateRight(cube) {
  // Rotate the cube to the right (assuming clockwise rotation)
  cube.rotation.y += Math.PI / 4; // Rotate by 45 degrees (in radians)
}

// Predicate functions to detect button presses
function pressL(e) {
  // Returns true if the left button ('L' key) is pressed
  return e.key === 'L' || e.key === 'l'; // Handle both lowercase and uppercase
}

function pressR(e) {
  // Returns true if the right button ('R' key) is pressed
  return e.key === 'R' || e.key === 'r'; // Handle both lowercase and uppercase
}

// Setting up event listeners for key presses to interact with the cube
document.addEventListener('keydown', function(e) {
  if (pressL(e)) {
    rotateLeft(cube);
    console.log('Rotated Left:', cube.rotation.y);
  } else if (pressR(e)) {
    rotateRight(cube);
    console.log('Rotated Right:', cube.rotation.y);
  }
});
