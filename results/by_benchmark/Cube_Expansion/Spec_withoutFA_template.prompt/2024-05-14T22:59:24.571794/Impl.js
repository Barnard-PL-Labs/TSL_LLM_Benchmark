// Define a variable that will keep track of the pressing state of the up arrow key
let isUpKeyPressed = false;

// Add an event listener to the document for the "keydown" event
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {  // Check if the key pressed is the up arrow key
        isUpKeyPressed = true;      // Set the isUpKeyPressed flag to true
    }
});

// Add an event listener to the document for the "keyup" event
document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowUp') {  // Check if the key released is the up arrow key
        isUpKeyPressed = false;     // Set the isUpKeyPressed flag back to false
    }
});

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return isUpKeyPressed;
}
