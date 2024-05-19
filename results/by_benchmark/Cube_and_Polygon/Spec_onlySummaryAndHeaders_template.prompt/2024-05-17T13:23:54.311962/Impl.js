// Functions
function sin(x) {
    return Math.sin(x);
}

function saw(x) {
    // Implementing a sawtooth wave function
    return 2 * (x / (2 * Math.PI) - Math.floor(0.5 + x / (2 * Math.PI)));
}

// Predicates
function pressL(e) {
    // This function returns true if the left button (usually "ArrowLeft") is pressed
    return e.key === 'ArrowLeft';
}

function pressR(e) {
    // This function returns true if the right button (usually "ArrowRight") is pressed
    return e.key === 'ArrowRight';
}

// Event listeners for the predicates
document.addEventListener('keydown', function(e) {
    if (pressL(e)) {
        console.log("Left button pressed");
        // Set cube.scale.x based on some logic here, for example:
        cube.scale.x = saw(Math.PI); // Using saw function as an example
    }
    if (pressR(e)) {
        console.log("Right button pressed");
        // Set cube.scale.x based on some logic here, for example:
        cube.scale.x = sin(Math.PI / 2); // Using sin function as an example
    }
});

// System API example usage
var cube = {
    scale: {
        x: 1 // Default scale
    }
};

// This function could represent a part of rendering or simulation loop
function updateCubeScale() {
    cube.scale.x += 0.1; // Modify this as needed based on actual application logic
    console.log(`Cube scale x: ${cube.scale.x}`);
}

// Simulate a key press
// Uncomment below lines for testing in a real environment
// document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowLeft'}));
// document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowRight'}));
