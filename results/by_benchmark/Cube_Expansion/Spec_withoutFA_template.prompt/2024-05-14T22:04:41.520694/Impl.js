let upKeyPressed = false;

// Event listener to detect if the up arrow key is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        upKeyPressed = true;
    }
});

// Event listener to reset the flag when the key is released
document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowUp') {
        upKeyPressed = false;
    }
});

// Predicate function to check if the up key is pressed
function pressUp() {
    return upKeyPressed;
}
