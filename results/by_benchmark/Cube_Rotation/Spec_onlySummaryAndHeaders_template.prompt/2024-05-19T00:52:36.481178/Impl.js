/**
 * Rotates the cube to the left.
 * @param {object} cube - The cube object with a rotation property.
 */
function rotateLeft(cube) {
    // Assuming cube.rotation.y is in radians and a positive rotation is to the left.
    cube.rotation.y += Math.PI / 4; // Rotate by 45 degrees
}

/**
 * Rotates the cube to the right.
 * @param {object} cube - The cube object with a rotation property.
 */
function rotateRight(cube) {
    // Assuming cube.rotation.y is in radians and a negative rotation is to the right.
    cube.rotation.y -= Math.PI / 4; // Rotate by 45 degrees
}
