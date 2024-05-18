// Assuming the ball object has a position property and maxPosition is the limit.
// Example ball object: { position: 5, maxPosition: 10 }

// Function to move the ball to the left
function moveLeft(ball) {
    // Check if the ball is not already at the leftmost position
    if (ball.position > 0) {
        return { ...ball, position: ball.position - 1 };
    }
    return ball;
}

// Function to move the ball to the right
function moveRight(ball) {
    // Check if the ball is not already at the rightmost position
    if (ball.position < ball.maxPosition) {
        return { ...ball, position: ball.position + 1 };
    }
    return ball;
}

// Predicate to check if the ball is at the leftmost position
function leftmost(ball) {
    return ball.position === 0;
}

// Predicate to check if the ball is at the rightmost position
function rightmost(ball) {
    return ball.position === ball.maxPosition;
}

// Example usage:
let ball = { position: 0, maxPosition: 10 };

// Trying to move left from the leftmost position
console.log("Initial position:", ball.position);  // Output: 0
ball = moveLeft(ball);
console.log("After moving left:", ball.position);  // Output: 0 (no change as it's already at the leftmost)

// Moving right
ball = moveRight(ball);
console.log("After moving right:", ball.position);  // Output: 1

// Check if it's at leftmost or rightmost
console.log("Is ball at leftmost?", leftmost(ball));  // Output: false
console.log("Is ball at rightmost?", rightmost(ball));  // Output: false
