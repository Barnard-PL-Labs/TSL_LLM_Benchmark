// Define global boundaries for the sake of example. You may have these defined elsewhere in your project.
const LEFT_WALL = 0;
const RIGHT_WALL = 100; // assuming the playing area width is 100 units.

// Represents the state of the ball. Let's assume it starts at position 50.
let ball = {
    position: 50
};

/**
 * Moves the ball to the left by decreasing its position by 1.
 * @param {object} ball - The ball object with its current state.
 * @returns {object} - Returns the updated ball object.
 */
function moveLeft(ball) {
    if (ball.position > LEFT_WALL) {
        ball.position -= 1;
    }
    return ball;
}

/**
 * Moves the ball to the right by increasing its position by 1.
 * @param {object} ball - The ball object with its current state.
 * @returns {object} - Returns the updated ball object.
 */
function moveRight(ball) {
    if (ball.position < RIGHT_WALL) {
        ball.position += 1;
    }
    return ball;
}

/**
 * Checks if the ball is at the leftmost position.
 * @param {object} ball - The ball object with its current state.
 * @returns {boolean} - True if the ball is at the leftmost position, otherwise false.
 */
function leftmost(ball) {
    return ball.position === LEFT_WALL;
}

/**
 * Checks if the ball is at the rightmost position.
 * @param {object} ball - The ball object with its current state.
 * @returns {boolean} - True if the ball is at the rightmost position, otherwise false.
 */
function rightmost(ball) {
    return ball.position === RIGHT_WALL;
}

// Example usage
console.log("Initial position:", ball.position);
moveLeft(ball);
console.log("After moving left:", ball.position);
console.log("Is at leftmost?", leftmost(ball));
moveRight(ball);
moveRight(ball);
console.log("After moving right twice:", ball.position);
console.log("Is at rightmost?", rightmost(ball));
