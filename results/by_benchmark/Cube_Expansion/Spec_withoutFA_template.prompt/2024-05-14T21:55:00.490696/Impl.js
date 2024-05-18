// Define a variable to track if the up arrow key is currently pressed.
let isUpKeyPressed = false;

// Add an event listener to the window to listen for keydown events.
window.addEventListener('keydown', function(e) {
    // Check if the key pressed is the up arrow key (keyCode 38)
    if (e.keyCode === 38) {
        isUpKeyPressed = true;
    }
});

// Add an event listener to the window to listen for keyup events.
window.addEventListener('keyup', function(e) {
    // Check if the key released is the up arrow key (keyCode 38)
    if (e.keyCode === 38) {
        isUpKeyPressed = false;
    }
});

// Predicate to check if the up arrow key is pressed.
function pressUp() {
    return isUpKeyPressed;
}
