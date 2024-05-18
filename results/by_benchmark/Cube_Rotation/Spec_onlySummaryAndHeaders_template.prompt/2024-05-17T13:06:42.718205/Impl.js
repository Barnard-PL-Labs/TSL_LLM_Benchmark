// Functions to manipulate the cube's rotation
function rotateLeft(cube) {
    cube.rotation.y -= 0.1; // Arbitrary rotation decrement
}

function rotateRight(cube) {
    cube.rotation.y += 0.1; // Arbitrary rotation increment
}

// Predicates to detect button presses
let leftPressed = false;
let rightPressed = false;

// Assuming 'document' is available for attaching event listeners
document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") { // Assuming the "left arrow" key represents the left button
        leftPressed = true;
    }
    if (e.key === "ArrowRight") { // Assuming the "right arrow" key represents the right button
        rightPressed = true;
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key === "ArrowLeft") {
        leftPressed = false;
    }
    if (e.key === "ArrowRight") {
        rightPressed = false;
    }
});

function pressL(e) {
    return leftPressed;
}

function pressR(e) {
    return rightPressed;
}

// Example usage:
// Rotate cube left if left button is pressed
if (pressL()) {
    rotateLeft(cube);
}

// Rotate cube right if right button is pressed
if (pressR()) {
    rotateRight(cube);
}
