// Assume cube is an object available in the global scope with a rotation property.
// We can access and modify cube.rotation.y to rotate the cube.

// Functions
function rotateLeft(cube) {
    // Rotate the cube to the left by decrementing the y rotation
    cube.rotation.y -= 0.1; // Rotating by 0.1 radians to the left
    console.log('Cube rotated left:', cube.rotation.y);
}

function rotateRight(cube) {
    // Rotate the cube to the right by incrementing the y rotation
    cube.rotation.y += 0.1; // Rotating by 0.1 radians to the right
    console.log('Cube rotated right:', cube.rotation.y);
}

// Predicates and Event Listeners
// Assuming the existence of an appropriate event emitter or HTML elements for capturing events
let leftPressed = false;
let rightPressed = false;

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        leftPressed = true;
        console.log('Left button pressed');
    }
    if (e.key === 'ArrowRight') {
        rightPressed = true;
        console.log('Right button pressed');
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

// Predicate functions to check the state of left and right presses
function pressL(e) {
    return leftPressed;
}

function pressR(e) {
    return rightPressed;
}

// Example usage of the functions and predicates
document.addEventListener('keydown', function(e) {
    if (pressL(e)) {
        rotateLeft(cube);
    }
    if (pressR(e)) {
        rotateRight(cube);
    }
});
