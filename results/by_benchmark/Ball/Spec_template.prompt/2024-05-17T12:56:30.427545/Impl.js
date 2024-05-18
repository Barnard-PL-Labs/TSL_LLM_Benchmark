function moveLeft(ball) {
    // Decrease the x position of the ball to move it left
    if (!leftmost(ball)) {
        ball.x -= 1;
    }
    return `Signal to move ${ball.id} to the left`;
}
