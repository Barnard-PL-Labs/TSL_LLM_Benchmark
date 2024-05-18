// Assuming 'stepsize' and 'e' are accessible as global variables or via some context

/**
 * Function to multiply the stepsize by 3.
 * @param {number} stepsize - The current step size.
 * @return {number} - The step size multiplied by three.
 */
function multiplyByThree(stepsize) {
    return stepsize * 3;
}

/**
 * Predicate to check if the 'a' key was pressed.
 * @param {string} e - The event or state string indicating which key was pressed.
 * @return {boolean} - True if 'a' key was pressed, false otherwise.
 */
function pressA(e) {
    return e === 'a';
}

/**
 * Predicate to check if the 'b' key was pressed.
 * @param {string} e - The event or state string indicating which key was pressed.
 * @return {boolean} - True if 'b' key was pressed, false otherwise.
 */
function pressB(e) {
    return e === 'b';
}

/**
 * Predicate to check if the 'c' key was pressed.
 * @param {string} e - The event or state string indicating which key was pressed.
 * @return {boolean} - True if 'c' key was pressed, false otherwise.
 */
function pressC(e) {
    return e === 'c';
}

// Example usage:
console.log(multiplyByThree(5));  // Output: 15
console.log(pressA('a'));         // Output: true
console.log(pressB('a'));         // Output: false
console.log(pressC('c'));         // Output: true
