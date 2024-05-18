// Create a variable to store the state of the up arrow key.
let isUpKeyPressed = false;

// Add an event listener to the window object to listen for 'keydown' events.
window.addEventListener('keydown', function(event) {
    // Check if the key pressed is the up arrow key.
    if (event.keyCode === 38) {
        isUpKeyPressed = true;
    }
});

// Add another event listener for 'keyup' events to reset the isUpKeyPressed when the key is released.
window.addEventListener('keyup', function(event) {
    // Check if the key released is the up arrow key.
    if (event.keyCode === 38) {
        isUpKeyPressed = false;
    }
});

// Predicate function to check if the up arrow key is pressed.
function pressUp() {
    return isUpKeyPressed;  // Returns true if the up arrow key is pressed, false otherwise.
}
