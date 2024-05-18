// Create a variable to track the state of the up key
let upKeyPressed = false;

// Add an event listener to the window to listen for keydown events
window.addEventListener('keydown', function(e) {
    if (e.keyCode === 38) { // 38 is the key code for the up arrow key
        upKeyPressed = true;
    }
});

// Add an event listener to the window to listen for keyup events
window.addEventListener('keyup', function(e) {
    if (e.keyCode === 38) { // 38 is the key code for the up arrow key
        upKeyPressed = false;
    }
});

// The predicate function that checks if the up key is pressed
function pressUp() {
    return upKeyPressed;
}
