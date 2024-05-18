// Define a variable to track the state of the up arrow key
let upKeyPressed = false;

// Add an event listener to the window for the 'keydown' event
window.addEventListener('keydown', function(event) {
    if (event.key === "ArrowUp") {
        upKeyPressed = true;
    }
});

// Add an event listener to the window for the 'keyup' event
window.addEventListener('keyup', function(event) {
    if (event.key === "ArrowUp") {
        upKeyPressed = false;
    }
});

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return upKeyPressed;
}
