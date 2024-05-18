// Set up a variable to store the state of the up key
let upKeyPressed = false;

// Event listener for keydown events
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        upKeyPressed = true;
    }
});

// Event listener for keyup events to reset the up key state
document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowUp') {
        upKeyPressed = false;
    }
});

// Predicate to check if the up key is pressed
function pressUp() {
    return upKeyPressed;
}
