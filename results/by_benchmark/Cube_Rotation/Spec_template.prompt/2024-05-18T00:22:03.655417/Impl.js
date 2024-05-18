function rotateLeft(cube) {
  // Decrements the cube's rotation on the Y-axis by a defined angle, e.g., 0.1 radians
  cube.rotation.y -= 0.1;
}

function rotateRight(cube) {
  // Increments the cube's rotation on the Y-axis by a defined angle, e.g., 0.1 radians
  cube.rotation.y += 0.1;
}
