function rotateLeft(cube) {
    // Assuming cube.rotation.y to be in radians and rotating left means decreasing the angle.
    cube.rotation.y -= Math.PI / 18; // Rotate left by 10 degrees
    if (cube.rotation.y < 0) {
        cube.rotation.y += 2 * Math.PI; // Normalize the angle to keep it within 0 to 2π radians
    }
}

function rotateRight(cube) {
    // Rotating right means increasing the angle, assuming cube.rotation.y is in radians.
    cube.rotation.y += Math.PI / 18; // Rotate right by 10 degrees
    if (cube.rotation.y > 2 * Math.PI) {
        cube.rotation.y -= 2 * Math.PI; // Normalize the angle to keep it within 0 to 2π radians
    }
}
