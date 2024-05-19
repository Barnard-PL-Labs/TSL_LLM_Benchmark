function rotateLeft(cube) {
  // Assuming that a decrease in the y rotation represents a rotation to the left
  cube.rotation.y -= Math.PI / 4; // Rotate the cube left by 45 degrees
}

function rotateRight(cube) {
  // Assuming that an increase in the y rotation represents a rotation to the right
  cube.rotation.y += Math.PI / 4; // Rotate the cube right by 45 degrees
}
