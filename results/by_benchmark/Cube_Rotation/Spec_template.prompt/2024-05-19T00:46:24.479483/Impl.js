// Function to rotate the cube to the left
function rotateLeft(cube) {
    // Rotating left can be achieved by decrementing the rotation on the y-axis
    cube.rotation.y -= 0.1; // Rotate by 0.1 radians to the left
}

// Function to rotate the cube to the right
function rotateRight(cube) {
    // Rotating right can be achieved by incrementing the rotation on the y-axis
    cube.rotation.y += 0.1; // Rotate by 0.1 radians to the right
}
