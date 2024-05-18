// Functions

/**
 * Returns the sine of x.
 * @param {number} x
 * @returns {number}
 */
function sin(x) {
    return Math.sin(x);
}

/**
 * Returns the sawtooth wave of x.
 * @param {number} x
 * @returns {number}
 */
function saw(x) {
    // Sawtooth wave can be represented as x - floor(x)
    return x - Math.floor(x);
}

// Predicates

/**
 * Checks if the left arrow key is pressed.
 * @param {Event} e - The event object from a key press event.
 * @returns {boolean}
 */
function pressL(e) {
    return e.key === 'ArrowLeft';
}

/**
 * Checks if the right arrow key is pressed.
 * @param {Event} e - The event object from a key press event.
 * @returns {boolean}
 */
function pressR(e) {
    return e.key === 'ArrowRight';
}

// Setting up event listeners for demonstration
document.addEventListener('keydown', function(e) {
    if (pressL(e)) {
        console.log('Left button pressed');
        // Example use, scale cube on left press
        cube.scale.x = sin(t);  // Assuming 't' is defined in your environment as time or a similar variable
    }

    if (pressR(e)) {
        console.log('Right button pressed');
        // Example use, scale cube on right press
        cube.scale.x = saw(t);  // Assuming 't' is defined in your environment as time or a similar variable
    }
});

// Example to mimic interaction with cube's scale (assuming `cube.scale.x` and `t` are managed elsewhere in your application)
var cube = {
    scale: {
        x: 1
    }
};
var t = 0; // `t` could be incremented in an animation loop or similar
