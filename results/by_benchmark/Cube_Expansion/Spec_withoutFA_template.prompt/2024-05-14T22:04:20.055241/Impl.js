// To store the state of the up arrow key
let isUpKeyPressed = false;

// Add event listeners to track when the up arrow key is pressed and released
window.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowUp') {
        isUpKeyPressed = true;
    }
});

window.addEventListener('keyup', function(e) {
    if (e.key === 'ArrowUp') {
        isUpKeyPressed = false;
    }
});

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return isUpKeyPressed;
}
