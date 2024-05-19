// Mock implementation of a ball object to work with the proposed functions and predicates
let ball = {
    position: 0  // position is zero-based; let's assume 0 is the leftmost, n is rightmost
};

// Function to move the ball to the left
function moveLeft(ball) {
    if (ball.position > 0) {  // Assuming there's a lower bound
        ball.position--;
    }
    return ball.position; // return the new position
}

// Function to move the ball to the right
function moveRight(ball) {
    if (ball.position < 100) {  // Assuming there's an upper bound, say at position 100
        ball.position++;
    }
    return ball.position; // return the new position
}

// Predicate to check if the ball is at the leftmost position
function leftmost(ball) {
    return ball.position === 0;
}

// Predicate to check if the ball is at the rightmost position
function rightmost(ball) {
    return ball.position === 100; // Assuming 100 is the rightmost position
}

// Usage example
console.log("Initial Position:", ball.position);
console.log("Moving left:", moveLeft(ball));  // Move ball to the left
console.log("Is Leftmost:", leftmost(ball));  // Check if it's at the leftmost position
console.log("Moving right:", moveRight(ball)); // Move ball to the right
console.log("Is Rightmost:", rightmost(ball)); // Check if it's at the rightmost position
