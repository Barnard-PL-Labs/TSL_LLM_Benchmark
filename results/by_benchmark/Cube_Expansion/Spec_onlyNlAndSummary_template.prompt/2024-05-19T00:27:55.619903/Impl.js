// Define a variable to hold the state of the up arrow key
let upKeyPressed = false;

// Add an event listener to the document to listen for keydown events
document.addEventListener('keydown', function(event) {
    // Check if the key pressed is the up arrow key (keyCode 38)
    if (event.keyCode === 38) {
        upKeyPressed = true;
    }
});

// Add an event listener to reset the upKeyPressed state on keyup
document.addEventListener('keyup', function(event) {
    // Check if the key released is the up arrow key (keyCode 38)
    if (event.keyCode === 38) {
        upKeyPressed = false;
    }
});

// The predicate function that returns the state of the up arrow key
function pressUp() {
    return upKeyPressed;
}
