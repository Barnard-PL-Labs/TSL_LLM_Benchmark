let upKeyPressed = false;

// Function to check if the up arrow key is pressed
function checkUpKeyPress(event) {
    if (event.key === "ArrowUp") {
        upKeyPressed = true;
    }
}

// Function to reset the up key press state when the key is released
function checkUpKeyRelease(event) {
    if (event.key === "ArrowUp") {
        upKeyPressed = false;
    }
}

// Add event listeners for keydown and keyup
document.addEventListener('keydown', checkUpKeyPress);
document.addEventListener('keyup', checkUpKeyRelease);

// Predicate function to return the state of the up key press
function pressUp() {
    return upKeyPressed;
}
