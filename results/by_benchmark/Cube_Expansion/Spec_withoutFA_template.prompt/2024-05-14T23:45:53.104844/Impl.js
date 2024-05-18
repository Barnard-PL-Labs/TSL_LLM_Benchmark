// We will assume we have access to some global object "cube" for 3D manipulations

// Create a variable to track the state of the up arrow key
let isUpKeyPressed = false;

// Add an event listener to the whole window to listen for keydown events
window.addEventListener('keydown', function(event) {
    // Check if the key pressed is the up arrow key
    if (event.key === 'ArrowUp') {
        isUpKeyPressed = true;
    }
});

// Add another event listener for keyup to reset the state when the key is released
window.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowUp') {
        isUpKeyPressed = false;
    }
});

// Predicate to check if the up key is currently pressed
function pressUp() {
    return isUpKeyPressed;
}
