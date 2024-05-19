// Assuming 'ball' is an object that contains properties about its position.
// For simplicity, let's consider the ball has a property 'position' on a scale from 0 (left wall) to 100 (right wall).

/**
 * Moves the ball to the left by decreasing its position.
 * Assumes there's a minimum boundary at position 0.
 *
 * @param {object} ball - The ball object with current position.
 * @returns {object} - Updated ball object with the new position.
 */
function moveLeft(ball) {
    // Check if ball is not at the leftmost position
    if (ball.position > 0) {
        ball.position -= 1; // Move left by decreasing the position value
    }
    return ball;
}

/**
 * Moves the ball to the right by increasing its position.
 * Assumes there's a maximum boundary at position 100.
 *
 * @param {object} ball - The ball object with current position.
 * @returns {object} - Updated ball object with the new position.
 */
function moveRight(ball) {
    // Check if ball is not at the rightmost position
    if (ball.position < 100) {
        ball.position += 1; // Move right by increasing the position value
    }
    return ball;
}

/**
 * Determines if the ball is at the leftmost position.
 *
 * @param {object} ball - The ball object with current position.
 * @returns {boolean} - True if the ball is at the leftmost position, otherwise false.
 */
function leftmost(ball) {
    return ball.position === 0;
}

/**
 * Determines if the ball is at the rightmost position.
 *
 * @param {object} ball - The ball object with current position.
 * @returns {boolean} - True if the ball is at the rightmost position, otherwise false.
 */
function rightmost(ball) {
    return ball.position === 100;
}

// Example usage
let ball = { position: 50 }; // Ball starts in the middle
console.log("Initial Ball Position:", ball.position);

ball = moveLeft(ball);
console.log("After moveLeft:", ball.position);

ball = moveRight(ball);
console.log("After moveRight (back to original):", ball.position);

console.log("Is ball at leftmost position?", leftmost(ball));
console.log("Is ball at rightmost position?", rightmost(ball));
