// Function to rotate the cube to the left
function rotateLeft(cube) {
    // Assuming a single rotation unit is subtracted to rotate left
    cube.rotation.y -= 0.1;  // Adjust rotation step as needed
}

// Function to rotate the cube to the right
function rotateRight(cube) {
    // Assuming a single rotation unit is added to rotate right
    cube.rotation.y += 0.1;  // Adjust rotation step as needed
}
