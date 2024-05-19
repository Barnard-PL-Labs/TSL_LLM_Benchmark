// Assuming "cube" is already defined somewhere in your environment and accessible
// as an object with a property 'rotation' that in turn has a property 'y' for the y-axis rotation.

// Functions to rotate the cube left and right
function rotateLeft(cube) {
  // Assuming the cube.rotation.y angle is in radians and we decrease it by a small fixed amount
  cube.rotation.y -= 0.1; // Modify this value as necessary for the desired rotation speed
  console.log('Rotated left: ', cube.rotation.y);
}

function rotateRight(cube) {
  // Assuming the cube.rotation.y angle is in radians and we increase it by a small fixed amount
  cube.rotation.y += 0.1; // Modify this value as necessary for the desired rotation speed
  console.log('Rotated right: ', cube.rotation.y);
}

// Predicates to detect button presses
// These predicates will set up event listeners to modify the cube's rotation

// Use a key event for simplicity. For a real application, adapt as needed (e.g., actual button elements)
document.addEventListener('keydown', function(e) {
  if (pressL(e)) {
    rotateLeft(cube);
  } else if (pressR(e)) {
    rotateRight(cube);
  }
});

// Predicate to check if the left key (key 'ArrowLeft') is pressed
function pressL(e) {
  return e.key === 'ArrowLeft';
}

// Predicate to check if the right key (key 'ArrowRight') is pressed
function pressR(e) {
  return e.key === 'ArrowRight';
}
