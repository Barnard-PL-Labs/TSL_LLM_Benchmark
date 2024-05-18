// A utility object to keep track of the keys currently being pressed
const keysPressed = {};

// This function initializes the event listeners for the key events
function initializeKeyListeners() {
    // Listen for 'keydown' events to set the 'up' key press state
    document.addEventListener('keydown', function(event) {
        if (event.key === "ArrowUp") {
            keysPressed.up = true;
        }
    });

    // Listen for 'keyup' events to reset the 'up' key press state
    document.addEventListener('keyup', function(event) {
        if (event.key === "ArrowUp") {
            keysPressed.up = false;
        }
    });
}

// Call the function to start listening to key events
initializeKeyListeners();

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return keysPressed.up || false;
}
