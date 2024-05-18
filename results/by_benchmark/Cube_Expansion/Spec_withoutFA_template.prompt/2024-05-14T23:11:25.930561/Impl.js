// Variable to store the state of the up arrow key
let upKeyPressed = false;

// Adding an event listener to the document to listen for keydown events
document.addEventListener('keydown', function(e) {
    // Check if the key pressed is the up arrow key (key code 38)
    if (e.keyCode === 38) {
        upKeyPressed = true;
    }
});

// Adding an event listener to the document to listen for keyup events
document.addEventListener('keyup', function(e) {
    // Reset the upKeyPressed when the up arrow key is released
    if (e.keyCode === 38) {
        upKeyPressed = false;
    }
});

// Predicate function to check if the up arrow key is currently pressed
function pressUp() {
    return upKeyPressed;
}
