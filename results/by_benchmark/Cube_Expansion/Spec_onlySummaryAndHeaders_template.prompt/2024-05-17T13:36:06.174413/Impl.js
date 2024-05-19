// This variable will track the state of the up arrow key
let upKeyPressed = false;

// Function to set up key event listeners
function setupKeyListeners() {
    // Listen for keydown event
    document.addEventListener('keydown', function(event) {
        if (event.key === "ArrowUp") {
            upKeyPressed = true;
        }
    });

    // Listen for keyup event to reset the upKeyPressed state
    document.addEventListener('keyup', function(event) {
        if (event.key === "ArrowUp") {
            upKeyPressed = false;
        }
    });
}

// Call the function to activate the listeners
setupKeyListeners();

// Predicate function that checks if the up arrow key is pressed
function pressUp() {
    return upKeyPressed;
}
