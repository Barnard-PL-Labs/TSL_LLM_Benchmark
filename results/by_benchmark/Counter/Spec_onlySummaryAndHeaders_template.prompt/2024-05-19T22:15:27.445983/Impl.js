// Assuming 'stepsize' and 'e' are globally accessible or passed appropriately

// Functions
/**
 * Multiplies the current value of stepsize by 3.
 * @param {number} stepsize - The current step size.
 * @returns {number} - The new step size, which is three times the original.
 */
function multiplyByThree(stepsize) {
    return stepsize * 3;
}

// Predicates
/**
 * Checks if the 'a' key was pressed.
 * @param {Object} e - The event object representing the state of the system.
 * @returns {boolean} - True if the 'a' key was pressed, false otherwise.
 */
function pressA(e) {
    return e.key === 'a';
}

/**
 * Checks if the 'b' key was pressed.
 * @param {Object} e - The event object representing the state of the system.
 * @returns {boolean} - True if the 'b' key was pressed, false otherwise.
 */
function pressB(e) {
    return e.key === 'b';
}

/**
 * Checks if the 'c' key was pressed.
 * @param {Object} e - The event object representing the state of the system.
 * @returns {boolean} - True if the 'c' key was pressed, false otherwise.
 */
function pressC(e) {
    return e.key === 'c';
}

// Example usage:
// Suppose 'e' is an event object that looks like this: { key: 'a' }
console.log(pressA(e)); // Expected output: true
console.log(pressB(e)); // Expected output: false
console.log(pressC(e)); // Expected output: false

// Suppose 'stepsize' starts at 1
let stepsize = 1;
stepsize = multiplyByThree(stepsize);
console.log(stepsize); // Expected output: 3
