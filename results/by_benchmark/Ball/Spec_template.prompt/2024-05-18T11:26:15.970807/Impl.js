// Define the ball object. This might represent the state in a more complete application,
// including its position and perhaps velocity if needed.
let ball = {
    position: 0, // Arbitrary position index, 0 could represent the leftmost side.
    leftLimit: 0, // Leftmost wall position.
    rightLimit: 10 // Rightmost wall position, assume a fixed size for simplicity.
};

/**
 * Function to move the ball to the left
 * @param {object} ball - Ball object with properties including position
 * @returns {string} - Signal to move the ball left
 */
function moveLeft(ball) {
    if (ball.position > ball.leftLimit) {
        ball.position -= 1; // Move the ball left by decreasing its position
    }
    return "moveLeft"; // Return a signal/command as a string
}

/**
 * Function to move the ball to the right
 * @param {object} ball - Ball object with properties including position
 * @returns {string} - Signal to move the ball right
 */
function moveRight(ball) {
    if (ball.position < ball.rightLimit) {
        ball.position += 1; // Move the ball right by increasing its position
    }
    return "moveRight"; // Return a signal/command as a string
}

/**
 * Predicate to check if the ball is against the leftmost wall
 * @param {object} ball - Ball object with properties including position
 * @returns {boolean} - True if the ball is at the leftmost position
 */
function leftmost(ball) {
    return ball.position === ball.leftLimit;
}

/**
 * Predicate to check if the ball is against the rightmost wall
 * @param {object} ball - Ball object with properties including position
 * @returns {boolean} - True if the ball is at the rightmost position
 */
function rightmost(ball) {
    return ball.position === ball.rightLimit;
}

// Example usage:
console.log("Initial Position:", ball.position);
console.log("Move Right Signal:", moveRight(ball));
console.log("New Position:", ball.position);
console.log("Is Rightmost?", rightmost(ball));
console.log("Move Left Signal:", moveLeft(ball));
console.log("New Position after moving left:", ball.position);
console.log("Is Leftmost?", leftmost(ball));
