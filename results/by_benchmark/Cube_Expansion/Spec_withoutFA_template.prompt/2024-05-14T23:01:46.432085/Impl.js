// Variable to keep track of the up arrow key state
let upKeyPressed = false;

// Add event listener for keydown to detect when the up arrow key is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowUp") {
        upKeyPressed = true;
    }
});

// Add event listener for keyup to reset the state when the up arrow key is released
document.addEventListener('keyup', function(event) {
    if (event.key === "ArrowUp") {
        upKeyPressed = false;
    }
});

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return upKeyPressed;
}
