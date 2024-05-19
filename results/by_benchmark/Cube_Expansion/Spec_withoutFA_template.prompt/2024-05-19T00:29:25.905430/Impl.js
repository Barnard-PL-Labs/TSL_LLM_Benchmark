// Create an object to track the state of the up arrow key
const keyState = {
    upPressed: false
};

// Predicate to check if the up arrow key is pressed
function pressUp() {
    return keyState.upPressed;
}

// Event listener to detect when the up arrow key is pressed down
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp' || event.keyCode === 38) {  // "ArrowUp" for modern browsers, "38" is keyCode for IE
        keyState.upPressed = true;
    }
});

// Event listener to detect when the up arrow key is released
document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowUp' || event.keyCode === 38) {
        keyState.upPressed = false;
    }
});
