// Create a variable that will hold the state of the up arrow key
let isUpArrowPressed = false;

// Add an event listener to the document to listen for keydown and keyup events
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowUp') {
        isUpArrowPressed = true; // Set the flag to true when the up arrow key is pressed
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key === 'ArrowUp') {
        isUpArrowPressed = false; // Reset the flag to false when the up arrow key is released
    }
});

// Define the predicate function to check the state of the up arrow key
function pressUp() {
    return isUpArrowPressed; // Return the current state of the up arrow key
}
