// Assume `cube` is an object with a `rotation` property that includes `y`
let cube = {
    rotation: {
        y: 0
    }
};

// Functions for rotating the cube
function rotateLeft(cube) {
    // Assuming each left rotation decreases the y rotation by some constant value, e.g., 0.1 radians
    cube.rotation.y -= 0.1;
    console.log(`Rotated left to ${cube.rotation.y} radians`);
}

function rotateRight(cube) {
    // Assuming each right rotation increases the y rotation by some constant value, e.g., 0.1 radians
    cube.rotation.y += 0.1;
    console.log(`Rotated right to ${cube.rotation.y} radians`);
}

// Variables to track button states
let leftPressed = false;
let rightPressed = false;

// Helper function to add event listeners to buttons
function setupButtonListeners() {
    document.getElementById('leftButton').addEventListener('mousedown', function() {
        leftPressed = true;
    });
    document.getElementById('leftButton').addEventListener('mouseup', function() {
        leftPressed = false;
    });

    document.getElementById('rightButton').addEventListener('mousedown', function() {
        rightPressed = true;
    });
    document.getElementById('rightButton').addEventListener('mouseup', function() {
        rightPressed = false;
    });
}

// Predicates to check if a button is pressed
function pressL() {
    return leftPressed;
}

function pressR() {
    return rightPressed;
}

// Initial setup of button listeners
setupButtonListeners();

// Example usage
document.getElementById('leftButton').onclick = function() {
    if (pressL()) {
        rotateLeft(cube);
    }
};

document.getElementById('rightButton').onclick = function() {
    if (pressR()) {
        rotateRight(cube);
    }
};
