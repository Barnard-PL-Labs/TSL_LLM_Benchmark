// Assuming 'cube' is already defined in the scope that represents your 3D cube object
// For demonstration, let's consider 'cube' is an object with a property 'rotation' which in turn has a property 'y'

// Functions
function rotateLeft(cube) {
    // Rotate the cube to the left by decreasing the y rotation
    cube.rotation.y -= Math.PI / 18;  // Rotate by 10 degrees
}

function rotateRight(cube) {
    // Rotate the cube to the right by increasing the y rotation
    cube.rotation.y += Math.PI / 18;  // Rotate by 10 degrees
}

// Predicates
// Assuming we are adding event listeners to the window or some specific element that captures key events
let leftPressed = false;
let rightPressed = false;

window.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        leftPressed = true;
    } else if (e.key === 'ArrowRight') {
        rightPressed = true;
    }
});

window.addEventListener('keyup', function(e) {
    if (e.key === 'ArrowLeft') {
        leftPressed = false;
    } else if (e.key === 'ArrowRight') {
        rightPressed = false;
    }
});

function pressL(e) {
    return leftPressed;  // Returns true if the left arrow key is pressed
}

function pressR(e) {
    return rightPressed; // Returns true if the right arrow key is pressed
}
