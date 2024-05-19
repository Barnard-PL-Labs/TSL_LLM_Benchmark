// Assuming `ball` is an object with a property `position` indicating its position on a scale

// Define the boundaries of the movement area
const LEFT_WALL = 0;
const RIGHT_WALL = 100; // for example, the right-most boundary of movement

// Functions

/**
 * Moves the ball to the left by decreasing its position.
 * Ensure not to cross the leftmost boundary.
 * @param {Object} ball - The ball object with a position property
 * @returns {string} - Signal to move the ball to the left
 */
function moveLeft(ball) {
    if (ball.position > LEFT_WALL) {
        ball.position -= 1; // move left by decrementing the position
    }
    return "move left";
}

/**
 * Moves the ball to the right by increasing its position.
 * Ensure not to cross the rightmost boundary.
 * @param {Object} ball - The ball object with a position property
 * @returns {string} - Signal to move the ball to the right
 */
function moveRight(ball) {
    if (ball.position < RIGHT_WALL) {
        ball.position += 1; // move right by incrementing the position
    }
    return "move right";
}

// Predicates

/**
 * Checks if the ball is against the leftmost wall.
 * @param {Object} ball - The ball object with a position property
 * @returns {boolean} - True if the ball is at the leftmost position, false otherwise
 */
function leftmost(ball) {
    return ball.position === LEFT_WALL;
}

/**
 * Checks if the ball is against the rightmost wall.
 * @param {Object} ball - The ball object with a position property
 * @returns {boolean} - True if the ball is at the rightmost position, false otherwise
 */
function rightmost(ball) {
    return ball.position === RIGHT_WALL;
}

// Example usage:
let ball = {
    position: 50 // Starting position of the ball
};

console.log(moveLeft(ball));  // Outputs: "move left"
console.log(ball.position);   // Outputs: 49
console.log(leftmost(ball));  // Outputs: false

console.log(moveRight(ball)); // Outputs: "move right"
console.log(ball.position);   // Outputs: 50
console.log(rightmost(ball)); // Outputs: false
