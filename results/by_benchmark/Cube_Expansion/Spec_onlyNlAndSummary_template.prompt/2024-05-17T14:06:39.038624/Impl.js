// Define a variable to keep track of whether the up arrow key is pressed
let upKeyPressed = false;

// Add event listeners to track keydown and keyup events for the up arrow key
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

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return upKeyPressed;
}

// Usage example: Check if the up key is pressed
console.log(pressUp());  // This will log 'true' if the up key is currently pressed, 'false' otherwise
