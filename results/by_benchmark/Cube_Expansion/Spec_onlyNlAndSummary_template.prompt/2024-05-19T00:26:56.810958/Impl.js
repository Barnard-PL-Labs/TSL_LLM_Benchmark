// Initialize a variable to keep track of the up arrow key press state
let isUpKeyPressed = false;

// Function to update the isUpKeyPressed based on the key event
function updateKeyPressState(event) {
    // Check if the key pressed is the up arrow key (keyCode 38)
    if (event.keyCode === 38) {
        isUpKeyPressed = true;
    }
}

// Function to reset the isUpKeyPressed when the key is released
function resetKeyPressState(event) {
    // Check if the key released is the up arrow key (keyCode 38)
    if (event.keyCode === 38) {
        isUpKeyPressed = false;
    }
}

// Add event listeners to the document for keydown and keyup events
document.addEventListener('keydown', updateKeyPressState);
document.addEventListener('keyup', resetKeyPressState);

// Predicate function to check if the up arrow key is currently pressed
function pressUp() {
    return isUpKeyPressed;
}
