// Predicate implementation for pressUp

// Create a boolean variable to store the state of the up arrow key
let isUpKeyPressed = false;

// Add event listener for the 'keydown' event
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 38) {  // 38 is the keycode for the up arrow key
        isUpKeyPressed = true;
    }
});

// Add event listener for the 'keyup' event
document.addEventListener('keyup', function(event) {
    if (event.keyCode === 38) {
        isUpKeyPressed = false;
    }
});

// Function to check if the up key is pressed
function pressUp() {
    return isUpKeyPressed;
}

// Example usage
console.log("Is the Up key pressed? ", pressUp());  // Returns true or false based on the up arrow key state
