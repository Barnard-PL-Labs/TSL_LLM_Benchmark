// Define a variable to keep the state of the up arrow key
let isUpKeyPressed = false;

// Function to update the state when the up arrow key is pressed
function updateKeyPressState(event) {
    if (event.keyCode === 38) {  // 38 is the key code for the up arrow key
        isUpKeyPressed = true;
    } else {
        isUpKeyPressed = false;
    }
}

// Add event listeners to track when keys are pressed and released
window.addEventListener('keydown', function(event) {
    updateKeyPressState(event);
});

window.addEventListener('keyup', function(event) {
    // Reset the state when the key is released
    if (event.keyCode === 38) {
        isUpKeyPressed = false;
    }
});

// Predicate function to check if the up arrow key is pressed
function pressUp(e) {
    return isUpKeyPressed;
}
