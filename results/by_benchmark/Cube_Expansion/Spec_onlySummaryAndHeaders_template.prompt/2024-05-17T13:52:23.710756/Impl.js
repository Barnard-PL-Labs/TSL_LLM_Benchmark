// This object will store the state of the keys
const keyState = {
    upPressed: false
};

// Adding an event listener to the document to listen for 'keydown' and 'keyup' events
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowUp") {
        keyState.upPressed = true;
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === "ArrowUp") {
        keyState.upPressed = false;
    }
});

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return keyState.upPressed;
}
