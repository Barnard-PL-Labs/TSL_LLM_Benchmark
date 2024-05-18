// Assuming an existing cube object in the 3D environment
const cube = {
    scale: {
        x: 1,
    }
};

// Functions to calculate sine and sawtooth waves
function sin(x) {
    return Math.sin(x);
}

function saw(x) {
    return x - Math.floor(x);  // A simple implementation of a sawtooth wave
}

// Predicates for button presses: pressL and pressR
function pressL(e) {
    return e.key === 'ArrowLeft' && e.type === 'keydown';  // True when left arrow key is pressed
}

function pressR(e) {
    return e.key === 'ArrowRight' && e.type === 'keydown';  // True when right arrow key is pressed
}

// Event listeners to detect key presses and modify cube.scale.x accordingly
document.addEventListener('keydown', function(e) {
    if (pressL(e)) {
        // If left button is pressed, apply sine wave to cube's scale on the x-axis
        cube.scale.x = sin(new Date().getTime() / 1000);  // Using time to simulate continuous change
        console.log(`Left pressed. Cube's scale.x set to sine wave: ${cube.scale.x}`);
    } else if (pressR(e)) {
        // If right button is pressed, apply sawtooth wave to cube's scale on the x-axis
        cube.scale.x = saw(new Date().getTime() / 1000);  // Using time to simulate continuous change
        console.log(`Right pressed. Cube's scale.x set to sawtooth wave: ${cube.scale.x}`);
    }
});
