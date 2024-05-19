// Assuming the presence of a `cube` object which is your 3D model in the scene
const cube = {
    scale: {
        x: 1 // initial scale of the cube along the x-axis
    }
};

// Functions
function sin(x) {
    return Math.sin(x);
}

function saw(x) {
    // A simple sawtooth wave function implementation
    return 2 * (x - Math.floor(x + 0.5));
}

// Predicates - Using keyboard events to detect left and right button presses
let leftPressed = false;
let rightPressed = false;

document.addEventListener('keydown', function(e) {
    // Assuming 'ArrowLeft' for left and 'ArrowRight' for right button presses
    if (e.key === 'ArrowLeft') {
        leftPressed = true;
    } else if (e.key === 'ArrowRight') {
        rightPressed = true;
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key === 'ArrowLeft') {
        leftPressed = false;
    } else if (e.key === 'ArrowRight') {
        rightPressed = false;
    }
});

function pressL(e) {
    // Returns true if the left arrow key is currently pressed
    return leftPressed;
}

function pressR(e) {
    // Returns true if the right arrow key is currently pressed
    return rightPressed;
}

// Example usage
console.log(sin(Math.PI / 2));  // Should log 1
console.log(saw(0.75));        // Should log -0.5

// The keyboard listeners will update the `leftPressed` and `rightPressed` booleans
// which can then be used with `pressL()` and `pressR()` to determine button state.
