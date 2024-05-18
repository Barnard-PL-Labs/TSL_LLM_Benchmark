// Function to rotate the cube to the left
function rotateLeft(cube) {
    // Assuming that rotating left decreases the y rotation angle
    cube.rotation.y -= Math.PI / 18; // Rotate by 10 degrees
}

// Function to rotate the cube to the right
function rotateRight(cube) {
    // Assuming that rotating right increases the y rotation angle
    cube.rotation.y += Math.PI / 18; // Rotate by 10 degrees
}
