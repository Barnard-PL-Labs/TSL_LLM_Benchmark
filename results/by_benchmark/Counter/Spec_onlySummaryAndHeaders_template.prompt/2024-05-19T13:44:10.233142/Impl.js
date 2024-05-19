// This variable represents the state of the 'stepsize' cell.
let stepsize = 1;  // Default value for the demonstration. This should be set according to your system's implementation.

// This variable represents the state of the 'e' cell.
let e = { aPressed: false, bPressed: false, cPressed: false };  // A simulated state object for demonstration.

/**
 * Function to multiply the stepsize by 3.
 * @param {number} stepsize - The current value of stepsize.
 * @returns {number} - The stepsize multiplied by 3.
 */
function multiplyByThree(stepsize) {
    return stepsize * 3;
}

/**
 * Predicate to check if the 'a' key was pressed.
 * @param {object} e - The event object containing the state of keys.
 * @returns {boolean} - True if the 'a' key was pressed, false otherwise.
 */
function pressA(e) {
    return e.aPressed;
}

/**
 * Predicate to check if the 'b' key was pressed.
 * @param {object} e - The event object containing the state of keys.
 * @returns {boolean} - True if the 'b' key was pressed, false otherwise.
 */
function pressB(e) {
    return e.bPressed;
}

/**
 * Predicate to check if the 'c' key was pressed.
 * @param {object} e - The event object containing the state of keys.
 * @returns {boolean} - True if the 'c' key was pressed, false otherwise.
 */
function pressC(e) {
    return e.cPressed;
}

// Example usage:
console.log("Multiply stepsize by 3:", multiplyByThree(stepsize));
console.log("Was 'a' pressed?", pressA(e));
console.log("Was 'b' pressed?", pressB(e));
console.log("Was 'c' pressed?", pressC(e));

// Simulating a key press
e.aPressed = true;
console.log("Was 'a' pressed after update?", pressA(e));
