// Initialize a variable to keep track of whether the up arrow key is pressed
let isUpKeyPressed = false;

// Function to set the isUpKeyPressed based on the keydown event
function handleKeyDown(event) {
    if (event.keyCode === 38) {  // 38 is the key code for the up arrow key
        isUpKeyPressed = true;
    }
}

// Function to reset the isUpKeyPressed when the key is released
function handleKeyUp(event) {
    if (event.keyCode === 38) {
        isUpKeyPressed = false;
    }
}

// Add event listeners to the document for keydown and keyup
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

// Predicate to check if the up arrow key is pressed
function pressUp() {
    return isUpKeyPressed;
}
