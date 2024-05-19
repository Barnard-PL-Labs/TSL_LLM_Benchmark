function rotateLeft(cube) {
    // Assuming cube.rotation.y is accessible and represents the y-axis rotation in radians
    cube.rotation.y -= Math.PI / 4; // Rotate left by 45 degrees
}

function rotateRight(cube) {
    // Assuming cube.rotation.y is accessible and represents the y-axis rotation in radians
    cube.rotation.y += Math.PI / 4; // Rotate right by 45 degrees
}
