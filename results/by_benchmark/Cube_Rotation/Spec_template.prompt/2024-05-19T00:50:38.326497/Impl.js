// Assuming 'cube' is an object that already exists in the environment and has a rotation property.
// The rotation property itself is an object with properties for each axis (x, y, z).

// Functions
function rotateLeft(cube) {
    // Rotate the cube to the left by decrementing the y axis rotation
    cube.rotation.y -= Math.PI / 4; // Rotate by 45 degrees
}

function rotateRight(cube) {
    // Rotate the cube to the right by incrementing the y axis rotation
    cube.rotation.y += Math.PI / 4; // Rotate by 45 degrees
}

// Predicates
// These functions will attach event listeners to an element that triggers when buttons are pressed.
// For simplicity, I'll assume there are HTML buttons with ids 'leftButton' and 'rightButton'.

let leftPressed = false;
let rightPressed = false;

document.getElementById('leftButton').addEventListener('mousedown', function(e) {
    leftPressed = true;
});

document.getElementById('leftButton').addEventListener('mouseup', function(e) {
    leftPressed = false;
});

document.getElementById('rightButton').addEventListener('mousedown', function(e) {
    rightPressed = true;
});

document.getElementById('rightButton').addEventListener('mouseup', function(e) {
    rightPressed = false;
});

function pressL(e) {
    // Returns true if the left button is currently pressed
    return leftPressed;
}

function pressR(e) {
    // Returns true if the right button is currently pressed
    return rightPressed;
}

// Example Usage in a Render Loop or Event Callback
function updateCubeMovement() {
    if (pressL()) {
        rotateLeft(cube);
    }
    if (pressR()) {
        rotateRight(cube);
    }
}

// Assuming an animation loop or some sort of repetitive call to updateCubeMovement
setInterval(updateCubeMovement, 100); // Update cube movement every 100 milliseconds
