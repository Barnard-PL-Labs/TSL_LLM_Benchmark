// Mockup ball object structure for demonstration
let ball = {
  x: 50,          // Current horizontal position
  leftBound: 0,   // Leftmost boundary
  rightBound: 100 // Rightmost boundary
};

// Function: Move the ball to the left
function moveLeft(ball) {
  if (ball.x > ball.leftBound) {
    ball.x -= 1; // Decrement to move left
    return "left signal"; // Simulating a signal
  }
  return "already at leftmost";
}

// Function: Move the ball to the right
function moveRight(ball) {
  if (ball.x < ball.rightBound) {
    ball.x += 1; // Increment to move right
    return "right signal"; // Simulating a signal
  }
  return "already at rightmost";
}

// Predicate: Check if the ball is at the leftmost position
function leftmost(ball) {
  return ball.x === ball.leftBound;
}

// Predicate: Check if the ball is at the rightmost position
function rightmost(ball) {
  return ball.x === ball.rightBound;
}

// Example usage
console.log("Initial position:", ball.x);
console.log(moveLeft(ball)); // Moves ball left
console.log("Position after moveLeft:", ball.x);
console.log("Is leftmost?", leftmost(ball));
console.log(moveRight(ball)); // Moves ball right
console.log("Position after moveRight:", ball.x);
console.log("Is rightmost?", rightmost(ball));
