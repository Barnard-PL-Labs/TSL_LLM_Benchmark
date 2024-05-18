// We'll use a variable to represent the state of the 'Up' arrow key.
let upKeyPressed = false;

// Adding an event listener to the window object to listen for 'keydown' events.
// This will set upKeyPressed to true when the 'Up' arrow key is pressed.
window.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowUp') {
        upKeyPressed = true;
    }
});

// Adding an event listener to reset the upKeyPressed when the key is released
window.addEventListener('keyup', function(e) {
    if (e.key === 'ArrowUp') {
        upKeyPressed = false;
    }
});

// Predicate function to check if the 'Up' arrow key is pressed.
function pressUp() {
    return upKeyPressed;
}
