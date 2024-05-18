// Assuming `ball` is an object that can have properties `position` and `signal`.
// Let's also assume a fixed range for the movement of the ball, e.g., between positions 0 (leftmost) to 10 (rightmost).

// Functions:
function moveLeft(ball) {
    // Check if not already at the leftmost wall
    if (ball.position > 0) {
        ball.position -= 1; // Move left
        ball.signal = 'left'; // Set signal to indicate left movement
    }
    return ball.signal;
}

function moveRight(ball) {
    // Check if not already at the rightmost wall
    if (ball.position < 10) {
        ball.position += 1; // Move right
        ball.signal = 'right'; // Set signal to indicate right movement
    }
    return ball.signal;
}

// Predicates:
function leftmost(ball) {
    return ball.position === 0; // Returns true if ball is at the leftmost position
}

function rightmost(ball) {
    return ball.position === 10; // Returns true if ball is at the rightmost position
}

// Usage example:
let ball = { position: 5, signal: '' };

console.log(moveLeft(ball));     // Move ball to the left
console.log(ball);               // Check new state of the ball

console.log(leftmost(ball));     // Check if ball is at the leftmost position
console.log(rightmost(ball));    // Check if ball is at the rightmost position

// Continue moving left and check positions
console.log(moveLeft(ball));
console.log(leftmost(ball));
