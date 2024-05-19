// We'll maintain a state to track if the 'Up' arrow key is pressed
let isUpArrowPressed = false;

// Function to set the state when the 'Up' arrow key is pressed
function handleKeyDown(event) {
    if (event.key === "ArrowUp") {
        isUpArrowPressed = true;
    }
}

// Function to reset the state when the 'Up' arrow key is released
function handleKeyUp(event) {
    if (event.key === "ArrowUp") {
        isUpArrowPressed = false;
    }
}

// Adding event listeners to the document to listen for keydown and keyup events
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return isUpArrowPressed;
}
