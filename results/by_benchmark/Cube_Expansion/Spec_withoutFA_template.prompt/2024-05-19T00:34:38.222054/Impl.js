// Create a variable to track the state of the up arrow key
let isUpKeyPressed = false;

// Add event listeners to the document to listen for keydown and keyup events
document.addEventListener('keydown', function(e) {
    // Check if the key pressed is the up arrow key
    if (e.keyCode === 38) {
        isUpKeyPressed = true;  // Set the state to true when up key is pressed
    }
});

document.addEventListener('keyup', function(e) {
    // Check if the key released is the up arrow key
    if (e.keyCode === 38) {
        isUpKeyPressed = false;  // Set the state back to false when up key is released
    }
});

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return isUpKeyPressed;  // Return the current state of the up arrow key
}
