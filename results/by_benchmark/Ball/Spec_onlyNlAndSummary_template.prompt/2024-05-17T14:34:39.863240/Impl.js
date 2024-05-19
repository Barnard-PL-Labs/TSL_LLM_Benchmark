// Define the ball object. Assuming 'position' is a number indicating the horizontal position of the ball.
let ball = {
    position: 0
};

// Define the environment's limits (assuming a simple line from position 0 to 10)
const LEFTMOST_POSITION = 0;
const RIGHTMOST_POSITION = 10;

// Functions
function moveLeft(ball) {
    if (ball.position > LEFTMOST_POSITION) {
        ball.position -= 1; // Move the ball to the left by decreasing its position
    }
    return `Signal to move left: new position is ${ball.position}`;
}

function moveRight(ball) {
    if (ball.position < RIGHTMOST_POSITION) {
        ball.position += 1; // Move the ball to the right by increasing its position
    }
    return `Signal to move right: new position is ${ball.position}`;
}

// Predicates
function leftmost(ball) {
    return ball.position === LEFTMOST_POSITION; // Check if the ball is at the leftmost position
}

function rightmost(ball) {
    return ball.position === RIGHTMOST_POSITION; // Check if the ball is at the rightmost position
}

// Example Usage:
console.log(moveRight(ball)); // Moves the ball right
console.log(moveRight(ball)); // Moves the ball right again
console.log(leftmost(ball));  // Checks if the ball is at the leftmost position
console.log(rightmost(ball)); // Checks if the ball is at the rightmost position
console.log(moveLeft(ball));  // Moves the ball left

