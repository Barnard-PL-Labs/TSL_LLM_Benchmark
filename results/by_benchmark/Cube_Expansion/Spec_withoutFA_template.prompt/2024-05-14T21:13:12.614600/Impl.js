// Initialize a state to store the status of the up arrow key
let upKeyPressed = false;

// Add event listener for keydown
window.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowUp') {
        upKeyPressed = true; // Update the state when up arrow key is pressed
    }
});

// Add event listener for keyup to reset the state
window.addEventListener('keyup', function(event) {
    if (event.code === 'ArrowUp') {
        upKeyPressed = false; // Reset the state when up arrow key is released
    }
});

// In the TSL environment, 'pressUp(e)' would check the 'upKeyPressed'
