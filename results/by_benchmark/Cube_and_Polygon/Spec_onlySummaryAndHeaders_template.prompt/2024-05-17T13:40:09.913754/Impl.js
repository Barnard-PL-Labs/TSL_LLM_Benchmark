// Functions
function sin(x) {
    return Math.sin(x);
}

function saw(x) {
    // Simple sawtooth wave implementation: x % 1 to get a repeating pattern from 0 to just below 1
    return x % 1;
}

// Predicates using event listeners
let leftPressed = false;
let rightPressed = false;

document.addEventListener('keydown', function(e) {
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
    return leftPressed;
}

function pressR(e) {
    return rightPressed;
}

// Example usage of cube.scale.x API (assuming cube is an object in your 3D environment)
function updateCubeScaleWithSine(time) {
    const newXScale = sin(time);
    cube.scale.x = newXScale; // Set the cube's scale x to the sine of time
}

function updateCubeScaleWithSaw(time) {
    const newXScale = saw(time);
    cube.scale.x = newXScale; // Set the cube's scale x to the sawtooth wave of time
}
