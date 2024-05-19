// We will create a state variable to keep track of whether the up arrow key is currently pressed
let isUpKeyPressed = false;

// Add event listeners to the document to detect when the up arrow key is pressed and released
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 38) {  // 38 is the key code for the up arrow key
        isUpKeyPressed = true;
    }
});

document.addEventListener('keyup', function(event) {
    if (event.keyCode === 38) {
        isUpKeyPressed = false;
    }
});

// This function acts as a predicate to determine if the up arrow key is currently pressed
function pressUp() {
    return isUpKeyPressed;
}
