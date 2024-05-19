// Define a variable to keep the state of the up arrow key
let upKeyPressed = false;

// Add an event listener for 'keydown' to check if the up arrow key is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        upKeyPressed = true;
    }
});

// Add an event listener for 'keyup' to reset the state when the up key is released
document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowUp') {
        upKeyPressed = false;
    }
});

// Predicate function to check if the up key is pressed
function pressUp() {
    return upKeyPressed;
}
