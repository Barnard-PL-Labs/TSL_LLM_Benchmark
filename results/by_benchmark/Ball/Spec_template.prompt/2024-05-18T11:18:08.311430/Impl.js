/**
 * Moves the ball to the left by decreasing its positionX value.
 * @param {Object} ball - The ball object with its current state.
 * @returns {Object} The updated ball object.
 */
function moveLeft(ball) {
    ball.positionX -= 1;  // Decreases the x-coordinate to simulate movement to the left.
    return ball;
}

/**
 * Moves the ball to the right by increasing its positionX value.
 * @param {Object} ball - The ball object with its current state.
 * @returns {Object} The updated ball object.
 */
function moveRight(ball) {
    ball.positionX += 1;  // Increases the x-coordinate to simulate movement to the right.
    return ball;
}
