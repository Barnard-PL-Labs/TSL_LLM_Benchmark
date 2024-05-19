function rotateLeft(cube) {
    // Decrease the y rotation value to rotate the cube to the left
    cube.rotation.y -= Math.PI / 4; // Rotate by 45 degrees for example
    console.log('Rotated Left: New rotation y = ' + cube.rotation.y);
}

function rotateRight(cube) {
    // Increase the y rotation value to rotate the cube to the right
    cube.rotation.y += Math.PI / 4; // Rotate by 45 degrees for example
    console.log('Rotated Right: New rotation y = ' + cube.rotation.y);
}
