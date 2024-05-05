// An object to simulate the ball's environment
let environment = {
  ball: {
    position: 0, // Initial arbitrary position of the ball in a linear track
    leftMost: -10, // Arbitrary left-most boundary
    rightMost: 10 // Arbitrary right-most boundary
  }
};

// Functions
function moveLeft(ball) {
  if (ball.position > ball.leftMost) {
    ball.position -= 1; // Move the ball left by decrementing its position
    return "moved left";
  }
  return "at leftmost position";
}

function moveRight(ball) {
  if (ball.position < ball.rightMost) {
    ball.position += 1; // Move the ball right by incrementing its position
    return "moved right";
  }
  return "at rightmost position";
}

// Predicates
function leftmost(ball) {
  return ball.position === ball.leftMost;
}

function rightmost(ball) {
  return ball.position === ball.rightMost;
}

// Usage
console.log(moveLeft(environment.ball)); // Example to move ball left
console.log(moveRight(environment.ball)); // Example to move ball right
console.log("Is ball at leftmost?", leftmost(environment.ball)); // Check if at leftmost
console.log("Is ball at rightmost?", rightmost(environment.ball)); // Check if at rightmost

// To simulate and test repeatedly:
moveRight(environment.ball);
console.log("After moving right: ", environment.ball.position); // Update position 
console.log("Is ball at rightmost?", rightmost(environment.ball)); // Update check
