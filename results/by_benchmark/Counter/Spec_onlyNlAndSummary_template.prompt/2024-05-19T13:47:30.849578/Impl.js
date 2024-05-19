// Functions

/**
 * Multiplies the value of the 'stepsize' by 3.
 * @param {number} stepsize - The current stepsize value.
 * @return {number} The stepsize value multiplied by 3.
 */
function multiplyByThree(stepsize) {
    return stepsize * 3;
}

// Predicates

/**
 * Checks if the 'a' key was pressed.
 * @param {string} e - The current event or signal state.
 * @return {boolean} True if the 'a' key was pressed, false otherwise.
 */
function pressA(e) {
    return e.key === 'a';
}

/**
 * Checks if the 'b' key was pressed.
 * @param {string} e - The current event or signal state.
 * @return {boolean} True if the 'b' key was pressed, false otherwise.
 */
function pressB(e) {
    return e.key === 'b';
}

/**
 * Checks if the 'c' key was pressed.
 * @param {string} e - The current event or signal state.
 * @return {boolean} True if the 'c' key was pressed, false otherwise.
 */
function pressC(e) {
    return e.key === 'c';
}

// Example usage (assuming you have a way to capture keyboard events and pass them to these functions):
document.addEventListener('keydown', function(event) {
    // Simulate 'e' as the event object for key presses
    let e = { key: event.key };

    // Log the output of each predicate function based on the keystroke
    console.log(`Press A: ${pressA(e)}`);
    console.log(`Press B: ${pressB(e)}`);
    console.log(`Press C: ${pressC(e)}`);

    // Assume 'stepsize' is accessible and mutable globally
    let currentStepsize = 1;  // Example stepsize
    console.log(`Original stepsize: ${currentStepsize}`);
    console.log(`Triple stepsize: ${multiplyByThree(currentStepsize)}`);
});
