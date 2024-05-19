// Create a variable to track the state of the up arrow key
let isUpKeyPressed = false;

// Attach an event listener to listen for keydown events
window.addEventListener('keydown', (event) => {
    if (event.key === "ArrowUp") {
        isUpKeyPressed = true;
    }
});

// Attach an event listener to listen for keyup events
window.addEventListener('keyup', (event) => {
    if (event.key === "ArrowUp") {
        isUpKeyPressed = false;
    }
});

// Predicate function to check if the up key is pressed
function pressUp() {
    return isUpKeyPressed;
}
