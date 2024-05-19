// Assuming `cube` is an object which can be manipulated directly
function rotateLeft(cube) {
    cube.rotation.y -= 0.1;  // Rotate left by 0.1 radians
    console.log('Rotated Left: ', cube.rotation.y);
}

function rotateRight(cube) {
    cube.rotation.y += 0.1;  // Rotate right by 0.1 radians
    console.log('Rotated Right: ', cube.rotation.y);
}
