// Variable to keep track of the up arrow key state
let upKeyPressed = false;

// Function to update the key state based on keyboard events
function updateUpKeyState(event) {
    if (event.key === "ArrowUp") {
        upKeyPressed = (event.type === 'keydown');
    }
}

// Adding event listeners for keydown and keyup to track the up arrow key state
document.addEventListener('keydown', updateUpKeyState);
document.addEventListener('keyup', updateUpKeyState);

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return upKeyPressed;
}
