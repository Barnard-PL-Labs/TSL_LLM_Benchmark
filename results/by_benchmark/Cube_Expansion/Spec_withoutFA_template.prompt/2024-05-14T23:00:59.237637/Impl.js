// Create a variable to track the state of the up arrow key
let isUpKeyPressed = false;

// Function to update the state when the up arrow key is pressed
function updateKeyPressState(event) {
    if (event.key === "ArrowUp") {
        isUpKeyPressed = true;
    } else if (event.key === "ArrowDown") {
        isUpKeyPressed = false;
    }
}

// Add event listeners to track key down and key up events
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
        isUpKeyPressed = true;
    }
});

document.addEventListener("keyup", function(event) {
    if (event.key === "ArrowUp") {
        isUpKeyPressed = false;
    }
});

// Predicate function to check if the up arrow key is pressed
function pressUp() {
    return isUpKeyPressed;
}

// Example usage: Log the state of the 'pressUp' predicate
setInterval(() => {
    console.log("Is Up Arrow Key Pressed?", pressUp());
}, 1000);  // Checks and logs the state every 1 second
