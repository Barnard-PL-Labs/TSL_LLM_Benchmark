// Object to hold the state of keys pressed
const keyState = {};

// Initialize the keyState for the up arrow key with false
keyState['ArrowUp'] = false;

// Event listener for keydown
document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowUp") {
        keyState['ArrowUp'] = true;
    }
});

// Event listener for keyup
document.addEventListener('keyup', function(e) {
    if (e.key === "ArrowUp") {
        keyState['ArrowUp'] = false;
    }
});

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return keyState['ArrowUp'];
}
