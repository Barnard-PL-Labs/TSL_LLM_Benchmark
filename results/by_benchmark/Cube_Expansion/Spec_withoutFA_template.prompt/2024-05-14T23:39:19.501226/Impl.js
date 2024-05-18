// Setting up a variable to track the state of the up arrow key
let isUpKeyPressed = false;

// Event listener for keydown
window.addEventListener('keydown', function(e) {
    if (e.keyCode === 38) {  // 38 is the keyCode for the up arrow key
        isUpKeyPressed = true;
    }
});

// Event listener for keyup
window.addEventListener('keyup', function(e) {
    if (e.keyCode === 38) {
        isUpKeyPressed = false;
    }
});

// Predicate function to check if the up key is pressed
function pressUp() {
    return isUpKeyPressed;
}
