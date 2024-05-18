// Functions:
/**
 * Sends a signal to move the ball to the left.
 * @param {Object} ball - The ball object representing the state of the ball.
 * @returns {string} - Signal to move the ball left.
 */
function moveLeft(ball) {
    // Assuming there's a method to send a signal to the ball
    // This is a placeholder function since the exact API method isn't provided.
    return 'move left';
}

/**
 * Sends a signal to move the ball to the right.
 * @param {Object} ball - The ball object representing the state of the ball.
 * @returns {string} - Signal to move the ball right.
 */
function moveRight(ball) {
    // Assuming there's a method to send a signal to the ball
    // This is a placeholder function since the exact API method isn't provided.
    return 'move right';
}

// Predicates:
/**
 * Checks if the ball is against the leftmost wall.
 * @param {Object} ball - The ball object representing the state of the ball.
 * @returns {boolean} - True if the ball is against the leftmost wall, false otherwise.
 */
function leftmost(ball) {
    // Assuming ball.x represents the x-coordinate of the ball's position
    // and ball.leftLimit represents the leftmost possible position
    return ball.x === ball.leftLimit;
}

/**
 * Checks if the ball is against the rightmost wall.
 * @param {Object} ball - The ball object representing the state of the ball.
 * @returns {boolean} - True if the ball is against the rightmost wall, false otherwise.
 */
function rightmost(ball) {
    // Assuming ball.x represents the x-coordinate of the ball's position
    // and ball.rightLimit represents the rightmost possible position
    return ball.x === ball.rightLimit;
}
