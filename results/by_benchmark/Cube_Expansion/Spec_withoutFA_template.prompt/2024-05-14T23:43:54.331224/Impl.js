// Variable to store the state of the up arrow key
let upKeyPressed = false;

// Function to update the upKeyPressed based on the keydown event
function handleKeyDown(event) {
    if (event.keyCode === 38) {  // 38 is the keyCode for the up arrow key
        upKeyPressed = true;
    }
}

// Function to reset the upKeyPressed when the key is released
function handleKeyUp(event) {
    if (event.keyCode === 38) {
        upKeyPressed = false;
    }
}

// Adding event listeners to the document
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

// Predicate function to check if the up arrow key is pressed
function pressUp(e) {
    return upKeyPressed;
}
