// Variable to keep track of the up key state
let isUpKeyPressed = false;

// Function to check if the up key is pressed
function checkUpKeyPress(event) {
    if (event.keyCode === 38) { // 38 is the keyCode for the up arrow key
        isUpKeyPressed = true;
    }
}

// Function to check if the up key is released
function checkUpKeyRelease(event) {
    if (event.keyCode === 38) {
        isUpKeyPressed = false;
    }
}

// Adding event listeners to the document
document.addEventListener('keydown', checkUpKeyPress);
document.addEventListener('keyup', checkUpKeyRelease);

// Predicate function to get the state of the up key
function pressUp() {
    return isUpKeyPressed;
}
