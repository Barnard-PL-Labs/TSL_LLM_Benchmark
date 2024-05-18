// Predicate to check if the up arrow key is pressed
let isUpKeyPressed = false; // This flag tracks the state of the up arrow key

// Set up event listeners to update the flag based on key press
window.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowUp') {
        isUpKeyPressed = true; // Set to true when the up arrow key is pressed
    }
});

window.addEventListener('keyup', function(e) {
    if (e.key === 'ArrowUp') {
        isUpKeyPressed = false; // Reset to false when the up arrow key is released
    }
});

// Example usage of the predicate
function checkIfUpKeyPressed() {
    return isUpKeyPressed;
}

// You can use this function to check the state of the up key press
console.log("Is the UP key pressed?", checkIfUpKeyPressed());
