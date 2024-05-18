// Assuming 'ball' is an object that has a 'position' property
// For simplicity, let's consider 'position' is a numerical value indicating its position on a line.

// Function to move the ball to the left
function moveLeft(ball) {
    if (!leftmost(ball)) { // check if not at the leftmost position
        ball.position -= 1; // move left by decreasing the position value
    }
    return `Signal to move left sent for position ${ball.position}`;
}

// Function to move the ball to the right
function moveRight(ball) {
    if (!rightmost(ball)) { // check if not at the rightmost position
        ball.position += 1; // move right by increasing the position value
    }
    return `Signal to move right sent for position ${ball.position}`;
}

// Predicate to check if the ball is at the leftmost position
function leftmost(ball) {
    return ball.position === 0; // assuming 0 as the leftmost position
}

// Predicate to check if the ball is at the rightmost position
function rightmost(ball) {
    const rightmostPosition = 10; // assuming 10 as the rightmost position for this example
    return ball.position === rightmostPosition;
}

// Example usage:
let ball = { position: 5 }; // Starting position of the ball

console.log(moveLeft(ball));  // Move ball to the left
console.log(moveRight(ball)); // Try moving right
console.log("Is ball at leftmost position?", leftmost(ball));
console.log("Is ball at rightmost position?", rightmost(ball));
