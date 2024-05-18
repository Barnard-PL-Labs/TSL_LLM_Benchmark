// Define a variable to keep track of the up arrow key state
let isUpKeyPressed = false;

// Function to set the predicate value based on the keyboard event
function updateUpKeyState(event) {
    if (event.keyCode === 38) {  // 38 is the keyCode for the up arrow key
        isUpKeyPressed = true;
    }
}

// Function to reset the predicate value when the key is released
function resetUpKeyState(event) {
    if (event.keyCode === 38) {
        isUpKeyPressed = false;
    }
}

// Add event listeners to the document to detect when keys are pressed and released
document.addEventListener('keydown', updateUpKeyState);
document.addEventListener('keyup', resetUpKeyState);

// Function to access the state of the up key press
function pressUp() {
    return isUpKeyPressed;
}
