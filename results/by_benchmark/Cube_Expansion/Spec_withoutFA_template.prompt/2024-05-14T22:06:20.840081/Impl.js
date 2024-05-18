// Variable to track the state of the up arrow key
let isUpKeyPressed = false;

// Event listener for 'keydown'
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowUp") {
        isUpKeyPressed = true;
    }
});

// Event listener for 'keyup'
document.addEventListener('keyup', function(event) {
    if (event.key === "ArrowUp") {
        isUpKeyPressed = false;
    }
});

// Predicate to check if the up arrow key is pressed
function pressUp() {
    return isUpKeyPressed;
}
