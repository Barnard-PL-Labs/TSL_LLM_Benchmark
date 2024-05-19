function rotateLeft(cube) {
    // Assuming the rotation angle is in radians and a left rotation decreases the y angle
    cube.rotation.y -= Math.PI / 18; // Rotate left by 10 degrees
}

function rotateRight(cube) {
    // Assuming the rotation angle is in radians and a right rotation increases the y angle
    cube.rotation.y += Math.PI / 18; // Rotate right by 10 degrees
}
