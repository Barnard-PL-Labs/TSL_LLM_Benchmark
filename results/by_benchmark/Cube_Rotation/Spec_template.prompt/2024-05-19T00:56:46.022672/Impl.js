function rotateLeft(cube) {
    // Assuming that rotating to the left decreases the y rotation angle
    cube.rotation.y -= Math.PI / 18; // Rotate by 10 degrees
}

function rotateRight(cube) {
    // Assuming that rotating to the right increases the y rotation angle
    cube.rotation.y += Math.PI / 18; // Rotate by 10 degrees
}
