// Assuming `cube` is available in the scope with `cube.rotation.y` accessible

/**
 * Functions that manipulate the cube's rotation
 */

// Function to rotate the cube to the left
function rotateLeft(cube) {
    cube.rotation.y -= 0.1;  // Decrease y rotation to rotate left, adjust the value as needed
}

// Function to rotate the cube to the right
function rotateRight(cube) {
    cube.rotation.y += 0.1;  // Increase y rotation to rotate right, adjust the value as needed
}

/**
 * Predicates to determine if left or right buttons are pressed
 * Assuming usage of keyboard events for simplicity. 
 * 'e' refers to the event object passed by event listeners.
 */

// Predicate that checks if the left button is pressed
function pressL(e) {
    return e.keyCode === 37; // 37 is keyCode for the left arrow key
}

// Predicate that checks if the right button is pressed
function pressR(e) {
    return e.keyCode === 39; // 39 is keyCode for the right arrow key
}

/**
 * Setting up event listeners to handle key presses
 */

document.addEventListener('keydown', function(e) {
    if (pressL(e)) {
        rotateLeft(cube);  // Rotate left if left button (key) is pressed
    } else if (pressR(e)) {
        rotateRight(cube);  // Rotate right if right button (key) is pressed
    }
});
