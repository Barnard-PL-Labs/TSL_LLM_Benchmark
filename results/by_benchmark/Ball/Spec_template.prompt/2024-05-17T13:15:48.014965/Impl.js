// Functions to move the ball
function moveLeft(ball) {
    // Assuming 'ball' is an object and it has a method to update its horizontal position (x)
    if (!leftmost(ball)) {
        ball.x -= 1; // Move ball one unit to the left
    }
    return ball; // Return updated state of the ball
}

function moveRight(ball) {
    // Assuming 'ball' is an object and it has a method to update its horizontal position (x)
    if (!rightmost(ball)) {
        ball.x += 1; // Move ball one unit to the right
    }
    return ball; // Return updated state of the ball
}

// Predicates to check if the ball is at the leftmost or rightmost position
function leftmost(ball) {
    // Assuming there's a predefined boundary condition for the leftmost wall
    return ball.x === 0; // Check if ball's x position is at the leftmost wall
}

function rightmost(ball) {
    // Assuming there's a predefined boundary condition for the rightmost wall
    // Assume 'maxX' is the maximum x position (rightmost)
    const maxX = 10; // Example maximum right limit
    return ball.x === maxX; // Check if ball's x position is at the rightmost wall
}
