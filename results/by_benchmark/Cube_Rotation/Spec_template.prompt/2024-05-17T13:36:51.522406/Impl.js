// Assuming `cube` is an object provided by the external system's API,
// with a property `rotation.y` that can be modified.

// Functions for Cube Rotation
function rotateLeft(cube) {
    cube.rotation.y -= 10; // Decrease y rotation by 10 degrees
}

function rotateRight(cube) {
    cube.rotation.y += 10; // Increase y rotation by 10 degrees
}

// Predicates for Button Presses
// Assuming we are using a browser environment where 'e' is an event object.

/**
 * Checks if the left button is pressed.
 * @param {Event} e - The event object from an event listener.
 * @returns {boolean} - true if the left button is pressed, otherwise false.
 */
function pressL(e) {
    return e.key === 'ArrowLeft'; // Assumes left arrow key press
}

/**
 * Checks if the right button is pressed.
 * @param {Event} e - The event object from an event listener.
 * @returns {boolean} - true if the right button is pressed, otherwise false.
 */
function pressR(e) {
    return e.key === 'ArrowRight'; // Assumes right arrow key press
}

// Event listeners for the key press events
document.addEventListener('keydown', function(e) {
    if (pressL(e)) {
        rotateLeft(cube); // Rotate the cube left on left key press
    } else if (pressR(e)) {
        rotateRight(cube); // Rotate the cube right on right key press
    }
});

// Assuming `cube` is initialized and accessible here
let cube = {
    rotation: {
        y: 0 // Initial rotation setup
    }
};
