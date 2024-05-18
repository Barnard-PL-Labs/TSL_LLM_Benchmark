// Functions to control the ball's movement
function moveLeft(ball) {
    // Assuming `ball` is an object with a property `position`
    // Moving the ball to the left means decreasing the position value
    ball.position -= 1;
    return `Signal to move ball to left at position ${ball.position}`;
}

function moveRight(ball) {
    // Assuming `ball` is an object with a property `position`
    // Moving the ball to the right means increasing the position value
    ball.position += 1;
    return `Signal to move ball to right at position ${ball.position}`;
}

// Predicates to check the position of the ball
function leftmost(ball) {
    // Assuming '0' is the leftmost position
    return ball.position === 0;
}

function rightmost(ball) {
    // Assuming '10' is the rightmost position for example
    return ball.position === 10;
}

// Example usage
let ball = { position: 5 }; // Initialize ball in the middle of the field

// Test moving the ball
console.log(moveLeft(ball)); // Moves to position 4
console.log(moveRight(ball)); // Moves back to position 5
console.log(moveRight(ball)); // Moves to position 6

// Test predicates
console.log("Is ball at leftmost position?", leftmost(ball)); // false
console.log("Is ball at rightmost position?", rightmost(ball)); // false

// Moving the ball to extremes
ball.position = 0;
console.log("Is ball at leftmost position?", leftmost(ball)); // true

ball.position = 10;
console.log("Is ball at rightmost position?", rightmost(ball)); // true
