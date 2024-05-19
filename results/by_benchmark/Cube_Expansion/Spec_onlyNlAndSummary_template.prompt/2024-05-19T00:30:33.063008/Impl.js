// Variable to keep track of whether the up arrow key is currently pressed
let upKeyPressed = false;

// Function to set upKeyPressed to true when the up arrow key is pressed
function checkPressUp(event) {
    if (event.keyCode === 38 || event.key === "ArrowUp") {
        upKeyPressed = true;
    }
}

// Function to reset upKeyPressed to false when any key is released
function resetPressUp(event) {
    if (event.keyCode === 38 || event.key === "ArrowUp") {
        upKeyPressed = false;
    }
}

// Add event listeners to the document for keydown and keyup events
document.addEventListener('keydown', checkPressUp);
document.addEventListener('keyup', resetPressUp);

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return upKeyPressed;
}
