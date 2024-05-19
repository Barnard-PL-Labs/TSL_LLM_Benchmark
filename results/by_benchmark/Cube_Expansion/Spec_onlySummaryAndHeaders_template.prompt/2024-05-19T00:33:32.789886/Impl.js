// Variable to hold the state of the up arrow key
let isUpKeyPressed = false;

// Add event listener to document for 'keydown' event
document.addEventListener('keydown', function(event) {
    // Check if the key pressed is the up arrow key
    if (event.key === 'ArrowUp') {
        isUpKeyPressed = true;
    }
});

// Add event listener to document for 'keyup' event
document.addEventListener('keyup', function(event) {
    // Check if the key released is the up arrow key
    if (event.key === 'ArrowUp') {
        isUpKeyPressed = false;
    }
});

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return isUpKeyPressed;
}
