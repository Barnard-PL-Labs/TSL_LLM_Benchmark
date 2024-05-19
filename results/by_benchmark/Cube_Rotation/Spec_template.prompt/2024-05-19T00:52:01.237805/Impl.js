// Functions for rotating the cube
function rotateLeft(cube) {
    // Assuming cube.rotation.y is accessible and represents the yaw rotation
    // Rotate left could mean decrementing the y-axis rotation
    cube.rotation.y -= 0.1;  // Rotates the cube by 0.1 radians to the left
}

function rotateRight(cube) {
    // Rotate right could mean incrementing the y-axis rotation
    cube.rotation.y += 0.1;  // Rotates the cube by 0.1 radians to the right
}

// Predicates to check button presses
// Assuming we have HTML buttons with IDs 'leftButton' and 'rightButton'
function pressL(e) {
    // Returns true if the left button is pressed
    return e.target.id === 'leftButton';
}

function pressR(e) {
    // Returns true if the right button is pressed
    return e.target.id === 'rightButton';
}

// Event listeners for the buttons
document.getElementById('leftButton').addEventListener('click', function(e) {
    if (pressL(e)) {
        rotateLeft(cube);  // Call rotateLeft if the leftButton is pressed
    }
});

document.getElementById('rightButton').addEventListener('click', function(e) {
    if (pressR(e)) {
        rotateRight(cube);  // Call rotateRight if the rightButton is pressed
    }
});

// Assuming 'cube' is an object with a 'rotation' property, which is itself an object with a 'y' property
let cube = {
    rotation: {
        y: 0
    }
};
