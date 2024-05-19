// Functions

/**
 * Multiplies the stepsize by 3.
 * @param {number} stepsize - Current value of the stepsize cell.
 * @returns {number} - New value of stepsize after multiplication.
 */
function multiplyByThree(stepsize) {
    return stepsize * 3;
}

// Predicates

/**
 * Predicate to check if the 'A' key was pressed.
 * @param {object} e - Event object representing the state of the signal.
 * @returns {boolean} - True if 'A' key is pressed, false otherwise.
 */
function pressA(e) {
    return e.key === 'A' || e.key === 'a';
}

/**
 * Predicate to check if the 'B' key was pressed.
 * @param {object} e - Event object representing the state of the signal.
 * @returns {boolean} - True if 'B' key is pressed, false otherwise.
 */
function pressB(e) {
    return e.key === 'B' || e.key === 'b';
}

/**
 * Predicate to check if the 'C' key was pressed.
 * @param {object} e - Event object representing the state of the signal.
 * @returns {boolean} - True if 'C' key is pressed, false otherwise.
 */
function pressC(e) {
    return e.key === 'C' || e.key === 'c';
}

// Example usage:

// Assuming this is an event object received from somewhere in the system
const exampleKeyEvent = { key: 'a' };

// Testing the multiplyByThree function
console.log("Result of multiplyByThree:", multiplyByThree(5));  // Output should be 15

// Testing the predicates with the example key event
console.log("Did the user press 'A'? ", pressA(exampleKeyEvent));  // Output should be true
console.log("Did the user press 'B'? ", pressB(exampleKeyEvent));  // Output should be false
console.log("Did the user press 'C'? ", pressC(exampleKeyEvent));  // Output should be false
