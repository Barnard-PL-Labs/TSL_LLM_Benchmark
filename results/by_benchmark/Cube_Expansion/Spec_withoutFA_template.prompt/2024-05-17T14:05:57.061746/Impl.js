// Variable to keep track of whether the up key is currently pressed
let isUpKeyPressed = false;

// Setting up event listeners for keydown and keyup events to track the up arrow key state
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowUp") {
        isUpKeyPressed = true; // Set the flag to true when the up key is pressed
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === "ArrowUp") {
        isUpKeyPressed = false; // Reset the flag when the up key is released
    }
});

// Predicate function to check if the up key is pressed
function pressUp() {
    return isUpKeyPressed; // Returns true if the up key is currently pressed, otherwise false
}
