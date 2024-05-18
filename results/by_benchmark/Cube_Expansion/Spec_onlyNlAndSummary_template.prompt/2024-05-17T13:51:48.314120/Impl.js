let upKeyPressed = false;

document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowUp") {
        upKeyPressed = true;
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === "ArrowUp") {
        upKeyPressed = false;
    }
});

// Predicate to check if the up arrow key is pressed
function pressUp() {
    return upKeyPressed;
}
