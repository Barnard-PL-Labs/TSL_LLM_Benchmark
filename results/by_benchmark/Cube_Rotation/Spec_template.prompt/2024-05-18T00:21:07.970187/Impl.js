// Functions
function rotateLeft(cube) {
    // Assuming a 3D API where we can modify the rotation property of a cube
    cube.rotation.y -= 0.1; // decrementing y rotation to rotate left
}

function rotateRight(cube) {
    // Assuming a 3D API where we can modify the rotation property of a cube
    cube.rotation.y += 0.1; // incrementing y rotation to rotate right
}

// Predicates
function setupEventListeners() {
    // Initialize event listeners for key presses
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            pressL.pressed = true;
        } else if (e.key === 'ArrowRight') {
            pressR.pressed = true;
        }
    });

    document.addEventListener('keyup', function(e) {
        if (e.key === 'ArrowLeft') {
            pressL.pressed = false;
        } else if (e.key === 'ArrowRight') {
            pressR.pressed = false;
        }
    });
}

const pressL = {
    pressed: false, // Default state of the button
    eval() {
        return this.pressed;
    }
};

const pressR = {
    pressed: false, // Default state of the button
    eval() {
        return this.pressed;
    }
};

// Initialize event listeners when the script is loaded
setupEventListeners();

// Usage example
// Assume there is a `cube` object that represents the 3D model in the environment
let cube = {
    rotation: {
        y: 0 // Initial y rotation
    }
};

// Simulate usage
setInterval(() => {
    if (pressL.eval()) {
        rotateLeft(cube);
    }
    if (pressR.eval()) {
        rotateRight(cube);
    }

    console.log(`Current rotation: ${cube.rotation.y}`);
}, 100); // Check every 100 ms
