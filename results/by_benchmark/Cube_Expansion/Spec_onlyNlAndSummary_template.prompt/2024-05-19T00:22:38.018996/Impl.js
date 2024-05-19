// Define a variable to represent the state of the up arrow key
let upKeyPressed = false;

// Add an event listener to the document to listen for 'keydown' and 'keyup' events
document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowUp") {
        upKeyPressed = true;
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key === "ArrowUp") {
        upKeyPressed = false;
    }
});

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return upKeyPressed;
}
