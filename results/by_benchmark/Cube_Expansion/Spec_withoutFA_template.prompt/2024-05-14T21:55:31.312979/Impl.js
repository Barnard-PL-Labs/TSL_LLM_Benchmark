// Flag to track the state of the up arrow key
let isUpKeyPressed = false;

// Function to be called when the key is pressed
function handleKeyDown(event) {
    if (event.key === "ArrowUp") {
        isUpKeyPressed = true;
    }
}

// Function to be called when the key is released
function handleKeyUp(event) {
    if (event.key === "ArrowUp") {
        isUpKeyPressed = false;
    }
}

// Setting up event listeners for the keydown and keyup events
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return isUpKeyPressed;
}
