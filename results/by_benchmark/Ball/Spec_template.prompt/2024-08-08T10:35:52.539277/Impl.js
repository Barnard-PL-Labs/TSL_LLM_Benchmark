// Function to return a signal to move the ball to the left
function moveLeft(ball) {
    // Assuming 'ball' object has a method to set its direction or position
    // This function modifies the state of 'ball' to indicate movement to the left
    ball.direction = 'left';
    return ball;
}

// Function to return a signal to move the ball to the right
function moveRight(ball) {
    // Similar to moveLeft, but for moving right
    ball.direction = 'right';
    return ball;
}
