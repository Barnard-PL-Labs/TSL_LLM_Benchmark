// Variable to track the state of the up arrow key
let upKeyPressed = false;

// Function to update the state based on keydown events
function checkUpKeyPress(event) {
    // Check if the key pressed is the up arrow key
    if (event.keyCode === 38) {
        upKeyPressed = true;
    }
}

// Function to reset the key state when the key is released
function resetUpKeyPress(event) {
    // Reset the state if the up arrow key is released
    if (event.keyCode === 38) {
        upKeyPressed = false;
    }
}

// Event listeners for keydown and keyup events
document.addEventListener('keydown', checkUpKeyPress);
document.addEventListener('keyup', resetUpKeyPress);

// Predicate function to be used in the system
function pressUp() {
    return upKeyPressed;
}
