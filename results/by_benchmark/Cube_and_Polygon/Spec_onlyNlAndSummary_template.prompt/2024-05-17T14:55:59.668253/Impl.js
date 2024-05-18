// Define a global object to manage the state of button presses
const buttonStates = {
    leftPressed: false,
    rightPressed: false
};

// Functions
function sin(x) {
    return Math.sin(x);
}

function saw(x) {
    // Sawtooth wave can be implemented as the fractional part of x
    return x - Math.floor(x);
}

// Predicates: These should be used to check the state of button presses
function pressL(e) {
    return buttonStates.leftPressed;
}

function pressR(e) {
    return buttonStates.rightPressed;
}

// Event listeners for button presses
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        buttonStates.leftPressed = true;
    } else if (e.key === 'ArrowRight') {
        buttonStates.rightPressed = true;
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key === 'ArrowLeft') {
        buttonStates.leftPressed = false;
    } else if (e.key === 'ArrowRight') {
        buttonStates.rightPressed = false;
    }
});

// Example usage of the API to manipulate cube.scale.x
function updateCubeScale() {
    const cube = {
        scale: {
            x: 1
        }
    };

    // Let's say we use the sin function to periodically update the cube's x-scale
    setInterval(() => {
        cube.scale.x = sin(Date.now() / 1000);
        console.log(`Updated cube scale.x to ${cube.scale.x}`);
    }, 1000);
}

// Start the cube scale update
updateCubeScale();
