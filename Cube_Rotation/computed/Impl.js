// Functions
function rotateLeft(cube) {
    cube.rotation.y += 0.1;  // Increment y rotation, adjust the value based on needed rotation speed
    return cube.rotation.y;  // Return the new rotation for verification or further processing
}

function rotateRight(cube) {
    cube.rotation.y -= 0.1;  // Decrement y rotation, adjust the value based on needed rotation speed
    return cube.rotation.y;  // Return the new rotation for verification or further processing
}

// Predicate to check if the left arrow key is pressed
function pressL(e) {
    return e.keyCode === 37; // Left arrow key code
}

// Predicate to check if the right arrow key is pressed
function pressR(e) {
    return e.keyCode === 39; // Right arrow key code
}