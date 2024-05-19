// Predicates related to the "total" cell

/**
 * Checks if the total is less than 0.75.
 * @param {number} total - The total amount in the vending machine.
 * @returns {boolean} True if total is less than 0.75, otherwise false.
 */
function isLessThanPoint75(total) {
    return total < 0.75;
}

/**
 * Checks if the total is less than 1.
 * @param {number} total - The total amount in the vending machine.
 * @returns {boolean} True if total is less than 1, otherwise false.
 */
function isLessThanOne(total) {
    return total < 1;
}

/**
 * Checks if the total is less than 1.25.
 * @param {number} total - The total amount in the vending machine.
 * @returns {boolean} True if total is less than 1.25, otherwise false.
 */
function isLessThanOnePoint25(total) {
    return total < 1.25;
}

// Predicates related to the "e" cell (key press events)

/**
 * Checks if the 'd' key was pressed.
 * @param {Event} e - The event object.
 * @returns {boolean} True if the 'd' key was pressed, otherwise false.
 */
function pressD(e) {
    return e.key === 'd';
}

/**
 * Checks if the 'q' key was pressed.
 * @param {Event} e - The event object.
 * @returns {boolean} True if the 'q' key was pressed, otherwise false.
 */
function pressQ(e) {
    return e.key === 'q';
}

/**
 * Checks if the 'o' key was pressed.
 * @param {Event} e - The event object.
 * @returns {boolean} True if the 'o' key was pressed, otherwise false.
 */
function pressO(e) {
    return e.key === 'o';
}

/**
 * Checks if the '1' key was pressed.
 * @param {Event} e - The event object.
 * @returns {boolean} True if the '1' key was pressed, otherwise false.
 */
function press1(e) {
    return e.key === '1';
}

/**
 * Checks if the '2' key was pressed.
 * @param {Event} e - The event object.
 * @returns {boolean} True if the '2' key was pressed, otherwise false.
 */
function press2(e) {
    return e.key === '2';
}

/**
 * Checks if the '3' key was pressed.
 * @param {Event} e - The event object.
 * @returns {boolean} True if the '3' key was pressed, otherwise false.
 */
function press3(e) {
    return e.key === '3';
}

/**
 * Checks if the 'r' key was pressed.
 * @param {Event} e - The event object.
 * @returns {boolean} True if the 'r' key was pressed, otherwise false.
 */
function pressR(e) {
    return e.key === 'r';
}
