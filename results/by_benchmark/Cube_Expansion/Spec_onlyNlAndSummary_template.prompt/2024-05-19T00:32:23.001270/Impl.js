// Create a variable to track the state of the up arrow key
let isUpKeyPressed = false;

// Function to update the isUpKeyPressed state based on keyboard events
function updateKeyPressState(event) {
    // Check if the key pressed is the up arrow key
    if (event.keyCode === 38) { // 38 is the keyCode for the up arrow key
        isUpKeyPressed = true;
    } else {
        isUpKeyPressed = false;
    }
}

// Add event listeners to the document for keydown and keyup events
document.addEventListener('keydown', function(event) {
    updateKeyPressState(event);
});

document.addEventListener('keyup', function(event) {
    // Reset the isUpKeyPressed state when any key is released
    isUpKeyPressed = false;
});

// Predicate function to check if the up key is pressed
function pressUp() {
    return isUpKeyPressed;
}
