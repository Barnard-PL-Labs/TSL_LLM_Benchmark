// Define the ball object with an initial position
let ball = {
    position: 5 // Assuming the middle of a scale from 0 to 10
};

// Functions:
function moveLeft(ball) {
    // Move the ball to the left by decreasing its position by 1
    // Ensure that the ball does not cross the leftmost boundary
    if (ball.position > 0) {
        ball.position -= 1;
    }
    return ball.position;
}

function moveRight(ball) {
    // Move the ball to the right by increasing its position by 1
    // Ensure that the ball does not cross the rightmost boundary
    if (ball.position < 10) {
        ball.position += 1;
    }
    return ball.position;
}

// Predicates:
function leftmost(ball) {
    // Check if the ball is at the leftmost position (position 0)
    return ball.position === 0;
}

function rightmost(ball) {
    // Check if the ball is at the rightmost position (position 10)
    return ball.position === 10;
}

// Example Usage:
console.log("Initial Position:", ball.position);
console.log("Move Left:", moveLeft(ball));
console.log("Is Leftmost:", leftmost(ball));
console.log("Move Right:", moveRight(ball));
console.log("Is Rightmost:", rightmost(ball));
