// Initialize a state variable to track the state of the up arrow key
let upKeyPressed = false;

// Function to update whether the up key is pressed
function updateUpKeyState(event) {
    if (event.key === "ArrowUp") {
        upKeyPressed = event.type === 'keydown';  // Set true on keydown, false on keyup
    }
}

// Add event listeners for keydown and keyup to track the state of the up arrow key
document.addEventListener('keydown', updateUpKeyState);
document.addEventListener('keyup', updateUpKeyState);

// Predicate function to check if the up arrow key is currently pressed
function pressUp() {
    return upKeyPressed;
}
