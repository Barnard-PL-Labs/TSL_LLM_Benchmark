/**
 * Rotates the cube to the left by decreasing the y rotation value.
 * @param {object} cube - The cube object with a rotation property.
 */
function rotateLeft(cube) {
    cube.rotation.y -= Math.PI / 18;  // Rotate by 10 degrees
}

/**
 * Rotates the cube to the right by increasing the y rotation value.
 * @param {object} cube - The cube object with a rotation property.
 */
function rotateRight(cube) {
    cube.rotation.y += Math.PI / 18;  // Rotate by 10 degrees
}
