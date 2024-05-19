// Predicate definitions for the vending machine system

/**
 * Checks if the total is less than 0.75
 * @param {number} total - The current total amount in the vending machine
 * @returns {boolean}
 */
function isLessThanPoint75(total) {
    return total < 0.75;
}

/**
 * Checks if the total is less than 1
 * @param {number} total - The current total amount in the vending machine
 * @returns {boolean}
 */
function isLessThanOne(total) {
    return total < 1;
}

/**
 * Checks if the total is less than 1.25
 * @param {number} total - The current total amount in the vending machine
 * @returns {boolean}
 */
function isLessThanOnePoint25(total) {
    return total < 1.25;
}

/**
 * Checks if the 'd' key is pressed
 * @param {object} e - Event object from the vending machine system
 * @returns {boolean}
 */
function pressD(e) {
    return e.key === 'd';
}

/**
 * Checks if the 'q' key is pressed
 * @param {object} e - Event object from the vending machine system
 * @returns {boolean}
 */
function pressQ(e) {
    return e.key === 'q';
}

/**
 * Checks if the 'o' key is pressed
 * @param {object} e - Event object from the vending machine system
 * @returns {boolean}
 */
function pressO(e) {
    return e.key === 'o';
}

/**
 * Checks if the '1' key is pressed
 * @param {object} e - Event object from the vending machine system
 * @returns {boolean}
 */
function press1(e) {
    return e.key === '1';
}

/**
 * Checks if the '2' key is pressed
 * @param {object} e - Event object from the vending machine system
 * @returns {boolean}
 */
function press2(e) {
    return e.key === '2';
}

/**
 * Checks if the '3' key is pressed
 * @param {object} e - Event object from the vending machine system
 * @returns {boolean}
 */
function press3(e) {
    return e.key === '3';
}

/**
 * Checks if the 'r' key is pressed
 * @param {object} e - Event object from the vending machine system
 * @returns {boolean}
 */
function pressR(e) {
    return e.key === 'r';
}
