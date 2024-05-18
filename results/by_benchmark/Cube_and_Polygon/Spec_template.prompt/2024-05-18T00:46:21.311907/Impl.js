// Assuming a global cube object is present and has a scale property with x, y, z components
var cube = {
    scale: {
        x: 1, // Default scale along x-axis
        y: 1,
        z: 1
    }
};

// Functions
function sin(x) {
    return Math.sin(x);
}

function saw(x) {
    // Sawtooth wave function, period of 2π
    return 2 * (x / (2 * Math.PI) - Math.floor(0.5 + x / (2 * Math.PI)));
}

// Predicates
function pressL(e) {
    // Assume an event 'e' has a key property,
    // Returns true if the left arrow key is pressed
    return e.key === "ArrowLeft";
}

function pressR(e) {
    // Assume an event 'e' has a key property,
    // Returns true if the right arrow key is pressed
    return e.key === "ArrowRight";
}

// Event listeners for key presses
document.addEventListener('keydown', function(e) {
    if (pressL(e)) {
        console.log("Left button pressed");
        // Additional actions can be triggered here
    } else if (pressR(e)) {
        console.log("Right button pressed");
        // Additional actions can be triggered here
    }
});

// Example usage of sin and saw functions to manipulate cube.scale.x
function updateCubeScale() {
    let time = new Date().getTime() / 1000; // Current time in seconds
    cube.scale.x = sin(time); // Update scale x using sine function
    console.log("Updated cube scale.x to sine wave:", cube.scale.x);

    cube.scale.x = saw(time); // Update scale x using sawtooth wave
    console.log("Updated cube scale.x to sawtooth wave:", cube.scale.x);
}

// Periodically update cube's scale for demonstration
setInterval(updateCubeScale, 1000); // Update every second
