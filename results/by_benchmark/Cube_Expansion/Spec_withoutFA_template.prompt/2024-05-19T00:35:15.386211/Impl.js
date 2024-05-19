// Predicate state
let upKeyPressed = false;

// Event listener for keydown
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 38) { // 38 is the keycode for the UP arrow key
        upKeyPressed = true;
    }
});

// Event listener for keyup
document.addEventListener('keyup', function(event) {
    if (event.keyCode === 38) { // Reset the state when the UP arrow key is released
        upKeyPressed = false;
    }
});

// Predicate function to check if the UP key is pressed
function pressUp() {
    return upKeyPressed;
}
