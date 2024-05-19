// This variable will hold the state of the up arrow key
let upKeyPressed = false;

// Adding event listener for 'keydown' event
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowUp") {
        upKeyPressed = true;
    }
});

// Adding event listener for 'keyup' event
document.addEventListener('keyup', function(event) {
    if (event.key === "ArrowUp") {
        upKeyPressed = false;
    }
});

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return upKeyPressed;
}
