// Create a variable to track the state of the up arrow key
let isUpKeyPressed = false;

// Add an event listener for the keydown event
document.addEventListener('keydown', function(e) {
    if (e.keyCode === 38) {  // 38 is the keyCode for the up arrow key
        isUpKeyPressed = true;
    }
});

// Add an event listener for the keyup event to reset the flag
document.addEventListener('keyup', function(e) {
    if (e.keyCode === 38) {
        isUpKeyPressed = false;
    }
});

// Predicate function to check if the up key is pressed
function pressUp() {
    return isUpKeyPressed;
}
