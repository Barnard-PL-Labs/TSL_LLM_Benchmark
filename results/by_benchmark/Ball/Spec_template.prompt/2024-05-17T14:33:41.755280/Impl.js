function moveLeft(ball) {
    // Assuming `ball.x` decreases as the ball moves left
    if (!leftmost(ball)) {
        ball.x -= 1;  // Move left by decrementing the x coordinate
    }
    return ball;  // Return the updated ball object
}

function moveRight(ball) {
    // Assuming `ball.x` increases as the ball moves right
    if (!rightmost(ball)) {
        ball.x += 1;  // Move right by incrementing the x coordinate
    }
    return ball;  // Return the updated ball object
}
