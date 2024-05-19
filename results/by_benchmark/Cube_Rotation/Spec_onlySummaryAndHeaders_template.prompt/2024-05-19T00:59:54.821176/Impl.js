// Function to rotate the cube to the left
function rotateLeft(cube) {
    // Assuming cube.rotation.y is accessible and represents the y-axis rotation
    cube.rotation.y -= 0.1; // Rotate left by reducing the y rotation value
}

// Function to rotate the cube to the right
function rotateRight(cube) {
    // Assuming cube.rotation.y is accessible and represents the y-axis rotation
    cube.rotation.y += 0.1; // Rotate right by increasing the y rotation value
}

// Predicate to detect if the left button is pressed
function pressL(event) {
    // Check if the 'ArrowLeft' or 'L' key is pressed
    return event.key === 'ArrowLeft' || event.key === 'L';
}

// Predicate to detect if the right button is pressed
function pressR(event) {
    // Check if the 'ArrowRight' or 'R' key is pressed
    return event.key === 'ArrowRight' || event.key === 'R';
}

// Example usage of pressL and pressR within an event listener
document.addEventListener('keydown', function(event) {
    if (pressL(event)) {
        console.log('Left button pressed');
        // Call rotateLeft function with the cube object
        rotateLeft(cube);
    } else if (pressR(event)) {
        console.log('Right button pressed');
        // Call rotateRight function with the cube object
        rotateRight(cube);
    }
});
