// Hypothetical properties of the ball object
let environment = {
    ball: {
        position: 5, // Arbitrary starting position
        leftBoundary: 0,
        rightBoundary: 10
    }
};

// Functions
function moveLeft(ball) {
    // Ensure the ball doesn't move past the left boundary
    if (ball.position > ball.leftBoundary) {
        ball.position -= 1;
    }
    return ball; // Return updated ball state
}

function moveRight(ball) {
    // Ensure the ball doesn't move past the right boundary
    if (ball.position < ball.rightBoundary) {
        ball.position += 1;
    }
    return ball; // Return updated ball state
}

// Predicates
function leftmost(ball) {
    return ball.position === ball.leftBoundary;
}

function rightmost(ball) {
    return ball.position === ball.rightBoundary;
}

// Example usage
console.log("Initial Position:", environment.ball.position);
moveLeft(environment.ball);
console.log("After moveLeft:", environment.ball.position);
moveRight(environment.ball);
console.log("After moveRight:", environment.ball.position);

console.log("Is at leftmost?", leftmost(environment.ball));
console.log("Is at rightmost?", rightmost(environment.ball));
