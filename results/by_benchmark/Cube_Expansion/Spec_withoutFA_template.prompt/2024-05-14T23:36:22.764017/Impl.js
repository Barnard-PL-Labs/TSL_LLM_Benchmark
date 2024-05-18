// Variable to track the state of the up arrow key
let isUpKeyPressed = false;

// Set up an event listener for keydown events
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        isUpKeyPressed = true;
    }
});

// Set up an event listener for keyup events to reset the state when the key is released
document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowUp') {
        isUpKeyPressed = false;
    }
});

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return isUpKeyPressed;
}
