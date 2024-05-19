function rotateLeft(cube) {
    // Decrease the y rotation to rotate the cube to the left
    cube.rotation.y -= Math.PI / 4; // Adjust according to desired rotation step (example: 45 degrees)
}

function rotateRight(cube) {
    // Increase the y rotation to rotate the cube to the right
    cube.rotation.y += Math.PI / 4; // Adjust according to desired rotation step (example: 45 degrees)
}
