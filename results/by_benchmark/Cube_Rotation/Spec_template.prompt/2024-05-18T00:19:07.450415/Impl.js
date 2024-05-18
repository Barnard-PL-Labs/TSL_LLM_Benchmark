function rotateLeft(cube) {
    // Assuming cube.rotation.y is a numeric value representing the rotation in degrees or radians
    // Let's assume each rotation changes the angle by 5 degrees (convert to radians if necessary)
    cube.rotation.y -= 5 * (Math.PI / 180); // Converting degrees to radians
}

function rotateRight(cube) {
    cube.rotation.y += 5 * (Math.PI / 180); // Converting degrees to radians
}
