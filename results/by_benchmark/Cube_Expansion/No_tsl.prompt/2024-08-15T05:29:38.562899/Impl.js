// State tracking variables
let count = 0.5;
let isKeyUp = true;

// Function to handle key press events
function handleKeyPress(event) {
    if (event.key === "ArrowUp") {
        isKeyUp = false;
    }
}

// Function to handle key release events
function handleKeyRelease(event) {
    if (event.key === "ArrowUp") {
        isKeyUp = true;
        count = 0.5; // Reset count when key is released
    }
}

// Event listeners for key presses and releases
document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keyup', handleKeyRelease);

/**
 * The updateState function updates and returns the state of the cube based on user input.
 * @param {object} state - The current state of the system, including the cube's scale.
 */
function updateState(state) {
    // Increment the count if the up key is pressed
    if (!isKeyUp) {
        count += 1;
    }
    
    // Update the cube's scale.x based on the count
    state.cube.scale.x = count;
    
    // Return the updated state
    return state;
}
