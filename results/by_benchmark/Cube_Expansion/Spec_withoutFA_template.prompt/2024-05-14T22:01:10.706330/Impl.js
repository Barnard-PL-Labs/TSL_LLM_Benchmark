// Define a variable to keep track of the up arrow key state
let isUpKeyPressed = false;

// Add event listeners to update the state
window.addEventListener('keydown', function(e) {
    if (e.key === "ArrowUp") {
        isUpKeyPressed = true;
    }
});

window.addEventListener('keyup', function(e) {
    if (e.key === "ArrowUp") {
        isUpKeyPressed = false;
    }
});

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return isUpKeyPressed;
}
