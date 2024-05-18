// Variable to store the state of the up arrow key
let isUpKeyPressed = false;

// Function to check if the up arrow key is pressed
function pressUp(e) {
    return isUpKeyPressed;
}

// Event listener for keydown
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        isUpKeyPressed = true;
    }
});

// Event listener for keyup
document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowUp') {
        isUpKeyPressed = false;
    }
});
