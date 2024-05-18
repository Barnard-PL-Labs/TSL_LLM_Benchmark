// Creating a state to hold the status of the up arrow key
let isUpKeyPressed = false;

// Adding an event listener to the window to listen for keydown events
window.addEventListener('keydown', function(e) {
    // Check if the pressed key is the up arrow key
    if (e.key === "ArrowUp") {
        isUpKeyPressed = true;
        // Potentially perform an action related to cube.scale.x here
        // cube.scale.x = newValue; // Modify as needed based on your system's API
    }
});

// Adding an event listener to listen for keyup events
window.addEventListener('keyup', function(e) {
    // Reset the up arrow key state when the key is released
    if (e.key === "ArrowUp") {
        isUpKeyPressed = false;
    }
});

// Predicate to check if the up arrow key is pressed
function pressUp() {
    return isUpKeyPressed;
}
