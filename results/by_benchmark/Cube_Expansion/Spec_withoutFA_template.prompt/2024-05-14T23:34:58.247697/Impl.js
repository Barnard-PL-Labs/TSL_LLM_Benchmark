let upKeyPressed = false;

// Add event listener for keydown
window.addEventListener('keydown', function(e) {
    if (e.key === "ArrowUp") {
        upKeyPressed = true;
    }
});

// Add event listener for keyup
window.addEventListener('keyup', function(e) {
    if (e.key === "ArrowUp") {
        upKeyPressed = false;
    }
});

// Predicate function to check if the up key is pressed
function pressUp() {
    return upKeyPressed;
}
