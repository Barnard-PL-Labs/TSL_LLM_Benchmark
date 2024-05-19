// Declare a variable to keep track of the up arrow key press state
let isUpKeyPressed = false;

// Add event listener on the document for 'keydown' to detect the up arrow key press
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowUp") {
        isUpKeyPressed = true;
    }
});

// Add event listener for 'keyup' to reset the state when the key is released
document.addEventListener('keyup', function(event) {
    if (event.key === "ArrowUp") {
        isUpKeyPressed = false;
    }
});

// The predicate uses the state of isUpKeyPressed to determine if the up key is currently pressed
function pressUp() {
    return isUpKeyPressed;
}
