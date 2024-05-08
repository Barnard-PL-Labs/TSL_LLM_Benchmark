// Function to rotate the cube to the left by decreasing the y rotation by a fixed amount (e.g., 0.1 radians)
function rotateLeft(cube) {
    cube.rotation.y -= 0.1;
    console.log("Rotated Left: New y rotation is", cube.rotation.y);
}

// Function to rotate the cube to the right by increasing the y rotation by a fixed amount (e.g., 0.1 radians)
function rotateRight(cube) {
    cube.rotation.y += 0.1;
    console.log("Rotated Right: New y rotation is", cube.rotation.y);
}
