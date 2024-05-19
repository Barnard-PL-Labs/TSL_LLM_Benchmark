// Assuming "ball" is an object that stores its "x" position within a "position" property
// Let's also assume that the ball moves on a 1D line from position 0 (leftmost) to position 10 (rightmost)

let ball = {
    position: 5  // starting from the middle
};

// Functions to move the ball left or right
function moveLeft(ball) {
    // Move the ball left by decreasing the x position, ensuring it doesn't go below 0
    if (ball.position > 0) {
        ball.position -= 1;
        return "Moved left";
    }
    return "Already at leftmost position";
}

function moveRight(ball) {
    // Move the ball right by increasing the x position, ensuring it doesn't exceed 10
    if (ball.position < 10) {
        ball.position += 1;
        return "Moved right";
    }
    return "Already at rightmost position";
}

// Predicates to check if the ball is at the leftmost or rightmost positions
function leftmost(ball) {
    return ball.position === 0;
}

function rightmost(ball) {
    return ball.position === 10;
}

// Example usage:
console.log(moveLeft(ball));  // Moves the ball to the left
console.log(moveRight(ball)); // Moves the ball to the right
console.log(leftmost(ball));  // Checks if the ball is at the leftmost position
console.log(rightmost(ball)); // Checks if the ball is at the rightmost position
