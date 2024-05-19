// Assuming the "ball" object has a property .position indicating its position on a hypothetical x-axis
// and .leftWall and .rightWall indicating the positions of the walls.

const ball = {
    position: 0,  // Initial position of the ball
    leftWall: -10, // Position of the leftmost wall
    rightWall: 10  // Position of the rightmost wall
};

// Functions:

/**
 * Moves the ball to the left
 * @param {Object} ball - The ball object
 * @returns {Object} Updated state of the ball after moving left
 */
function moveLeft(ball) {
    // Check if the ball is not at the leftmost position
    if (!leftmost(ball)) {
        ball.position -= 1;  // move the ball one unit to the left
    }
    return ball;
}

/**
 * Moves the ball to the right
 * @param {Object} ball - The ball object
 * @returns {Object} Updated state of the ball after moving right
 */
function moveRight(ball) {
    // Check if the ball is not at the rightmost position
    if (!rightmost(ball)) {
        ball.position += 1;  // move the ball one unit to the right
    }
    return ball;
}

// Predicates:

/**
 * Checks if the ball is at the leftmost position
 * @param {Object} ball - The ball object
 * @returns {boolean} True if the ball is at the leftmost position, false otherwise
 */
function leftmost(ball) {
    return ball.position <= ball.leftWall;
}

/**
 * Checks if the ball is at the rightmost position
 * @param {Object} ball - The ball object
 * @returns {boolean} True if the ball is at the rightmost position, false otherwise
 */
function rightmost(ball) {
    return ball.position >= ball.rightWall;
}

// Example usage:
console.log("Initial Position:", ball.position);
moveRight(ball);
console.log("After moving Right:", ball.position);
moveLeft(ball);
console.log("After moving Left:", ball.position);
console.log("Is at leftmost:", leftmost(ball));
console.log("Is at rightmost:", rightmost(ball));
