// This variable will keep track of whether the 'Up' arrow key is currently being pressed
let isUpKeyPressed = false;

// Function to call when a key is pressed
function handleKeyDown(event) {
    // Check if the key pressed is the 'Up' arrow key
    if (event.keyCode === 38) {
        isUpKeyPressed = true;
    }
}

// Function to call when a key is released
function handleKeyUp(event) {
    // Check if the key released is the 'Up' arrow key
    if (event.keyCode === 38) {
        isUpKeyPressed = false;
    }
}

// Adding event listeners to the document to listen for keydown and keyup events
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

// Predicate function to check if the 'Up' arrow key is pressed
function pressUp() {
    return isUpKeyPressed;
}
