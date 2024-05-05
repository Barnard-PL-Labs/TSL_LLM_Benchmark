// Assuming "ball" is an object that can hold properties, but we will simply handle functions.

// Functions
function moveLeft(ball) {
  // Return a command or a signal for the ball object to move left.
  // This can be an actual method call or just a return value depending on the system setup.
  ball.direction = 'left';
  return ball;
}

function moveRight(ball) {
  // Return a command or a signal for the ball object to move right.
  ball.direction = 'right';
  return ball;
}

// Predicates
function leftmost(ball) {
  // Return true if the ball is at the leftmost position.
  // As there is no direct API, this will likely be a check against a fixed known position.
  // Assuming 0 is the leftmost boundary in a coordinate system.
  return ball.position === 0;
}

function rightmost(ball) {
  // Return true if the ball is at the rightmost position.
  // This will also be a boundary check against a known maximum position.
  // Assuming `maxPosition` is the rightmost boundary.
  return ball.position === maxPosition;
}

// Example usage:
// Let's pretend "ball" is now an object with properties
let ball = {
  position: 10,
  direction: null
};

const maxPosition = 20; // Assuming the rightmost wall is at position 20

// Moving the ball
moveLeft(ball); // Should set ball.direction to 'left'
console.log(ball); // Output will show ball's direction is 'left'

// Checking positions
console.log("Is the ball leftmost?", leftmost(ball)); // Check if on leftmost wall
console.log("Is the ball rightmost?", rightmost(ball)); // Check if on rightmost wall
