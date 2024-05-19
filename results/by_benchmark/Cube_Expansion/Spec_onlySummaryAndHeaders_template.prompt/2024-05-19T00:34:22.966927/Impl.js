// Variable to keep track of the Up Arrow key state
let isUpKeyPressed = false;

// Function to check if the Up Arrow key is pressed (key down)
function setUpKeyPressListener() {
    document.addEventListener('keydown', function(event) {
        if (event.keyCode === 38) { // 38 is the keycode for the Up Arrow key
            isUpKeyPressed = true;
        }
    });

    // Listener for the key up event to reset the key state
    document.addEventListener('keyup', function(event) {
        if (event.keyCode === 38) {
            isUpKeyPressed = false;
        }
    });
}

// Call the function to set up the event listeners
setUpKeyPressListener();

// Predicate function to check the state of the Up Arrow key
function pressUp() {
    return isUpKeyPressed;
}
