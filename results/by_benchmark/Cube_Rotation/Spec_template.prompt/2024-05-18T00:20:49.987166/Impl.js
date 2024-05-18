function rotateLeft(cube) {
    // Decrements the y-axis rotation of the cube by a fixed amount (e.g., 0.1 radians)
    cube.rotation.y -= 0.1;
}

function rotateRight(cube) {
    // Increments the y-axis rotation of the cube by a fixed amount (e.g., 0.1 radians)
    cube.rotation.y += 0.1;
}
