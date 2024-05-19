// Assuming 'ball' is an object with properties 'x' for horizontal position.
// Let's also assume there's a game board or environment setup that defines
// the boundaries 'MIN_X' and 'MAX_X' which are the leftmost and rightmost limits respectively.

const MIN_X = 0;  // Example: leftmost boundary
const MAX_X = 300;  // Example: rightmost boundary

// Define the function to move the ball to the left
function moveLeft(ball) {
  if (ball.x > MIN_X) {
    ball.x -= 1;  // Move the ball one unit to the left
    return true;  // Signal successful move
  }
  return false;  // Signal failure (already at leftmost position)
}

// Define the function to move the ball to the right
function moveRight(ball) {
  if (ball.x < MAX_X) {
    ball.x += 1;  // Move the ball one unit to the right
    return true;  // Signal successful move
  }
  return false;  // Signal failure (already at rightmost position)
}

// Define the predicate to check if the ball is against the leftmost wall
function leftmost(ball) {
  return ball.x === MIN_X;
}

// Define the predicate to check if the ball is against the rightmost wall
function rightmost(ball) {
  return ball.x === MAX_X;
}

// Example usage:
let ball = { x: 150 };  // Create a ball object at position x = 150

console.log("Initial position:", ball.x);
moveLeft(ball);
console.log("After moving left:", ball.x);
moveRight(ball);
console.log("After moving right:", ball.x);

console.log("Is at leftmost position?", leftmost(ball));
console.log("Is at rightmost position?", rightmost(ball));
