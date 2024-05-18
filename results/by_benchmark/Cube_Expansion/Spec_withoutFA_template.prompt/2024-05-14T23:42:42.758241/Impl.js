// Create a variable to track the state of the up arrow key
let isUpKeyPressed = false;

// Add an event listener to the document for the 'keydown' event
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        isUpKeyPressed = true; // Set to true when the up arrow key is pressed
    }
});

// Add an event listener to the document for the 'keyup' event
document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowUp') {
        isUpKeyPressed = false; // Set to false when the up arrow key is released
    }
});

// Define the predicate function pressUp
function pressUp() {
    return isUpKeyPressed; // Return the current state of the up arrow key
}
