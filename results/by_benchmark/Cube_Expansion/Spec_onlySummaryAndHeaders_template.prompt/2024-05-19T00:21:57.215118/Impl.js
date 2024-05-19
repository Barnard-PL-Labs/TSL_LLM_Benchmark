// Tracks the state of the up arrow key
let isUpKeyPressed = false;

// Add an event listener to detect when the up arrow key is pressed
document.addEventListener('keydown', function(event) {
    // Check if the key pressed is the up arrow key
    if (event.key === "ArrowUp") {
        isUpKeyPressed = true;
    }
});

// Add an event listener to handle when the up arrow key is released
document.addEventListener('keyup', function(event) {
    // Check if the key released is the up arrow key
    if (event.key === "ArrowUp") {
        isUpKeyPressed = false;
    }
});

// Predicate function to check if the up arrow key is currently pressed
function pressUp() {
    return isUpKeyPressed;
}
