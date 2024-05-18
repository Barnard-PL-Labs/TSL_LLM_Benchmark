// Variable to hold the state of the up arrow key
let isUpKeyPressed = false;

// Handle keydown event to set isUpKeyPressed to true if the up arrow key is pressed
document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowUp") {
        isUpKeyPressed = true;
    }
});

// Handle keyup event to set isUpKeyPressed to false when the up arrow key is released
document.addEventListener('keyup', function(e) {
    if (e.key === "ArrowUp") {
        isUpKeyPressed = false;
    }
});

// Predicate to check if the up arrow key is currently pressed
function pressUp() {
    return isUpKeyPressed;
}

