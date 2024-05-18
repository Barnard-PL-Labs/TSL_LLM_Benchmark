/**
 * Assuming `ball` is an object that can have properties updated to reflect changes.
 */

// Functions
function moveLeft(ball) {
    // Assuming there's a way to set the ball's direction or position
    // Here, we simulate sending a signal by updating a 'direction' property
    ball.direction = 'left';
    return ball;
}

function moveRight(ball) {
    // Similarly, set the ball's direction or position to 'right'
    ball.direction = 'right';
    return ball;
}

// Predicates
function leftmost(ball) {
    // Check if the ball is at the leftmost position
    // Assuming `position` is a property of `ball` indicating its current position
    // '0' might represent the leftmost position in this context
    return ball.position === 0;
}

function rightmost(ball) {
    // Check if the ball is at the rightmost position
    // Assuming there's a predefined limit for the rightmost position, say 'maxPosition'
    return ball.position === ball.maxPosition;
}

// Example usage:
let ball = {
    position: 5,
    maxPosition: 10,
    direction: ''
};

// Move the ball to the left and check if it is on the leftmost position
moveLeft(ball);
console.log("Is the ball at the leftmost position?", leftmost(ball));

// Move the ball to the right and check if it is on the rightmost position
moveRight(ball);
console.log("Is the ball at the rightmost position?", rightmost(ball));
