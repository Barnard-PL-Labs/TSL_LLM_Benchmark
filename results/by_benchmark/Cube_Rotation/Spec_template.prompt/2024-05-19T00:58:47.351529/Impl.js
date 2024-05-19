// Assuming 'cube' is an object with a rotation property that has a y field
// This is a typical setup for 3D graphics in libraries like Three.js

// Functions
function rotateLeft(cube) {
    // Rotates the cube to the left
    cube.rotation.y -= Math.PI / 4; // Rotating the cube by 45 degrees to the left
}

function rotateRight(cube) {
    // Rotates the cube to the right
    cube.rotation.y += Math.PI / 4; // Rotating the cube by 45 degrees to the right
}

// Predicates
// Here we setup event listeners and use flags to store the state of the buttons

let leftPressed = false;
let rightPressed = false;

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        leftPressed = true;
    }
    if (e.key === 'ArrowRight') {
        rightPressed = true;
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key === 'ArrowLeft') {
        leftPressed = false;
    }
    if (e.key === 'ArrowRight') {
        rightPressed = false;
    }
});

function pressL(e) {
    // Returns true if the left arrow key is pressed
    return leftPressed;
}

function pressR(e) {
    // Returns true if the right arrow key is pressed
    return rightPressed;
}

// Example usage
// These would likely be called within an animation or game loop
rotateLeft(cube);  // Call this when you want to rotate the cube left
rotateRight(cube); // Call this when you want to rotate the cube right

// The predicates can be used in conditions such as
if (pressL()) {
    console.log('Left arrow is currently pressed.');
}

if (pressR()) {
    console.log('Right arrow is currently pressed.');
}
