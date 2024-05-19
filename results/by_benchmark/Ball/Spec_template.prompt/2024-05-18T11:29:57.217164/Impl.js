// Assuming "ball" is an object that might look like this:
// { position: 0, leftWall: 0, rightWall: 100 }

// Functions:
function moveLeft(ball) {
    // Decrease the position of the ball to move it left
    if (ball.position > ball.leftWall) {
        ball.position -= 1;
    }
    return ball.position;
}

function moveRight(ball) {
    // Increase the position of the ball to move it right
    if (ball.position < ball.rightWall) {
        ball.position += 1;
    }
    return ball.position;
}

// Predicates:
function leftmost(ball) {
    // Check if the ball is at the leftmost position
    return ball.position === ball.leftWall;
}

function rightmost(ball) {
    // Check if the ball is at the rightmost position
    return ball.position === ball.rightWall;
}
