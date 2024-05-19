// Initialize a variable to store the state of the up arrow key
let upArrowPressed = false;

// Add an event listener to the window to listen for keydown events
window.addEventListener('keydown', function(e) {
    // Check if the pressed key is the up arrow key (keyCode 38)
    if (e.keyCode === 38) {
        upArrowPressed = true;
    }
});

// Add an event listener to the window to listen for keyup events
window.addEventListener('keyup', function(e) {
    // Check if the released key is the up arrow key (keyCode 38)
    if (e.keyCode === 38) {
        upArrowPressed = false;
    }
});

// Define the pressUp predicate function
function pressUp() {
    return upArrowPressed;
}
