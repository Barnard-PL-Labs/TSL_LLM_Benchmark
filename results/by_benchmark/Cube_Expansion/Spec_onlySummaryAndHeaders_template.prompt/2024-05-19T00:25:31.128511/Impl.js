// This variable will keep track of the "up" arrow key state
let isUpKeyPressed = false;

// Set up an event listener for keydown events
document.addEventListener('keydown', function(e) {
    // Check if the key pressed is the up arrow key
    if (e.key === "ArrowUp") {
        isUpKeyPressed = true;
    }
});

// Set up an event listener for keyup events
document.addEventListener('keyup', function(e) {
    // Check if the key released is the up arrow key
    if (e.key === "ArrowUp") {
        isUpKeyPressed = false;
    }
});

// Predicate function to check the state of the up arrow key
function pressUp() {
    return isUpKeyPressed;
}
