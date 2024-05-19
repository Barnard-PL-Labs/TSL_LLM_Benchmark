// Define a variable to keep track of the up arrow key press state
let isUpKeyPressed = false;

// Add an event listener for the 'keydown' event to detect when the up arrow key is pressed
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 38) {  // 38 is the keycode for the up arrow key
        isUpKeyPressed = true;
    }
});

// Add an event listener for the 'keyup' event to reset the key press state when the key is released
document.addEventListener('keyup', function(event) {
    if (event.keyCode === 38) {
        isUpKeyPressed = false;
    }
});

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return isUpKeyPressed;
}
