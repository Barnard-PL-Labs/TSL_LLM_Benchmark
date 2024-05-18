// Define a variable to keep track of the up arrow key state
let upKeyPressed = false;

// Add event listener for keydown to detect when the up key is pressed
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 38) { // 38 is the key code for the up arrow key
        upKeyPressed = true;
    }
});

// Add event listener for keyup to reset the up key state when it is released
document.addEventListener('keyup', function(event) {
    if (event.keyCode === 38) {
        upKeyPressed = false;
    }
});

// Predicate function to check if the up key is pressed
function pressUp() {
    return upKeyPressed;
}
