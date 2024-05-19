function rotateLeft(cube) {
    // Assuming cube.rotation.y is a numeric value representing the rotation in degrees or radians
    // This function will increase the rotation to the left
    cube.rotation.y -= 5; // rotate left by 5 units; adjust as necessary
}

function rotateRight(cube) {
    // This function will increase the rotation to the right
    cube.rotation.y += 5; // rotate right by 5 units; adjust as necessary
}
