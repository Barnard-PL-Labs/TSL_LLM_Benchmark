function rotateLeft(cube) {
    // Assuming cube.rotation.y is a numeric angle in radians and
    // a left rotation decreases the angle
    cube.rotation.y -= Math.PI / 8;  // Rotate left by 22.5 degrees
}

function rotateRight(cube) {
    // Assuming cube.rotation.y is a numeric angle in radians and
    // a right rotation increases the angle
    cube.rotation.y += Math.PI / 8;  // Rotate right by 22.5 degrees
}
