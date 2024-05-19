// Define a variable to track the state of the up arrow key
let isUpArrowPressed = false;

// Add an event listener to track when the up arrow key is pressed down
window.addEventListener('keydown', function(event) {
    if (event.keyCode === 38) {  // 38 is the keycode for the up arrow key
        isUpArrowPressed = true;
    }
});

// Add an event listener to track when the up arrow key is released
window.addEventListener('keyup', function(event) {
    if (event.keyCode === 38) {
        isUpArrowPressed = false;
    }
});

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return isUpArrowPressed;
}
