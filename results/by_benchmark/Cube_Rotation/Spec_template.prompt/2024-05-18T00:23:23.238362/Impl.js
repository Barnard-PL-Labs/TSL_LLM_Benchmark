// Assume that the "cube" object has already been defined elsewhere in your environment
// and has a property like `cube.rotation.y` which controls the rotation around the y-axis.

// Functions to rotate the cube
function rotateLeft(cube) {
    // Increment the cube's y-axis rotation to rotate it to the left
    cube.rotation.y -= Math.PI / 4;  // Rotate left by 45 degrees
}

function rotateRight(cube) {
    // Increment the cube's y-axis rotation to rotate it to the right
    cube.rotation.y += Math.PI / 4;  // Rotate right by 45 degrees
}

// Predicates to check if the left or right button is pressed
// These will be implemented with event listeners that update flags when buttons are pressed

// Flags to track button presses
let leftPressed = false;
let rightPressed = false;

// Function to handle keyboard events
function handleKeyPress(e) {
    if (e.key === "ArrowLeft") {
        leftPressed = true;
    } else if (e.key === "ArrowRight") {
        rightPressed = true;
    }
}

function handleKeyRelease(e) {
    if (e.key === "ArrowLeft") {
        leftPressed = false;
    } else if (e.key === "ArrowRight") {
        rightPressed = false;
    }
}

// Adding event listeners for key press and release
document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keyup', handleKeyRelease);

// Predicate functions
function pressL() {
    return leftPressed;  // Returns true if the left arrow key is pressed
}

function pressR() {
    return rightPressed; // Returns true if the right arrow key is pressed
}
