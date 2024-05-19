/**
 * Moves the ball to the left by altering its state.
 * @param {Object} ball - The cell representing the ball.
 */
function moveLeft(ball) {
    ball.signal = 'moveLeft';  // Assuming 'signal' property directs the ball
}

/**
 * Moves the ball to the right by altering its state.
 * @param {Object} ball - The cell representing the ball.
 */
function moveRight(ball) {
    ball.signal = 'moveRight';  // Assuming 'signal' property directs the ball
}
