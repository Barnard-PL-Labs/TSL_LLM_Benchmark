// State variable to hold the status of the up key
let isUpKeyPressed = false;

// Function to initialize event listeners
function initializeKeyListeners() {
    // Adding keydown event listener
    window.addEventListener('keydown', function(e) {
        if (e.key === "ArrowUp") {
            isUpKeyPressed = true; // Set to true when the up arrow key is pressed
        }
    });

    // Adding keyup event listener 
    window.addEventListener('keyup', function(e) {
        if (e.key === "ArrowUp") {
            isUpKeyPressed = false; // Reset to false when the up arrow key is released
        }
    });
}

// Predicate function to check if the up key is pressed
function pressUp() {
    return isUpKeyPressed;
}

// Call the function to setup event listeners on window load
window.onload = initializeKeyListeners;

// Example usage
// Continuously check if the up arrow key is pressed and log the status
setInterval(() => {
    console.log("Is the up arrow key pressed?", pressUp());
}, 1000);
