// Define a variable to keep track of the up arrow key state
let isUpKeyPressed = false;

// Add event listeners to the window to detect keydown and keyup events
window.addEventListener('keydown', function(event) {
    // Check if the key pressed is the up arrow key
    if (event.keyCode === 38) {
        isUpKeyPressed = true;
    }
});

window.addEventListener('keyup', function(event) {
    // Check if the key released is the up arrow key
    if (event.keyCode === 38) {
        isUpKeyPressed = false;
    }
});

// Function to check if the up arrow key is currently pressed
function pressUp() {
    return isUpKeyPressed;
}
