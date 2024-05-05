// Functions to manipulate the ball's state and movement
function moveLeft(ball) {
    // Assuming that there is a method to set the ball's movement direction in the ball object
    if (!leftmost(ball)) {  // Check if it is not against the left wall
        ball.direction = 'left';  // Set direction to left to move the ball left
    }
    return ball;
}

function moveRight(ball) {
    // Similar to moveLeft, but for moving right
    if (!rightmost(ball)) {  // Check if it is not against the right wall
        ball.direction = 'right';  // Set direction to right to move the ball right
    }
    return ball;
}

// Predicates to check the ball's position against boundaries
function leftmost(ball) {
    // Assuming there is a way to get the ball's current position (e.g., ball.x)
    // and there exists a defined leftmost boundary (e.g., LEFT_BOUND)
    return ball.position === LEFT_BOUND;
}

function rightmost(ball) {
    // Similar to leftmost, but checks against the rightmost boundary (e.g., RIGHT_BOUND)
    return ball.position === RIGHT_BOUND;
}
