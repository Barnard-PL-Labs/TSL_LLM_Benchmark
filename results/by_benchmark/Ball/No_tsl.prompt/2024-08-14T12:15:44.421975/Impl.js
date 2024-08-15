function updateState({ currentState }) {
    // "currentState" is expected to be an object that includes the current position of the ball
    let { ball } = currentState;

    // Check if the ball is at the leftmost wall
    if (leftmost(ball)) {
        // Since the ball is at the leftmost wall, move it to the right
        ball = moveRight(ball);
    } 
    // Check if the ball is at the rightmost wall
    else if (rightmost(ball)) {
        // Since the ball is at the rightmost wall, move it to the left
        ball = moveLeft(ball);
    } 
    // If the ball is not at either wall
    else {
        // Determine the direction based on the current state's direction attribute
        // If no direction is specified, default to moving right
        if (currentState.direction === 'left') {
            ball = moveLeft(ball);
        } else {
            ball = moveRight(ball);
        }
    }

    // Update the direction of movement for the next state based on current movement
    const direction = (currentState.direction === 'left' && !leftmost(ball)) ? 'left' :
                      (currentState.direction === 'right' && !rightmost(ball)) ? 'right' :
                      !leftmost(ball) ? 'right' : 'left';

    // Return the updated state
    return { currentState: { ball, direction } };
}

// Helper function to simulate the leftmost check
function leftmost(ball) {
    return ball === 0;
}

// Helper function to simulate the rightmost check
function rightmost(ball) {
    return ball === 10;
}

// Function to simulate movement to the left
function moveLeft(ball) {
    return Math.max(0, ball - 1);
}

// Function to simulate movement to the right
function moveRight(ball) {
    return Math.min(10, ball + 1);
}
