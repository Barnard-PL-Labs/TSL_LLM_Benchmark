// Define a variable to hold the state of the up arrow key
let upKeyPressed = false;

// Function to set the state of the up arrow key
function updateUpKeyPress(event) {
    // Check if the key pressed is the 'ArrowUp'
    if (event.key === "ArrowUp") {
        upKeyPressed = true;
    }
}

// Function to reset the state of the up arrow key
function resetUpKeyPress(event) {
    // Reset the state when the key is released
    if (event.key === "ArrowUp") {
        upKeyPressed = false;
    }
}

// Add event listeners to the document
document.addEventListener('keydown', updateUpKeyPress);
document.addEventListener('keyup', resetUpKeyPress);

// Function to check if the up key is pressed
function pressUp() {
    return upKeyPressed;
}
