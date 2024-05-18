// Variable to track the state of the up arrow key
let upKeyPressed = false;

// Function to update the upKeyPressed variable based on key events
function updateKeyPressState(event) {
    // Check if the key pressed is the up arrow key
    const isUpArrow = event.keyCode === 38; // 38 is the keyCode for the up arrow key

    // Update the upKeyPressed state based on the type of event
    if (event.type === 'keydown' && isUpArrow) {
        upKeyPressed = true;
    } else if (event.type === 'keyup' && isUpArrow) {
        upKeyPressed = false;
    }
}

// Add event listeners for keydown and keyup
document.addEventListener('keydown', updateKeyPressState);
document.addEventListener('keyup', updateKeyPressState);

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return upKeyPressed;
}
