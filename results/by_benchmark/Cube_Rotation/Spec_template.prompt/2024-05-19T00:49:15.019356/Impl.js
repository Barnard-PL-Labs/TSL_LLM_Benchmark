// Assuming "cube" is an object that has a property "rotation" with sub-property "y"

// Functions
function rotateLeft(cube) {
    cube.rotation.y -= 0.1; // Arbitrary rotation step, adjust as needed
}

function rotateRight(cube) {
    cube.rotation.y += 0.1; // Arbitrary rotation step, adjust as needed
}

// Predicates
// Setup event listener logic to detect left and right button presses
// Using simple keydown events for demonstration
let leftPressed = false;
let rightPressed = false;

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') { // Assuming the left arrow key for left button press
        leftPressed = true;
    }
    if (e.key === 'ArrowRight') { // Assuming the right arrow key for right button press
        rightPressed = true;
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key === 'ArrowLeft') {
        leftPressed = false;
    }
    if (e.key === 'ArrowRight') {
        rightPressed = false;
    }
});

function pressL(e) {
    return leftPressed;
}

function pressR(e) {
    return rightPressed;
}

// Usage example
// Assuming there's an animation loop or event-driven system that invokes these
function updateCube(cube) {
    if (pressL()) { // If left is pressed, rotate left
        rotateLeft(cube);
    }
    if (pressR()) { // If right is pressed, rotate right
        rotateRight(cube);
    }
}
