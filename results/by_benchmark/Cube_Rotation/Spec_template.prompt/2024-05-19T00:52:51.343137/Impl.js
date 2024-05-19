function rotateLeft(cube) {
    // Assuming cube.rotation.y is in radians and π (Math.PI) is available
    cube.rotation.y -= Math.PI / 4;
}

function rotateRight(cube) {
    cube.rotation.y += Math.PI / 4;
}
