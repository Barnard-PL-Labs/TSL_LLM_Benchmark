// Assuming `ball` is an object that can have its state changed through methods or properties
// and that there's an environment or context that interprets these state changes.

// Functions
function moveLeft(ball) {
    // Adjust the ball's position to the left
    // This might typically involve decrementing the x-coordinate of the ball
    ball.x -= 1; // Assuming ball.x denotes the horizontal position of the ball
    return ball; // Returning the updated ball object
}

function moveRight(ball) {
    // Adjust the ball's position to the right
    ball.x += 1; // Assuming ball.x denotes the horizontal position of the ball
    return ball; // Returning the updated ball object
}

// Predicates
function leftmost(ball) {
    // Check if the ball is at the leftmost position
    // Assuming that `0` might represent the leftmost boundary
    return ball.x === 0;
}

function rightmost(ball) {
    // Check if the ball is at the rightmost position
    // Assuming `rightBoundary` is a predefined constant indicating the rightmost boundary
    return ball.x === rightBoundary;
}

// Usage Example
let ball = { x: 5 }; // Example ball object with a starting x position
const rightBoundary = 10; // Define rightmost boundary for the environment

console.log("Initial Position:", ball.x);
ball = moveLeft(ball);
console.log("After moveLeft:", ball.x);
ball = moveRight(ball);
console.log("After moveRight:", ball.x);

console.log("Is at leftmost?", leftmost(ball));
console.log("Is at rightmost?", rightmost(ball));
