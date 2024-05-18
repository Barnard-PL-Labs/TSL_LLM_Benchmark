// Define a variable to track the state of the up arrow key
let upKeyPressed = false;

// Add an event listener for the 'keydown' event to detect when the up arrow key is pressed
document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowUp") {
        upKeyPressed = true;
    }
});

// Add an event listener for the 'keyup' event to detect when the up arrow key is released
document.addEventListener('keyup', function(e) {
    if (e.key === "ArrowUp") {
        upKeyPressed = false;
    }
});

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return upKeyPressed;
}
