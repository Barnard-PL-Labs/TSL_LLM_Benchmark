// Definitions for functions
function sin(x) {
    return Math.sin(x);
}

function saw(x) {
    // Sawtooth wave function using periodicity of 2π
    return 2 * (x / (2 * Math.PI) - Math.floor(1/2 + x / (2 * Math.PI)));
}

// Definitions for predicates with event listeners
function setupEventListeners() {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            window.pressL = true;
        } else if (e.key === 'ArrowRight') {
            window.pressR = true;
        }
    });

    document.addEventListener('keyup', function(e) {
        if (e.key === 'ArrowLeft') {
            window.pressL = false;
        } else if (e.key === 'ArrowRight') {
            window.pressR = false;
        }
    });

    // Initialize the state variables
    window.pressL = false;
    window.pressR = false;
}

function pressL() {
    return window.pressL;
}

function pressR() {
    return window.pressR;
}

// Function to scale the cube along the x-axis
function updateCubeScaleX(value) {
    // Assuming `cube` is a globally accessible object representing the 3D cube
    cube.scale.x = value;
}

// Example usage
setupEventListeners();  // Set up the event listeners for key press states

// Periodic function to update the cube scale based on some input, demonstrating the sin and saw functions
setInterval(() => {
    const currentTime = Date.now();

    // Example usage of sin and saw with time-based input
    const sinValue = sin(currentTime / 1000);
    const sawValue = saw(currentTime / 1000);

    // Update the cube's scale using sin or sawtooth wave, depending on a condition
    if (pressL()) {
        updateCubeScaleX(sinValue);
    } else if (pressR()) {
        updateCubeScaleX(sawValue);
    }
}, 50);  // Update function runs every 50 milliseconds
