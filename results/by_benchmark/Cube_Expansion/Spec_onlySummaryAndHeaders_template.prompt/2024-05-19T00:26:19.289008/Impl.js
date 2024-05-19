// Creating a variable to keep track of whether the up arrow key is pressed
let isUpKeyPressed = false;

// Function to initialize event listeners
function setupKeyListeners() {
    // Adding an event listener for keydown events
    window.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowUp') {  // Check if the pressed key is the up arrow
            isUpKeyPressed = true;
        }
    });

    // Adding an event listener for keyup events
    window.addEventListener('keyup', function(e) {
        if (e.key === 'ArrowUp') {  // Reset the flag when the up arrow key is released
            isUpKeyPressed = false;
        }
    });
}

// Call the setup function to initialize the event listeners
setupKeyListeners();

// Predicate function
function pressUp() {
    return isUpKeyPressed;
}
