// Assuming 'ball' is an object with 'position' and possibly 'maxPosition' to determine boundaries

/**
 * Moves the ball to the left by decreasing its position.
 * @param {Object} ball The ball object with its current state.
 * @returns {Object} Updated state of the ball after moving left.
 */
function moveLeft(ball) {
    if (!leftmost(ball)) { // Check to prevent moving past the left boundary
        ball.position -= 1;
    }
    return ball;
}

/**
 * Moves the ball to the right by increasing its position.
 * @param {Object} ball The ball object with its current state.
 * @returns {Object} Updated state of the ball after moving right.
 */
function moveRight(ball) {
    if (!rightmost(ball)) { // Check to prevent moving past the right boundary
        ball.position += 1;
    }
    return ball;
}

/**
 * Checks if the ball is against the leftmost wall.
 * @param {Object} ball The ball object with its current state.
 * @returns {boolean} True if the ball is at the leftmost position, otherwise false.
 */
function leftmost(ball) {
    return ball.position === 0; // Assuming '0' is the leftmost position
}

/**
 * Checks if the ball is against the rightmost wall.
 * @param {Object} ball The ball object with its current state.
 * @returns {boolean} True if the ball is at the rightmost position, otherwise false.
 */
function rightmost(ball) {
    return ball.position === ball.maxPosition; // Assuming 'maxPosition' is the rightmost position
}

// Example usage:
let ball = { position: 5, maxPosition: 10 };

// Move ball
console.log("Initial Position:", ball.position);
ball = moveRight(ball);
console.log("Position after moving right:", ball.position);
ball = moveLeft(ball);
console.log("Position after moving left:", ball.position);

// Check positions
console.log("Is leftmost?", leftmost(ball));
console.log("Is rightmost?", rightmost(ball));
