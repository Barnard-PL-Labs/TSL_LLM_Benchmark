// Assuming that the ball object has properties such as 'x' for its position,
// 'xmin' for the leftmost boundary, and 'xmax' for the rightmost boundary.

/**
 * Function to move the ball to the left.
 * @param {Object} ball - The ball object with its current position.
 * @returns {Object} Updated ball object with new position.
 */
function moveLeft(ball) {
    // Decrements the x position of the ball, with a boundary check
    if (ball.x > ball.xmin) {
        ball.x -= 1;
    }
    return ball;
}

/**
 * Function to move the ball to the right.
 * @param {Object} ball - The ball object with its current position.
 * @returns {Object} Updated ball object with new position.
 */
function moveRight(ball) {
    // Increments the x position of the ball, with a boundary check
    if (ball.x < ball.xmax) {
        ball.x += 1;
    }
    return ball;
}

/**
 * Predicate to determine if the ball is at the leftmost position.
 * @param {Object} ball - The ball object with its current position.
 * @returns {boolean} True if the ball is at the leftmost position, false otherwise.
 */
function leftmost(ball) {
    return ball.x === ball.xmin;
}

/**
 * Predicate to determine if the ball is at the rightmost position.
 * @param {Object} ball - The ball object with its current position.
 * @returns {boolean} True if the ball is at the rightmost position, false otherwise.
 */
function rightmost(ball) {
    return ball.x === ball.xmax;
}
