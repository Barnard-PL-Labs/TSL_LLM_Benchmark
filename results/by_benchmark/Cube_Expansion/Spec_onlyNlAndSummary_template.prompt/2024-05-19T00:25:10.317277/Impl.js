// Variable to track the state of up arrow key press
let isUpKeyPressed = false;

// Function to update the isUpKeyPressed based on keydown events
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        isUpKeyPressed = true;
    }
});

// Function to update the isUpKeyPressed based on keyup events
document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowUp') {
        isUpKeyPressed = false;
    }
});

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return isUpKeyPressed;
}
