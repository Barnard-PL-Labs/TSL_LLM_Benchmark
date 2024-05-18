// Assuming there is an object 'ball' that contains its current position
const ball = {
    position: 0,
    leftLimit: 0,     // Assuming some predefined leftmost position
    rightLimit: 100   // Assuming some predefined rightmost position
};

/**
 * Function to move the ball to the left
 * @param {object} ball - The ball object
 * @returns {string} - Signal to move the ball left
 */
function moveLeft(ball) {
    if (ball.position > ball.leftLimit) {
        ball.position -= 1; // Move the ball to the left by decreasing its position
        return "move left";
    } else {
        return "can't move left";
    }
}

/**
 * Function to move the ball to the right
 * @param {object} ball - The ball object
 * @returns {string} - Signal to move the ball right
 */
function moveRight(ball) {
    if (ball.position < ball.rightLimit) {
        ball.position += 1; // Move the ball to the right by increasing its position
        return "move right";
    } else {
        return "can't move right";
    }
}

/**
 * Predicate to check if the ball is against the leftmost wall
 * @param {object} ball - The ball object
 * @returns {boolean} - True if ball is at the leftmost position, false otherwise
 */
function leftmost(ball) {
    return ball.position === ball.leftLimit;
}

/**
 * Predicate to check if the ball is against the rightmost wall
 * @param {object} ball - The ball object
 * @returns {boolean} - True if ball is at the rightmost position, false otherwise
 */
function rightmost(ball) {
    return ball.position === ball.rightLimit;
}
