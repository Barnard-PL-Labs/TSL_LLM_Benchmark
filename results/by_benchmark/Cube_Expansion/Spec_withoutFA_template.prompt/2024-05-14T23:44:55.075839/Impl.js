// Object to hold the state of the key presses
const keyStates = {
    upPressed: false
};

// Function to update the state when the up arrow key is pressed
function updateKeyPress(event) {
    // Check if the key pressed is the up arrow key
    if (event.keyCode === 38) {  // 38 is the keycode for the up arrow key
        keyStates.upPressed = true;
    }
}

// Function to clear the key press state when the key is released
function clearKeyPress(event) {
    // Check if the key released is the up arrow key
    if (event.keyCode === 38) {
        keyStates.upPressed = false;
    }
}

// Add event listeners to the document for keydown and keyup events
document.addEventListener('keydown', updateKeyPress);
document.addEventListener('keyup', clearKeyPress);

// Predicate function to check if the up arrow key is currently pressed
function pressUp() {
    return keyStates.upPressed;
}
