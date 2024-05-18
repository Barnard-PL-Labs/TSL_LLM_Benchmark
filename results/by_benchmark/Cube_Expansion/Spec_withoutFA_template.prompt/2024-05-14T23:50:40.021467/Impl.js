// Variable to keep track of the state of the up arrow key
let upKeyPressed = false;

// Function to handle keydown events
function handleKeyDown(event) {
    if (event.keyCode === 38) {  // 38 is the key code for the up arrow key
        upKeyPressed = true;
    }
}

// Function to handle keyup events
function handleKeyUp(event) {
    if (event.keyCode === 38) {
        upKeyPressed = false;
    }
}

// Adding event listeners to the window for keydown and keyup
window.addEventListener('keydown', handleKeyDown);
window.addEventListener('keyup', handleKeyUp);

// Predicate function to check if the up key is pressed
function pressUp() {
    return upKeyPressed;
}
