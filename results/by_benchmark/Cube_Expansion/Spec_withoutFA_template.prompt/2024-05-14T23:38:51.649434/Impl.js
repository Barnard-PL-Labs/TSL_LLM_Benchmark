// This variable will be used to store the state of the up arrow key
let upKeyPressed = false;

// Adding an event listener to the window to detect keydown events
window.addEventListener('keydown', function(e) {
    // Check if the key pressed is the 'ArrowUp' key
    if (e.key === 'ArrowUp') {
        upKeyPressed = true; // Set the upKeyPressed to true when ArrowUp is pressed
    }
});

// Adding an event listener to reset the upKeyPressed when the key is released
window.addEventListener('keyup', function(e) {
    if (e.key === 'ArrowUp') {
        upKeyPressed = false; // Reset the upKeyPressed when the ArrowUp key is released
    }
});

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return upKeyPressed; // Returns the current state of the up arrow key press
}
