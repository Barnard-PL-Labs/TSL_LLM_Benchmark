// Variable to keep track of the state of the up arrow key
let isUpKeyPressed = false;

// Add an event listener to the window to listen for keydown events
window.addEventListener('keydown', function(e) {
    // Check if the key pressed is the up arrow key
    if (e.key === 'ArrowUp') {
        isUpKeyPressed = true;
    }
});

// Add another event listener to handle keyup events
window.addEventListener('keyup', function(e) {
    // When the up arrow key is released, set the state to false
    if (e.key === 'ArrowUp') {
        isUpKeyPressed = false;
    }
});

// A function to check the state of the up arrow key
function pressUp() {
    return isUpKeyPressed;
}
