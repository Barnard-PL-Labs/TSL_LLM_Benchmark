// This variable will keep track of the current state of the up arrow key
let isUpArrowPressed = false;

// Setting up the event listener for the 'keydown' event
document.addEventListener('keydown', function(event) {
    // Check if the key pressed is the 'ArrowUp'
    if (event.key === "ArrowUp") {
        isUpArrowPressed = true;
    }
});

// Setting up the event listener for the 'keyup' event
document.addEventListener('keyup', function(event) {
    // Reset the isUpArrowPressed when the up arrow key is released
    if (event.key === "ArrowUp") {
        isUpArrowPressed = false;
    }
});

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return isUpArrowPressed;
}
