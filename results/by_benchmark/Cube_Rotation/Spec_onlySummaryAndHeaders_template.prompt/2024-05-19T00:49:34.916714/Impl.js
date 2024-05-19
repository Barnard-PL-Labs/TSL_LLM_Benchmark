/**
 * Rotate the cube to the left by decrementing the y rotation angle.
 * @param {object} cube - The cube object with a rotation property.
 */
function rotateLeft(cube) {
    cube.rotation.y -= Math.PI / 2; // Rotate 90 degrees to the left
}

/**
 * Rotate the cube to the right by incrementing the y rotation angle.
 * @param {object} cube - The cube object with a rotation property.
 */
function rotateRight(cube) {
    cube.rotation.y += Math.PI / 2; // Rotate 90 degrees to the right
}
