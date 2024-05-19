let upKeyPressed = false;  // This variable holds the state of the up arrow key

// Add an event listener to the window to listen for keydown events
window.addEventListener('keydown', function(e) {
    if (e.keyCode === 38) {  // 38 is the key code for the up arrow key
        upKeyPressed = true;
    }
});

// Add an event listener to reset the state when the key is released
window.addEventListener('keyup', function(e) {
    if (e.keyCode === 38) {
        upKeyPressed = false;
    }
});

// Predicate function that checks the state of `upKeyPressed`
function pressUp() {
    return upKeyPressed;
}
