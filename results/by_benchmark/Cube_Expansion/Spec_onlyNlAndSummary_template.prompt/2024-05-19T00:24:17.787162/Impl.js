// Assuming there's a global variable to track the state of the Up arrow key.
let isUpKeyPressed = false;

// Function to update the state based on keydown event
function updateKeyPressState(event) {
    // Check if the key pressed is the Up arrow key
    if (event.keyCode === 38) {
        isUpKeyPressed = true;
    }
}

// Function to reset the key state on keyup
function resetKeyPressState(event) {
    // Reset the state when the Up arrow key is released
    if (event.keyCode === 38) {
        isUpKeyPressed = false;
    }
}

// Adding event listeners to the document
document.addEventListener('keydown', updateKeyPressState);
document.addEventListener('keyup', resetKeyPressState);

// Predicate function to check if the Up key is pressed
function pressUp() {
    return isUpKeyPressed;
}
