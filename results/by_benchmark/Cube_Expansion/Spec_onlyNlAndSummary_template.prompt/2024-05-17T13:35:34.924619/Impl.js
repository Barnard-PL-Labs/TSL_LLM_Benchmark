// Initialize a predicate to keep track of the up arrow key press state
let isUpPressed = false;

// Event listener for keydown events
window.addEventListener('keydown', function(event) {
    if (event.keyCode === 38) {  // 38 is the key code for the up arrow key
        isUpPressed = true;
    }
});

// Event listener for keyup events to reset the predicate
window.addEventListener('keyup', function(event) {
    if (event.keyCode === 38) {
        isUpPressed = false;
    }
});

// Function to check if the up arrow key is pressed
function pressUp() {
    return isUpPressed;
}
