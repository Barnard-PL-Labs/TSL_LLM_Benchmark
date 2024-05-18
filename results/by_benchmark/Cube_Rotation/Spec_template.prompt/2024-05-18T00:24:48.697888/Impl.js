function rotateLeft(cube) {
    // Assuming the cube's rotation in radians and decrement to rotate left
    cube.rotation.y -= Math.PI / 18;  // Rotate left by 10 degrees
}

function rotateRight(cube) {
    // Assuming the cube's rotation in radians and increment to rotate right
    cube.rotation.y += Math.PI / 18;  // Rotate right by 10 degrees
}
