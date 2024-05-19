// This variable will hold the state of the up arrow key
let pressUpState = false;

// Add an event listener for the keydown event to check if the up arrow key is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowUp") {
        pressUpState = true; // Set the predicate to true when the up key is pressed
    }
});

// Add an event listener for the keyup event to reset the state when the up arrow key is released
document.addEventListener('keyup', function(event) {
    if (event.key === "ArrowUp") {
        pressUpState = false; // Reset the predicate to false when the up key is released
    }
});

// The pressUp predicate function
function pressUp() {
    return pressUpState; // Returns the current state of the up arrow key press
}

// Example usage: Call this function periodically to check the state of the predicate
function checkPressUp() {
    if (pressUp()) {
        console.log("The up arrow key is currently pressed.");
        // Additional actions when the up key is pressed can be added here
    } else {
        console.log("The up arrow key is not pressed.");
    }
}
