// Function to send a signal to move the ball to the left
function moveLeft(ball) {
    // Assuming the ball has a method to decrease its x-coordinate
    ball.x -= 1;
    return ball; // Returning the updated state of the ball
}

// Function to send a signal to move the ball to the right
function moveRight(ball) {
    // Assuming the ball has a method to increase its x-coordinate
    ball.x += 1;
    return ball; // Returning the updated state of the ball
}
