function rotateLeft(cube) {
    // Decrease the rotation on the y-axis to rotate left
    cube.rotation.y -= Math.PI / 8; // Adjust rotation angle as desired
}

function rotateRight(cube) {
    // Increase the rotation on the y-axis to rotate right
    cube.rotation.y += Math.PI / 8; // Adjust rotation angle as desired
}
