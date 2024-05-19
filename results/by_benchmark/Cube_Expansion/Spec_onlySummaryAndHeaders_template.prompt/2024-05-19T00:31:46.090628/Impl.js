// Flag to track the state of the up arrow key
let isUpKeyPressed = false;

// Event listener to detect when the up arrow key is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowUp") {
        isUpKeyPressed = true;
    }
});

// Event listener to detect when the up arrow key is released
document.addEventListener('keyup', function(event) {
    if (event.key === "ArrowUp") {
        isUpKeyPressed = false;
    }
});

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return isUpKeyPressed;
}
