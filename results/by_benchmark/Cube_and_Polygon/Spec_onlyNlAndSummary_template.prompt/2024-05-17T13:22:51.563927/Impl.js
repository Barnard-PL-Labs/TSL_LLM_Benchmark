// Global variables for button states
let leftPressed = false;
let rightPressed = false;

// Setting up the event listeners for button presses
document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
        leftPressed = true;
    } else if (e.key === "ArrowRight") {
        rightPressed = true;
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key === "ArrowLeft") {
        leftPressed = false;
    } else if (e.key === "ArrowRight") {
        rightPressed = false;
    }
});

// Predicate functions
function pressL() {
    return leftPressed;
}

function pressR() {
    return rightPressed;
}

// Functions
function sin(x) {
    return Math.sin(x);
}

function saw(x) {
    // Implementing sawtooth wave: f(x) = x - floor(x)
    return x - Math.floor(x);
}

// Example usage of system API to modify 'cube.scale.x'
function updateCubeScale() {
    // Assuming 'cube' is an accessible object in your environment
    if (cube) {
        cube.scale.x = sin(new Date().getTime() / 1000); // example usage of sin function to animate scale
    }
}

// Continuously update cube scale
setInterval(updateCubeScale, 100); // Updates cube scale every 100 milliseconds
