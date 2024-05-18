// Assuming 'ball' is an object that can be manipulated directly:
// For example, ball might look something like this: { position: 0, minPosition: 0, maxPosition: 10 }

/**
 * Moves the ball to the left by updating its position state.
 * @param {object} ball - The ball object with its current state.
 * @returns {object} The updated ball object after moving left.
 */
function moveLeft(ball) {
    // Check if the ball is not at the leftmost position
    if (ball.position > ball.minPosition) {
        ball.position -= 1; // Move the ball one unit to the left
    }
    return ball; // return the updated state of the ball
}

/**
 * Moves the ball to the right by updating its position state.
 * @param {object} ball - The ball object with its current state.
 * @returns {object} The updated ball object after moving right.
 */
function moveRight(ball) {
    // Check if the ball is not at the rightmost position
    if (ball.position < ball.maxPosition) {
        ball.position += 1; // Move the ball one unit to the right
    }
    return ball; // return the updated state of the ball
}

/**
 * Checks if the ball is at the leftmost position.
 * @param {object} ball - The ball object with its current state.
 * @returns {boolean} True if the ball is at the leftmost position, false otherwise.
 */
function leftmost(ball) {
    return ball.position === ball.minPosition;
}

/**
 * Checks if the ball is at the rightmost position.
 * @param {object} ball - The ball object with its current state.
 * @returns {boolean} True if the ball is at the rightmost position, false otherwise.
 */
function rightmost(ball) {
    return ball.position === ball.maxPosition;
}

// Example usage:
let ball = { position: 5, minPosition: 0, maxPosition: 10 };
console.log('Initial Position:', ball.position);
ball = moveLeft(ball);
console.log('After Moving Left:', ball.position);
ball = moveRight(ball);
console.log('After Moving Right:', ball.position);
console.log('Is Leftmost:', leftmost(ball));
console.log('Is Rightmost:', rightmost(ball));
