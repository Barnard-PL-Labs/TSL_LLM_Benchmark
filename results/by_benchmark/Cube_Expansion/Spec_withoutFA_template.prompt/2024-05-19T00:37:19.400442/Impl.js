// Create a variable to represent the state of the up arrow key
let isUpKeyPressed = false;

// Set up an event listener for the keydown event to detect when the up arrow key is pressed
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 38) { // 38 is the keycode for the up arrow key
        isUpKeyPressed = true;
    }
});

// Set up an event listener for the keyup event to reset the state when the up arrow key is released
document.addEventListener('keyup', function(event) {
    if (event.keyCode === 38) {
        isUpKeyPressed = false;
    }
});

// Predicate function that checks if the up arrow key is pressed
function pressUp() {
    return isUpKeyPressed;
}
