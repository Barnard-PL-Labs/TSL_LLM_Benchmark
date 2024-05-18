// Variable to track the state of the up arrow key
let upKeyPressed = false;

// Add event listeners to the document for keydown and keyup events
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowUp") {
        upKeyPressed = true; // Set to true when the up arrow key is pressed down
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === "ArrowUp") {
        upKeyPressed = false; // Set to false when the up arrow key is released
    }
});

// Predicate function to check if the up arrow key is pressed
function pressUp(e) {
    return upKeyPressed;
}
