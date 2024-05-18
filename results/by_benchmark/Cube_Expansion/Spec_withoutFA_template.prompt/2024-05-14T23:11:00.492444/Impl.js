// Variable to keep track of the up arrow key press state
let upKeyPressed = false;

// Event listener for keydown events
document.addEventListener('keydown', function(event) {
    // Check if the key pressed is the up arrow key
    if (event.key === "ArrowUp") {
        upKeyPressed = true;
    }
});

// Event listener for keyup events to reset the state when the key is released
document.addEventListener('keyup', function(event) {
    // Check if the key released is the up arrow key
    if (event.key === "ArrowUp") {
        upKeyPressed = false;
    }
});

// Predicate to check if the up arrow key is pressed
function pressUp() {
    return upKeyPressed;
}
