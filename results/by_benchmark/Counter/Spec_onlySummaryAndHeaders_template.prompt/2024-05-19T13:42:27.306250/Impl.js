// Functions

/**
 * Multiplies the step size by three.
 * @param {number} stepsize - The current step size.
 * @return {number} - Returns the step size multiplied by three.
 */
function multiplyByThree(stepsize) {
    return stepsize * 3;
}

// Predicates

/**
 * Checks if the 'a' key was pressed.
 * @param {object} e - The event or state object containing key states.
 * @return {boolean} - Returns true if the 'a' key was pressed.
 */
function pressA(e) {
    return e.a === true;
}

/**
 * Checks if the 'b' key was pressed.
 * @param {object} e - The event or state object containing key states.
 * @return {boolean} - Returns true if the 'b' key was pressed.
 */
function pressB(e) {
    return e.b === true;
}

/**
 * Checks if the 'c' key was pressed.
 * @param {object} e - The event or state object containing key states.
 * @return {boolean} - Returns true if the 'c' key was pressed.
 */
function pressC(e) {
    return e.c === true;
}

// Example usage
let stepsize = 2;
let e = { a: true, b: false, c: true };

console.log("Original stepsize:", stepsize);
console.log("Stepsize after multiplying by three:", multiplyByThree(stepsize));

console.log("Did the user press 'a'? ", pressA(e));
console.log("Did the user press 'b'? ", pressB(e));
console.log("Did the user press 'c'? ", pressC(e));
