// Initial setup for the ball position
// Assuming the ball can move between positions 0 (leftmost) to 10 (rightmost)
let ball = {
  position: 5 // middle of the range
};

// Functions
function moveLeft(ball) {
  if (ball.position > 0) { // Check if the ball is not already at the leftmost position
    ball.position--;
  }
  return `Moved to ${ball.position}`; // Returns a signal (log) that the ball moved left
}

function moveRight(ball) {
  if (ball.position < 10) { // Check if the ball is not already at the rightmost position
    ball.position++;
  }
  return `Moved to ${ball.position}`; // Returns a signal (log) that the ball moved right
}

// Predicates
function leftmost(ball) {
  return ball.position === 0; // Returns true if the ball is at the leftmost position
}

function rightmost(ball) {
  return ball.position === 10; // Returns true if the ball is at the rightmost position
}

// Usage example: Demonstrating the functions and predicates
console.log(moveLeft(ball));  // Attempt to move ball left
console.log(moveRight(ball)); // Attempt to move ball right
console.log(`Is the ball at the leftmost position? ${leftmost(ball)}`);   // Should return false if not at position 0
console.log(`Is the ball at the rightmost position? ${rightmost(ball)}`); // Should return false if not at position 10
