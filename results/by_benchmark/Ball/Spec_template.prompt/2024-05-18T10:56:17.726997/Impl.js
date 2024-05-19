/**
 * Function to move the ball to the left.
 * @param {Object} ball - A cell representing the ball.
 * @returns {Object} - A signal for moving the ball to the left.
 */
function moveLeft(ball) {
    ball.signal = 'moveLeft';
    return ball.signal;
}

/**
 * Function to move the ball to the right.
 * @param {Object} ball - A cell representing the ball.
 * @returns {Object} - A signal for moving the ball to the right.
 */
function moveRight(ball) {
    ball.signal = 'moveRight';
    return ball.signal;
}

/**
 * Predicate to check if the ball is against the leftmost wall.
 * @param {Object} ball - A cell representing the ball.
 * @returns {boolean} - True if the ball is against the leftmost wall, false otherwise.
 */
function leftmost(ball) {
    return ball.position === 'leftmost';
}

/**
 * Predicate to check if the ball is against the rightmost wall.
 * @param {Object} ball - A cell representing the ball.
 * @returns {boolean} - True if the ball is against the rightmost wall, false otherwise.
 */
function rightmost(ball) {
    return ball.position === 'rightmost';
}
