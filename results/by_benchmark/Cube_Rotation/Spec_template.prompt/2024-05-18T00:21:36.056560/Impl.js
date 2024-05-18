// Function to rotate the cube left by modifying `cube.rotation.y`
function rotateLeft(cube) {
    cube.rotation.y += Math.PI / 4; // Rotate by 45 degrees left
}

// Function to rotate the cube right by modifying `cube.rotation.y`
function rotateRight(cube) {
    cube.rotation.y -= Math.PI / 4; // Rotate by 45 degrees right
}
