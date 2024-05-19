// Assuming 'cube' is an object that has a 'rotation' property which, in turn, has a 'y' property.

// Functions
function rotateLeft(cube) {
    // Increment the rotation on the y-axis to rotate left
    cube.rotation.y -= Math.PI / 4; // Adjust the angle as per requirement
    console.log('Rotated Left: ', cube.rotation.y);
}

function rotateRight(cube) {
    // Decrement the rotation on the y-axis to rotate right
    cube.rotation.y += Math.PI / 4; // Adjust the angle as per requirement
    console.log('Rotated Right: ', cube.rotation.y);
}

// Predicates
function pressL(e) {
    return e.key === 'ArrowLeft'; // Returns true if left arrow key is pressed
}

function pressR(e) {
    return e.key === 'ArrowRight'; // Returns true if right arrow key is pressed
}

// Setting up event listeners to detect key presses and rotate the cube accordingly
document.addEventListener('keydown', function(e) {
    if (pressL(e)) {
        rotateLeft(cube);
    } else if (pressR(e)) {
        rotateRight(cube);
    }
});
