/**
 * Function to move the ball to the left.
 * @param {Object} ball - The ball object with its current state.
 * @returns {Object} Updated ball state with direction set to 'left'.
 */
function moveLeft(ball) {
    ball.direction = 'left';
    return ball;
}

/**
 * Function to move the ball to the right.
 * @param {Object} ball - The ball object with its current state.
 * @returns {Object} Updated ball state with direction set to 'right'.
 */
function moveRight(ball) {
    ball.direction = 'right';
    return ball;
}
