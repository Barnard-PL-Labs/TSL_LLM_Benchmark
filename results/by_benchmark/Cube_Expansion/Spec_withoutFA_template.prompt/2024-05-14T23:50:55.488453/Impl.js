// Initialize a variable to track the state of the 'up' arrow key.
let isUpKeyPressed = false;

// Add event listeners to the document to update the state of the 'up' arrow key.
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowUp') {
        isUpKeyPressed = true;
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key === 'ArrowUp') {
        isUpKeyPressed = false;
    }
});

// Create a predicate to check if the 'up' arrow key is pressed.
function pressUp() {
    return isUpKeyPressed;
}
