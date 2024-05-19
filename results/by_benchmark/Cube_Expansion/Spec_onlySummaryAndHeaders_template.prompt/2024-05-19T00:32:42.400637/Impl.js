// Create a variable to track the state of the up arrow key
let upKeyPressed = false;

// Add an event listener to the window to listen for keydown events
window.addEventListener('keydown', function(e) {
    // Check if the key pressed is the up arrow key
    if (e.key === "ArrowUp" || e.keyCode === 38) {
        upKeyPressed = true; // Set the flag to true when the up key is pressed
    }
});

// Add an event listener to the window to listen for keyup events
window.addEventListener('keyup', function(e) {
    // Check if the key released is the up arrow key
    if (e.key === "ArrowUp" || e.keyCode === 38) {
        upKeyPressed = false; // Set the flag to false when the up key is released
    }
});

// Predicate function to check if the up arrow key is currently pressed
function pressUp() {
    return upKeyPressed; // Return the current state of the up key press
}
