// Assuming a cube object is available in the global environment
// This object has a property scale with a sub-property x

// Setting up a variable to monitor the state of the up arrow key
let isUpPressed = false;

// Adding an event listener to the entire document to listen for keydown events
document.addEventListener('keydown', function(event) {
    // Check if the up arrow key (key code 38) is pressed
    if (event.keyCode === 38) {
        isUpPressed = true;
        console.log("Up key is pressed.");
        
        // Example of interaction with cube.scale.x if needed here
        // cube.scale.x = someValue; // Modify cube's scale as required
    }
});

// Adding an event listener to reset the isUpPressed state when the key is released
document.addEventListener('keyup', function(event) {
    if (event.keyCode === 38) {
        isUpPressed = false;
        console.log("Up key is released.");
    }
});

// Function to check if the up arrow key is currently being pressed
function pressUp() {
    return isUpPressed;
}
