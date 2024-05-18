function moveLeft(ball) {
    if (!leftmost(ball)) { // Check if it's not already at the leftmost position
        ball.position.x -= 1; // Decrease the x-coordinate to move left
    }
    return ball; // Return updated ball object (or its signal)
}
