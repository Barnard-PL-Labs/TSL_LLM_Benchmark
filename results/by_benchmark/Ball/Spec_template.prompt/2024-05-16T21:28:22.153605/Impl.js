/**
 * The 'ball' object needs to have properties that track its position along a hypothetical x-axis.
 * We will define these properties and methods on the object.
 */

// Example 'ball' object
let ball = {
    positionX: 0, // Default starting position on the x-axis
    leftWall: 0,  // Position of the leftmost wall
    rightWall: 100 // Position of the rightmost wall, assuming a 100 unit space for simplicity
};

/**
 * Function to move the ball to the left. 
 * It decreases the x position of the ball.
 * 
 * @param {Object} ball - The ball object
 * @returns {string} - Signal to move the ball left
 */
function moveLeft(ball) {
    if (ball.positionX > ball.leftWall) {
        ball.positionX -= 1; // Move the ball 1 unit to the left
        return "Move left signal sent";
    }
    return "Ball is at the leftmost position";
}

/**
 * Function to move the ball to the right. 
 * It increases the x position of the ball.
 * 
 * @param {Object} ball - The ball object
 * @returns {string} - Signal to move the ball right
 */
function moveRight(ball) {
    if (ball.positionX < ball.rightWall) {
        ball.positionX += 1; // Move the ball 1 unit to the right
        return "Move right signal sent";
    }
    return "Ball is at the rightmost position";
}

/**
 * Predicate to check if the ball is at the leftmost position.
 * 
 * @param {Object} ball - The ball object
 * @returns {boolean} - True if the ball is at the leftmost position, false otherwise
 */
function leftmost(ball) {
    return ball.positionX === ball.leftWall;
}

/**
 * Predicate to check if the ball is at the rightmost position.
 * 
 * @param {Object} ball - The ball object
 * @returns {boolean} - True if the ball is at the rightmost position, false otherwise
 */
function rightmost(ball) {
    return ball.positionX === ball.rightWall;
}

// Example usage
console.log(moveLeft(ball));   // Move the ball left
console.log(moveRight(ball));  // Move the ball right
console.log(leftmost(ball));   // Check if the ball is at the leftmost position
console.log(rightmost(ball));  // Check if the ball is at the rightmost position
