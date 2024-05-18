// Setting up a global variable to represent the state of the up arrow key.
let upKeyPressed = false;

// Adding an event listener to the document for the keydown event.
document.addEventListener('keydown', function(event) {
    // Check if the key pressed is the up arrow key.
    if (event.key === 'ArrowUp') {
        upKeyPressed = true;
    }
});

// Adding an event listener to the document for the keyup event to reset the state.
document.addEventListener('keyup', function(event) {
    // Check if the key released is the up arrow key.
    if (event.key === 'ArrowUp') {
        upKeyPressed = false;
    }
});

// Predicate to check if the up arrow key is pressed.
function pressUp() {
    return upKeyPressed;
}
