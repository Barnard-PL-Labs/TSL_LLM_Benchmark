// Define the functions that modify the state of the 'ball' cell

/**
 * Moves the ball to the left by updating the 'ball' state.
 * @param {object} ball - The current state of the ball.
 * @returns {object} - New state of the ball moved left.
 */
function moveLeft(ball) {
    if (!leftmost(ball)) {
        // Assuming 'x' is a property of 'ball' that defines its horizontal position
        return {...ball, x: ball.x - 1}; // Move the ball left by decreasing x
    }
    return ball; // Return the ball as is if it's at the leftmost position
}

/**
 * Moves the ball to the right by updating the 'ball' state.
 * @param {object} ball - The current state of the ball.
 * @returns {object} - New state of the ball moved right.
 */
function moveRight(ball) {
    if (!rightmost(ball)) {
        // Assuming 'x' is a property of 'ball' that defines its horizontal position
        return {...ball, x: ball.x + 1}; // Move the ball right by increasing x
    }
    return ball; // Return the ball as is if it's at the rightmost position
}

// Define the predicates that check the position of the ball

/**
 * Checks if the ball is against the leftmost wall.
 * @param {object} ball - The current state of the ball.
 * @returns {boolean} - True if the ball is at the leftmost position, false otherwise.
 */
function leftmost(ball) {
    // Assuming 'x' is a property of 'ball' and '0' is the leftmost value
    return ball.x === 0;
}

/**
 * Checks if the ball is against the rightmost wall.
 * @param {object} ball - The current state of the ball.
 * @returns {boolean} - True if the ball is at the rightmost position, false otherwise.
 */
function rightmost(ball) {
    // Assuming 'x' is a property of 'ball' and 'maxX' is the rightmost value (needs to be defined)
    const maxX = 10; // Example: rightmost boundary at x = 10
    return ball.x === maxX;
}

// Example usage
const ball = { x: 5 };
console.log(moveLeft(ball));  // { x: 4 }
console.log(moveRight(ball)); // { x: 6 }
console.log(leftmost(ball));  // false
console.log(rightmost(ball)); // false
