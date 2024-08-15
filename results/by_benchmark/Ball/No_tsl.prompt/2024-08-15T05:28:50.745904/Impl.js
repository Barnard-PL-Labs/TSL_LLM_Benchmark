function updateState({ currentState }) {
    let { ball } = currentState;

    // If the ball is at the rightmost wall, it must move left
    if (rightmost(ball)) {
        ball = moveLeft(ball);
    }
    // If the ball is at the leftmost wall, it must move right
    else if (leftmost(ball)) {
        ball = moveRight(ball);
    }
    // If the ball is not at either wall, decide the direction based on previous state
    else {
        if (currentState.direction === 'left') {
            // Continue moving left until reaching the leftmost wall
            ball = moveLeft(ball);
            // Update direction if the ball reaches the leftmost wall
            if (leftmost(ball)) {
                currentState.direction = 'right';
            }
        } else {
            // Continue moving right until reaching the rightmost wall
            ball = moveRight(ball);
            // Update direction if the ball reaches the rightmost wall
            if (rightmost(ball)) {
                currentState.direction = 'left';
            }
        }
    }

    // Return the updated state
    return {
        currentState: {
            ball: ball,
            direction: currentState.direction
        }
    };
}
