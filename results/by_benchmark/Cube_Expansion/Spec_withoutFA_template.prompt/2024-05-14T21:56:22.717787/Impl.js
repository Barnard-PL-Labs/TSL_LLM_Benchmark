// Global variable to keep track of the up arrow key press state
let isUpKeyPressed = false;

// Function to update isUpKeyPressed when the up arrow key is pressed
function updateKeyPressState(event) {
    if (event.key === 'ArrowUp') {
        isUpKeyPressed = true;
    }
}

// Function to reset the isUpKeyPressed when the key is released
function resetKeyPressState(event) {
    if (event.key === 'ArrowUp') {
        isUpKeyPressed = false;
    }
}

// Adding event listeners to the document for keydown and keyup events
document.addEventListener('keydown', updateKeyPressState);
document.addEventListener('keyup', resetKeyPressState);

// Predicate function to check if the up key is pressed
function pressUp() {
    return isUpKeyPressed;
}
