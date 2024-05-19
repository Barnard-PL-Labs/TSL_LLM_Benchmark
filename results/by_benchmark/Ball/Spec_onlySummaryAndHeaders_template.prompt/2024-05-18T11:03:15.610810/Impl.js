// Assuming we have an object `ball` which can be manipulated and queried:
// let ball = { position: 0, maxPosition: 100 };

// Function to move the ball to the left
function moveLeft(ball) {
    if (ball.position > 0) {
        ball.position -= 1;  // move the ball left by decreasing its position
    }
    return `Moved left to position ${ball.position}`;
}

// Function to move the ball to the right
function moveRight(ball) {
    if (ball.position < ball.maxPosition) {
        ball.position += 1;  // move the ball right by increasing its position
    }
    return `Moved right to position ${ball.position}`;
}

// Predicate to check if the ball is against the leftmost wall
function leftmost(ball) {
    return ball.position === 0;
}

// Predicate to check if the ball is against the rightmost wall
function rightmost(ball) {
    return ball.position === ball.maxPosition;
}

// Example usage:

// Initialize the ball state
let ball = {
    position: 50,  // starting position
    maxPosition: 100  // maximum possible position (rightmost wall)
};

// Test moving the ball
console.log(moveLeft(ball));  // Should move the ball to the left
console.log(moveRight(ball));  // Should move the ball to the right

// Test predicates
console.log(`Is the ball at the leftmost position? ${leftmost(ball)}`);  // Should return false
console.log(`Is the ball at the rightmost position? ${rightmost(ball)}`);  // Should return false
