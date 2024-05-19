// Assuming that `cube` is an object with a property `rotation` which is another object containing a property `y`.
// This cube object might come from a 3D library like Three.js where cube.rotation.y corresponds to the rotation around the y-axis.

// Functions
function rotateLeft(cube) {
    // Rotates the cube to the left by decrementing the y rotation value
    cube.rotation.y -= Math.PI / 4; // Rotate left by 45 degrees
}

function rotateRight(cube) {
    // Rotates the cube to the right by incrementing the y rotation value
    cube.rotation.y += Math.PI / 4; // Rotate right by 45 degrees
}

// Predicates
function pressL(e) {
    // Returns true if the left arrow key is pressed
    return e.keyCode === 37; // 37 is the key code for the left arrow key
}

function pressR(e) {
    // Returns true if the right arrow key is pressed
    return e.keyCode === 39; // 39 is the key code for the right arrow key
}

// To use these predicates in event listeners:
document.addEventListener('keydown', function(e) {
    if (pressL(e)) {
        console.log('Left button pressed');
        rotateLeft(cube); // Assuming `cube` is defined and accessible in this scope
    }
    if (pressR(e)) {
        console.log('Right button pressed');
        rotateRight(cube); // Assuming `cube` is defined and accessible in this scope
    }
});
