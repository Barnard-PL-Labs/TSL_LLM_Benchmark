// Initialize a variable to keep track of the up arrow key being pressed
let isUpKeyPressed = false;

// Function to update the state based on keydown events
function handleKeyDown(event) {
    if (event.keyCode === 38) { // 38 is the key code for the up arrow key
        isUpKeyPressed = true;
    }
}

// Function to update the state based on keyup events
function handleKeyUp(event) {
    if (event.keyCode === 38) {
        isUpKeyPressed = false;
    }
}

// Add event listeners to the document for keydown and keyup events
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return isUpKeyPressed;
}
