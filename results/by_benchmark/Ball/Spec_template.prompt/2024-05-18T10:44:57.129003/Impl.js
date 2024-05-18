// Assuming 'ball' is an object that holds properties about its position.
// Example structure of 'ball': { position: 0, leftWall: 0, rightWall: 100 }

// Functions
function moveLeft(ball) {
    // Move the ball to the left by decreasing its position
    if (ball.position > ball.leftWall) {
        ball.position -= 1;
    }
    return ball;
}

function moveRight(ball) {
    // Move the ball to the right by increasing its position
    if (ball.position < ball.rightWall) {
        ball.position += 1;
    }
    return ball;
}

// Predicates
function leftmost(ball) {
    // Check if the ball is against the leftmost wall
    return ball.position === ball.leftWall;
}

function rightmost(ball) {
    // Check if the ball is against the rightmost wall
    return ball.position === ball.rightWall;
}

// Usage example
let ball = {
    position: 50,
    leftWall: 0,
    rightWall: 100
};

// Move the ball around and check positions
moveLeft(ball); // ball.position should now be 49
console.log(leftmost(ball)); // Should output false

moveRight(ball); // ball.position goes back to 50
console.log(rightmost(ball)); // Should output false
