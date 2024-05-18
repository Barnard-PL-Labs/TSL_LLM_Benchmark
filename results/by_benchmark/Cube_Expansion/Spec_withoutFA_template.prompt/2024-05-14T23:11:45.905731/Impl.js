let upKeyPressed = false;

// Function to check if the up arrow key is pressed
function pressUp() {
    return upKeyPressed;
}

// Set up an event listener for keydown events
document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowUp") {
        upKeyPressed = true;
    }
});

// Set up an event listener for keyup events
document.addEventListener('keyup', function(e) {
    if (e.key === "ArrowUp") {
        upKeyPressed = false;
    }
});
