// A variable to keep track of the up arrow key state
let isUpKeyPressed = false;

// Function to set isUpKeyPressed to true when the up arrow key is pressed
function handleKeyDown(event) {
    if (event.keyCode === 38) {  // 38 is the key code for the up arrow key
        isUpKeyPressed = true;
    }
}

// Function to set isUpKeyPressed to false when the up arrow key is released
function handleKeyUp(event) {
    if (event.keyCode === 38) {
        isUpKeyPressed = false;
    }
}

// Add event listeners to the document for keydown and keyup events
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

// Predicate function to check if the up key is pressed
function pressUp() {
    return isUpKeyPressed;
}
