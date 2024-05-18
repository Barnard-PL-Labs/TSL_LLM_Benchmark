// Assuming the ball object structure for the purpose of this implementation
let ball = {
    position: 0,    // Numeric representation of ball position
    leftWall: -10,  // Position of leftmost wall
    rightWall: 10   // Position of rightmost wall
};

/**
 * Functions to control the ball's movement
 */

// Move the ball to the left
function moveLeft(ball) {
    if (!leftmost(ball)) {
        ball.position -= 1;  // Move left by decreasing position
    }
    return `Move ball to position ${ball.position}`;
}

// Move the ball to the right
function moveRight(ball) {
    if (!rightmost(ball)) {
        ball.position += 1;  // Move right by increasing position
    }
    return `Move ball to position ${ball.position}`;
}

/**
 * Predicates to check the ball's position relative to the walls
 */

// Check if the ball is at the leftmost position
function leftmost(ball) {
    return ball.position <= ball.leftWall;
}

// Check if the ball is at the rightmost position
function rightmost(ball) {
    return ball.position >= ball.rightWall;
}

/**
 * Testing the implementation
 */

// Test moving the ball
console.log(moveLeft(ball));    // Should move the ball left
console.log(moveRight(ball));   // Should move the ball right
console.log(moveLeft(ball));    // Should move the ball left

// Test predicates
console.log(leftmost(ball));    // Should return false unless the ball is at the leftmost position
console.log(rightmost(ball));   // Should return false unless the ball is at the rightmost position

// Move to the leftmost position for testing
while (!leftmost(ball)) {
    moveLeft(ball);
}
console.log(leftmost(ball));    // Should now return true

// Move to the rightmost position for testing
while (!rightmost(ball)) {
    moveRight(ball);
}
console.log(rightmost(ball));   // Should now return true
