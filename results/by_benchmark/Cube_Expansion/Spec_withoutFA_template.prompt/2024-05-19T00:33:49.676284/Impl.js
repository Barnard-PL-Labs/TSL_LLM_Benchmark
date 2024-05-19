// This variable will keep track of the current state of the up arrow key
let isUpKeyPressed = false;

// Adding an event listener to the document to listen for keydown events
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        isUpKeyPressed = true;
    }
});

// Adding an event listener to the document to listen for keyup events
document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowUp') {
        isUpKeyPressed = false;
    }
});

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return isUpKeyPressed;
}
