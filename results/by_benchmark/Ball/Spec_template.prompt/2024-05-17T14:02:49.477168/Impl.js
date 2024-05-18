// Function to move the ball to the left
function moveLeft(ball) {
    // Assuming `ball` has a property `position` which can be decremented
    ball.position -= 1;
    return ball; // Returns the updated ball state
}

// Function to move the ball to the right
function moveRight(ball) {
    // Assuming `ball` has a property `position` which can be incremented
    ball.position += 1;
    return ball; // Returns the updated ball state
}

// Predicate to check if the ball is against the leftmost wall
function leftmost(ball) {
    // Assuming there is a known minimum position value that represents the leftmost wall
    const leftmostPosition = 0; // This value would depend on your system setup
    return ball.position === leftmostPosition;
}

// Predicate to check if the ball is against the rightmost wall
function rightmost(ball) {
    // Assuming there is a known maximum position value that represents the rightmost wall
    const rightmostPosition = 10; // This value would need to be defined according to your environment
    return ball.position === rightmostPosition;
}

// Example usage:
let ball = { position: 5 }; // Initial position of the ball
console.log("Initial position: ", ball.position);
ball = moveRight(ball);
console.log("After moving right: ", ball.position);
console.log("Is rightmost? ", rightmost(ball));
ball = moveLeft(ball);
console.log("After moving left: ", ball.position);
console.log("Is leftmost? ", leftmost(ball));
