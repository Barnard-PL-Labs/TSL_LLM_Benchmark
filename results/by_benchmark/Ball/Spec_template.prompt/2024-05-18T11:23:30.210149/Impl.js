// Defining the 'ball' object to simulate the cell
// Let's assume 'ball' has a property 'position' which stores its current position
let ball = {
    position: 0 // Starting position
};

// Functions
function moveLeft(ball) {
    // Decrement the position of the ball to simulate moving to the left
    ball.position -= 1;
    return `Moved left to position ${ball.position}`;
}

function moveRight(ball) {
    // Increment the position of the ball to simulate moving to the right
    ball.position += 1;
    return `Moved right to position ${ball.position}`;
}

// Predicates
function leftmost(ball) {
    // Check if the ball is at the leftmost position. Assuming leftmost wall is at position 0
    return ball.position === 0;
}

function rightmost(ball) {
    // Check if the ball is at the rightmost position. Assuming rightmost wall is at position 10 for example
    return ball.position === 10;
}

// Usage example
console.log(moveLeft(ball));   // "Moved left to position -1"
console.log(moveRight(ball));  // "Moved right to position 0"
console.log(leftmost(ball));   // true
console.log(rightmost(ball));  // false

// Adjust the position and see how it behaves at boundaries
ball.position = 10;
console.log(rightmost(ball));  // true
