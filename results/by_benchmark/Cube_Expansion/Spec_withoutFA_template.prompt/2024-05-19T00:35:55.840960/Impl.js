// Variable to track the state of the up arrow key
let isUpKeyPressed = false;

// Function to handle the keydown event
function handleKeyDown(event) {
    if (event.keyCode === 38) {  // 38 is the key code for the up arrow key
        isUpKeyPressed = true;
    }
}

// Function to handle the keyup event
function handleKeyUp(event) {
    if (event.keyCode === 38) {
        isUpKeyPressed = false;
    }
}

// Adding event listeners to the document
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return isUpKeyPressed;
}
