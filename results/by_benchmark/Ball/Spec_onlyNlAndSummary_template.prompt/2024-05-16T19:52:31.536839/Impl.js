// Assuming 'ball' cell is represented by an object with a position property
let ball = {
    position: 0,  // Initial position of the ball
    leftBoundary: 0,  // Leftmost position possible
    rightBoundary: 10  // Rightmost position possible (arbitrary value for demo)
};

/**
 * Functions to move the ball left or right
 * @param {Object} ball - The ball object with a position
 */
function moveLeft(ball) {
    if (ball.position > ball.leftBoundary) {
        ball.position -= 1; // Moves the ball one unit to the left
        return "Signal to move left";
    }
    return "Cannot move left"; // Already at the leftmost position
}

function moveRight(ball) {
    if (ball.position < ball.rightBoundary) {
        ball.position += 1; // Moves the ball one unit to the right
        return "Signal to move right";
    }
    return "Cannot move right"; // Already at the rightmost position
}

/**
 * Predicates to check if the ball is at the leftmost or rightmost position
 * @param {Object} ball - The ball object with a position
 */
function leftmost(ball) {
    return ball.position === ball.leftBoundary;
}

function rightmost(ball) {
    return ball.position === ball.rightBoundary;
}

// Testing the functions and predicates
console.log(moveLeft(ball));  // Expected: "Signal to move left"
console.log(moveLeft(ball));  // Moves until leftmost is reached
console.log(leftmost(ball));  // Expected: true
console.log(moveRight(ball)); // Expected: "Signal to move right"
console.log(rightmost(ball)); // Expected: false
