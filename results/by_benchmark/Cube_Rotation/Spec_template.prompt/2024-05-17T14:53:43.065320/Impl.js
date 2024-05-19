// Function to rotate the cube to the left
function rotateLeft(cube) {
    // Assuming that rotating left means decrementing the rotation on the y-axis
    cube.rotation.y -= Math.PI / 2;  // Rotate by 90 degrees
    console.log("Rotated Left: cube.rotation.y =", cube.rotation.y);
}

// Function to rotate the cube to the right
function rotateRight(cube) {
    // Assuming that rotating right means incrementing the rotation on the y-axis
    cube.rotation.y += Math.PI / 2;  // Rotate by 90 degrees
    console.log("Rotated Right: cube.rotation.y =", cube.rotation.y);
}
