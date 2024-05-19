// Define a variable to track the state of the up arrow key
let isUpArrowPressed = false;

// Function to check if the up arrow key is pressed
function checkUpArrowKey(event) {
    // Update the isUpArrowPressed state based on whether the up arrow key is pressed
    if (event.keyCode === 38) {  // 38 is the key code for the up arrow key
        isUpArrowPressed = true;
    }
    if (event.type === 'keyup' && event.keyCode === 38) {
        isUpArrowPressed = false;
    }
}

// Add event listeners to the document to listen for keydown and keyup events
document.addEventListener('keydown', checkUpArrowKey);
document.addEventListener('keyup', checkUpArrowKey);

// Predicate function to get the state of the up arrow key
function pressUp() {
    return isUpArrowPressed;
}
