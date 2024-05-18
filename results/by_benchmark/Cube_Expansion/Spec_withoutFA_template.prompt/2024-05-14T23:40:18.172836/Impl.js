// Create an object to keep the state of keyboard keys
let keyboardState = {
    upPressed: false
};

// Event listener for 'keydown' to check if the up arrow key is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowUp") {
        keyboardState.upPressed = true;
    }
});

// Event listener for 'keyup' to reset the state when the up arrow key is released
document.addEventListener('keyup', function(event) {
    if (event.key === "ArrowUp") {
        keyboardState.upPressed = false;
    }
});

// Predicate to check if the up arrow key is currently pressed
function pressUp() {
    return keyboardState.upPressed;
}

// Example usage
console.log("Up key pressed:", pressUp());  // This will log 'false' initially and 'true' when the up arrow key is pressed
