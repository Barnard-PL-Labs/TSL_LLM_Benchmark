// This variable will represent the state of the up arrow key
let isUpKeyPressed = false;

// Adding an event listener to the document for the 'keydown' event
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        isUpKeyPressed = true;
    }
});

// Adding an event listener to the document for the 'keyup' event
document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowUp') {
        isUpKeyPressed = false;
    }
});

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return isUpKeyPressed;
}
