// Object to store the state of keys
const keyStates = {
    upArrowPressed: false
};

// Function to initialize key listeners
function initializeKeyListeners() {
    // Listener for keydown event
    document.addEventListener('keydown', function(event) {
        if (event.key === "ArrowUp") {
            keyStates.upArrowPressed = true;
        }
    });

    // Listener for keyup event
    document.addEventListener('keyup', function(event) {
        if (event.key === "ArrowUp") {
            keyStates.upArrowPressed = false;
        }
    });
}

// Predicate to check if the up arrow key is pressed
function pressUp() {
    return keyStates.upArrowPressed;
}

// Initialize key listeners when the document is ready
document.addEventListener('DOMContentLoaded', initializeKeyListeners);
