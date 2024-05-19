// Variable to track the state of the up arrow key
let upKeyPressed = false;

// Add event listener for keydown
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 38) {  // 38 is the key code for the up arrow key
        upKeyPressed = true;
    }
});

// Add event listener for keyup to reset the state when the key is released
document.addEventListener('keyup', function(event) {
    if (event.keyCode === 38) {
        upKeyPressed = false;
    }
});

// Predicate function to check if the up key is pressed
function pressUp() {
    return upKeyPressed;
}
