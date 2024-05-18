// Functions to manipulate the state of 'ball'
function moveLeft(ball) {
    // Assuming 'ball' has a property 'position' to indicate its current position
    // Decrease the 'position' value to simulate moving left
    if (ball.position > 0) { // Check to ensure the ball is not at the boundary
        ball.position--;
    }
    return `Signal to move ball to position ${ball.position}`;
}

function moveRight(ball) {
    // Assuming there's a predefined limit, MAX_POSITION, to how far right the ball can go
    if (ball.position < MAX_POSITION) { // Check to ensure the ball is not at the boundary
        ball.position++;
    }
    return `Signal to move ball to position ${ball.position}`;
}

// Predicates to check the position of 'ball'
function leftmost(ball) {
    // Check if the ball's position is at the leftmost point, assumed to be 0
    return ball.position === 0;
}

function rightmost(ball) {
    // Check if the ball's position is at the rightmost point, assumed to be MAX_POSITION
    return ball.position === MAX_POSITION;
}

// Example usage
const MAX_POSITION = 10; // Defining the right boundary for the ball's movement
let ball = { position: 5 }; // Example ball object with an initial position

// Test moving the ball around
console.log(moveLeft(ball)); // Output depends on the ball's initial position
console.log(moveRight(ball));

// Check positions
console.log(leftmost(ball)); // Returns true if the ball is at the leftmost position
console.log(rightmost(ball)); // Returns true if the ball is at the rightmost position
