// Assume this function is part of the system API for getting and setting cube rotation
function getCubeRotation() {
    return cube.rotation.y;
}

function setCubeRotation(newRotationY) {
    cube.rotation.y = newRotationY;
}

// Functions for rotating the cube left and right
function rotateLeft(cube) {
    const currentRotation = getCubeRotation();
    setCubeRotation(currentRotation - 0.1); // Rotate left by a small angle
}

function rotateRight(cube) {
    const currentRotation = getCubeRotation();
    setCubeRotation(currentRotation + 0.1); // Rotate right by a small angle
}

// Predicates to detect button presses
function pressL(e) {
    // Assuming 'e' is the event object from an event listener
    return e.key === 'ArrowLeft'; // True if the left arrow key is pressed
}

function pressR(e) {
    // Assuming 'e' is the event object from an event listener
    return e.key === 'ArrowRight'; // True if the right arrow key is pressed
}

// Setting up event listeners for key presses
document.addEventListener('keydown', function(e) {
    if (pressL(e)) {
        rotateLeft(cube); // Rotate cube left if left arrow key is pressed
    } else if (pressR(e)) {
        rotateRight(cube); // Rotate cube right if right arrow key is pressed
    }
});

