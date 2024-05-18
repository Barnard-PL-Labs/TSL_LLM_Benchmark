// Assuming `cube` is already defined in your environment
// and you have access to modify `cube.rotation.y`

// Function to rotate the cube to the left
function rotateLeft(cube) {
    // Assuming left rotation decreases the y rotation angle
    cube.rotation.y -= 0.1;  // Adjust rotation angle as needed
}

// Function to rotate the cube to the right
function rotateRight(cube) {
    // Assuming right rotation increases the y rotation angle
    cube.rotation.y += 0.1;  // Adjust rotation angle as needed
}

// Predicates for button presses
// Using the keyboard event listeners to set flags when keys are pressed

let leftPressed = false;
let rightPressed = false;

// Set up the event listeners
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

// Predicate function to check if the left button is pressed
function pressL() {
    return leftPressed;
}

// Predicate function to check if the right button is pressed
function pressR() {
    return rightPressed;
}
