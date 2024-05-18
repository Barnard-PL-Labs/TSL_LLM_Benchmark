// Variable to keep track of the up arrow key press state
let isUpKeyPressed = false;

// Adding an event listener for the 'keydown' event
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 38) { // 38 is the keycode for the up arrow key
        isUpKeyPressed = true;
    }
});

// Adding an event listener for the 'keyup' event to reset the key press state
document.addEventListener('keyup', function(event) {
    if (event.keyCode === 38) {
        isUpKeyPressed = false;
    }
});

// Predicate function to check if the up key is pressed
function pressUp() {
    return isUpKeyPressed;
}
