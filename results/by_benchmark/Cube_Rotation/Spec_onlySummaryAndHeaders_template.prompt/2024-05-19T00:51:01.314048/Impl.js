// Assuming the cube variable is already defined and correctly set up in your 3D environment
// This could be a THREE.js object if using Three.js or similar for a WebGL context

// Functions to rotate the cube
function rotateLeft(cube) {
    // Rotate the cube to the left by decreasing the y-axis rotation
    cube.rotation.y -= 0.1; // Adjust rotation step as needed
}

function rotateRight(cube) {
    // Rotate the cube to the right by increasing the y-axis rotation
    cube.rotation.y += 0.1; // Adjust rotation step as needed
}

// Predicates to determine if left or right buttons are pressed
// These will need to be tied to event listeners in the environment where this script runs

function pressL(e) {
    // Check if the left button (assuming 'ArrowLeft' key) is pressed
    return e.key === 'ArrowLeft';
}

function pressR(e) {
    // Check if the right button (assuming 'ArrowRight' key) is pressed
    return e.key === 'ArrowRight';
}

// Add event listeners to the document to listen for keypress events
document.addEventListener('keydown', function(e) {
    if (pressL(e)) {
        rotateLeft(cube);
    } else if (pressR(e)) {
        rotateRight(cube);
    }
});
