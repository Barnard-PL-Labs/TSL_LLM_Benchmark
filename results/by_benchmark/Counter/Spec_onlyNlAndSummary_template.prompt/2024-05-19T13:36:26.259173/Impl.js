// Assuming `stepsize` and `e` are provided in the environment in some fashion
// Here we show a simple representation for demonstration purposes

// A global object to simulate the environment's cell state
let environment = {
    stepsize: 1,
    e: { aPressed: false, bPressed: false, cPressed: false }
};

// Functions

/**
 * Multiplies the stepsize by 3.
 * @param {number} stepsize - The current stepsize value.
 * @returns {number} - New stepsize after multiplication.
 */
function multiplyByThree(stepsize) {
    return stepsize * 3;
}

// Predicates

/**
 * Checks if the 'a' key was pressed.
 * @param {object} e - Object representing the state of key presses.
 * @returns {boolean} - True if 'a' key was pressed, otherwise false.
 */
function pressA(e) {
    return e.aPressed;
}

/**
 * Checks if the 'b' key was pressed.
 * @param {object} e - Object representing the state of key presses.
 * @returns {boolean} - True if 'b' key was pressed, otherwise false.
 */
function pressB(e) {
    return e.bPressed;
}

/**
 * Checks if the 'c' key was pressed.
 * @param {object} e - Object representing the state of key presses.
 * @returns {boolean} - True if 'c' key was pressed, otherwise false.
 */
function pressC(e) {
    return e.cPressed;
}

// Usage Examples

// Update environment as if keys are being pressed
environment.e.aPressed = true;
environment.e.bPressed = false;
environment.e.cPressed = false;

console.log("pressA: ", pressA(environment.e));  // Output: pressA: true
console.log("pressB: ", pressB(environment.e));  // Output: pressB: false
console.log("pressC: ", pressC(environment.e));  // Output: pressC: false

console.log("Original stepsize: ", environment.stepsize);  // Output: Original stepsize: 1
let newStepsize = multiplyByThree(environment.stepsize);
console.log("New stepsize after multiplying by three: ", newStepsize);  // Output: New stepsize after multiplying by three: 3

