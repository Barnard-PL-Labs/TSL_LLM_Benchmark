// This variable tracks the state of the up arrow key
let isUpKeyPressed = false;

// Attach event listener for keydown
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 38) {  // 38 is the keyCode for the up arrow key
        isUpKeyPressed = true;
    }
});

// Attach event listener for keyup
document.addEventListener('keyup', function(event) {
    if (event.keyCode === 38) {
        isUpKeyPressed = false;
    }
});

// Predicate that checks if the up key is pressed
function pressUp() {
    return isUpKeyPressed;
}
