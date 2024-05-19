let upKeyPressed = false;  // This will track the state of the up arrow key

// Event listener for the 'keydown' event
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowUp') {
        upKeyPressed = true;  // Set to true when the up key is pressed
    }
});

// Event listener for the 'keyup' event
document.addEventListener('keyup', function(e) {
    if (e.key === 'ArrowUp') {
        upKeyPressed = false;  // Reset to false when the up key is released
    }
});

// Predicate function to check if the up key is pressed
function pressUp() {
    return upKeyPressed;  // Returns the current state of the up key
}
