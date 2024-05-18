// Variable to hold the state of the up arrow key
let upKeyPressed = false;

// Function to set upKeyPressed based on the 'keydown' event
function setupKeyPressListener() {
    document.addEventListener('keydown', function(event) {
        // Check if the up arrow key (key code 38) is pressed
        if (event.keyCode === 38) {
            upKeyPressed = true;
        }
    });

    document.addEventListener('keyup', function(event) {
        // Reset upKeyPressed when the up arrow key is released
        if (event.keyCode === 38) {
            upKeyPressed = false;
        }
    });
}

// Call this function to start listening for key events
setupKeyPressListener();

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return upKeyPressed;
}
