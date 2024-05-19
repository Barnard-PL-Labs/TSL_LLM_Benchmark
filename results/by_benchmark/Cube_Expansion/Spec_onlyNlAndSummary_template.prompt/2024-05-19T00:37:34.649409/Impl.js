// Create a variable to hold the state of the up arrow key
let isUpKeyPressed = false;

// Add an event listener to the document to listen for keydown events
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        isUpKeyPressed = true;
    }
});

// Add an event listener to the document to listen for keyup events
document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowUp') {
        isUpKeyPressed = false;
    }
});

// Define the predicate function "pressUp"
function pressUp() {
    return isUpKeyPressed;
}
