// Create a variable to track the state of the up arrow key
let upKeyPressed = false;

// Add event listener to the document for the 'keydown' event
document.addEventListener('keydown', function(event) {
    // Check if the key pressed is the up arrow key
    if (event.key === "ArrowUp") {
        upKeyPressed = true;
    }
});

// Add event listener to the document for the 'keyup' event
document.addEventListener('keyup', function(event) {
    // Check if the key released is the up arrow key
    if (event.key === "ArrowUp") {
        upKeyPressed = false;
    }
});

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return upKeyPressed;
}
