// This variable will hold the state of the up arrow key
let isUpPressed = false;

// Add event listener to the document to listen for keydown events
document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowUp") {
        isUpPressed = true;
    }
});

// Add event listener to the document to listen for keyup events
document.addEventListener('keyup', function(e) {
    if (e.key === "ArrowUp") {
        isUpPressed = false;
    }
});

// Predicate that returns true if the up arrow key is currently pressed
function pressUp() {
    return isUpPressed;
}
