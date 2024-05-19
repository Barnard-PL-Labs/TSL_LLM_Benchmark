// Create a variable to maintain the state of the up arrow key
let isUpKeyPressed = false;

// Function to update the isUpKeyPressed variable based on the keydown event
function updateKeyPressState(event) {
    if (event.key === "ArrowUp" || event.keyCode === 38) {
        isUpKeyPressed = true;
    }
}

// Function to reset the isUpKeyPressed variable on keyup
function resetKeyPressState(event) {
    if (event.key === "ArrowUp" || event.keyCode === 38) {
        isUpKeyPressed = false;
    }
}

// Add event listeners to the document for keydown and keyup events
document.addEventListener("keydown", updateKeyPressState);
document.addEventListener("keyup", resetKeyPressState);

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return isUpKeyPressed;
}
