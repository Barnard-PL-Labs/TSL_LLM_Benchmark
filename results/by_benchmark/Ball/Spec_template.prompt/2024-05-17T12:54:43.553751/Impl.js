// Assuming `ball` is initially at position 5 (middle of 0 to 10 range)
let ball = {
    position: 5
};

// Functions to move the ball left or right
function moveLeft(ball) {
    if (ball.position > 0) { // Ensure ball does not go out of range
        ball.position -= 1;
    }
    return `Signal to move ball to position ${ball.position}`;
}

function moveRight(ball) {
    if (ball.position < 10) { // Ensure ball does not go out of range
        ball.position += 1;
    }
    return `Signal to move ball to position ${ball.position}`;
}

// Predicates to check if the ball is at the boundaries
function leftmost(ball) {
    return ball.position === 0;
}

function rightmost(ball) {
    return ball.position === 10;
}

// Example usage:
console.log(moveLeft(ball)); // Moves the ball to the left
console.log("Is the ball at the leftmost position?", leftmost(ball)); // Checks if the ball is at the leftmost position
console.log(moveRight(ball)); // Moves the ball to the right
console.log("Is the ball at the rightmost position?", rightmost(ball)); // Checks if the ball is at the rightmost position

// Additional movements for testing
console.log(moveLeft(ball));
console.log(moveLeft(ball));
console.log("Is the ball at the leftmost position?", leftmost(ball));
console.log(moveRight(ball));
console.log(moveRight(ball));
console.log("Is the ball at the rightmost position?", rightmost(ball));
