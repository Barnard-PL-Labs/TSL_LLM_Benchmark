// Function definitions

/**
 * Rotates the cube to the left.
 * @param {Object} cube - The cube object with a rotation property
 */
function rotateLeft(cube) {
    if (cube && cube.rotation && typeof cube.rotation.y === 'number') {
        cube.rotation.y -= Math.PI / 2;  // Rotate left by 90 degrees
    }
}

/**
 * Rotates the cube to the right.
 * @param {Object} cube - The cube object with a rotation property
 */
function rotateRight(cube) {
    if (cube && cube.rotation && typeof cube.rotation.y === 'number') {
        cube.rotation.y += Math.PI / 2;  // Rotate right by 90 degrees
    }
}

// Predicate definitions

/**
 * Checks if the left button is pressed.
 * @returns {boolean} True if the left button is pressed.
 */
function pressL() {
    // Set up an event listener for the left button
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            return true;
        }
    });
    return false;
}

/**
 * Checks if the right button is pressed.
 * @returns {boolean} True if the right button is pressed.
 */
function pressR() {
    // Set up an event listener for the right button
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            return true;
        }
    });
    return false;
}

// Example usage
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        rotateLeft(cube);
    } else if (event.key === 'ArrowRight') {
        rotateRight(cube);
    }
});

// Creating a cube object for demonstration.
// Normally this would be supplied by your 3D framework or environment setup.
let cube = {
    rotation: {
        y: 0  // Initial rotation y value
    }
};

// This would typically be part of a rendering loop or similar in a full application.
