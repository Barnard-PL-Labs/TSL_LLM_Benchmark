// Functions
function sin(x) {
    return Math.sin(x);
}

function saw(x) {
    // Implementing a simple sawtooth wave function
    // Period of the sawtooth wave could be adjusted if needed; here we assume it to be 2π
    return 2 * (x / (2 * Math.PI) - Math.floor(0.5 + x / (2 * Math.PI)));
}

// Predicates with event listeners for button presses
function setupButtonListeners(cube) {
    // Assuming the cube object is passed and it has a scale property we can manipulate
    document.addEventListener('keydown', (e) => {
        if (e.key === "ArrowLeft") {
            if (pressL(e)) {
                // Perform an action when the left button is pressed
                console.log('Left button pressed.');
                cube.scale.x = sin(Math.PI / 4);  // Example action: set cube's x-scale to sin(π/4)
            }
        } else if (e.key === "ArrowRight") {
            if (pressR(e)) {
                // Perform an action when the right button is pressed
                console.log('Right button pressed.');
                cube.scale.x = saw(Math.PI / 2);  // Example action: set cube's x-scale to saw(π/2)
            }
        }
    });
}

function pressL(e) {
    return e.key === "ArrowLeft";
}

function pressR(e) {
    return e.key === "ArrowRight";
}

// Example usage, assuming a cube object exists
// In a real implementation, ensure the cube object is defined and has a scale property.
const exampleCube = {
    scale: {
        x: 1,  // Initial scale along x-axis
    }
};

setupButtonListeners(exampleCube);
