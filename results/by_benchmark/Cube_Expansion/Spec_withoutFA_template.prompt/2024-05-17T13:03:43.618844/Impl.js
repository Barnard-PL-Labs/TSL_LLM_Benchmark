// This boolean will store the state of the up arrow key.
let isUpKeyPressed = false;

// Event listener for keydown - sets isUpKeyPressed to true if up arrow key (key code 38) is pressed.
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 38) { // 38 is the key code for the up arrow key
        isUpKeyPressed = true;
    }
});

// Event listener for keyup - resets isUpKeyPressed to false when the up arrow key is released.
document.addEventListener('keyup', function(event) {
    if (event.keyCode === 38) {
        isUpKeyPressed = false;
    }
});

// Predicate to check if the up arrow key is pressed.
function pressUp() {
    return isUpKeyPressed;
}
