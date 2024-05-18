// Mockup for the ball object. In a real scenario, this object will be part of the system state.
let ball = {
    position: 50,  // Arbitrary starting position
    leftWall: 0,
    rightWall: 100  // Assume the rightmost wall is at position 100
};

/**
 * Moves the ball to the left by decreasing its position.
 * @param {object} ball - The ball object
 * @return {number} New position of the ball
 */
function moveLeft(ball) {
    // Check if the ball is not at the leftmost position
    if (ball.position > ball.leftWall) {
        ball.position -= 1;  // Move the ball left by decreasing its position
    }
    return ball.position;
}

/**
 * Moves the ball to the right by increasing its position.
 * @param {object} ball - The ball object
 * @return {number} New position of the ball
 */
function moveRight(ball) {
    // Check if the ball is not at the rightmost position
    if (ball.position < ball.rightWall) {
        ball.position += 1;  // Move the ball right by increasing its position
    }
    return ball.position;
}

/**
 * Checks if the ball is at the leftmost wall.
 * @param {object} ball - The ball object
 * @return {boolean} True if the ball is at the leftmost wall, false otherwise
 */
function leftmost(ball) {
    return ball.position === ball.leftWall;
}

/**
 * Checks if the ball is at the rightmost wall.
 * @param {object} ball - The ball object
 * @return {boolean} True if the ball is at the rightmost wall, false otherwise
 */
function rightmost(ball) {
    return ball.position === ball.rightWall;
}

// Examples of using the functions and predicates
console.log("Initial Position:", ball.position);
console.log("Move Left:", moveLeft(ball));
console.log("Move Right:", moveRight(ball));
console.log("Is at Leftmost Wall?", leftmost(ball));
console.log("Is at Rightmost Wall?", rightmost(ball));
