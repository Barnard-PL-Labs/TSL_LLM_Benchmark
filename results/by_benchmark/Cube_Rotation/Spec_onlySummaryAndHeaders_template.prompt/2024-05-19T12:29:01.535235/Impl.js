// Function to rotate the cube to the left
function rotateLeft(cube) {
    // Assuming negative rotation for left
    cube.rotation.y -= Math.PI / 4; // Rotates the cube by 45 degrees left
}

// Function to rotate the cube to the right
function rotateRight(cube) {
    // Assuming positive rotation for right
    cube.rotation.y += Math.PI / 4; // Rotates the cube by 45 degrees right
}
