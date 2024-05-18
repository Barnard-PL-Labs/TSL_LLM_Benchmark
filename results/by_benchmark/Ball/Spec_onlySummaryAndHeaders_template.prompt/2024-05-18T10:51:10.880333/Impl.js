// Define the ball object
let ball = {
  position: 0, // initial position of the ball
  leftWall: 0,  // position of the leftmost wall
  rightWall: 10  // position of the rightmost wall
};

// Functions
function moveLeft(ball) {
  if (ball.position > ball.leftWall) {
    ball.position -= 1;
  }
  return `Signal to move left to position ${ball.position}`;
}

function moveRight(ball) {
  if (ball.position < ball.rightWall) {
    ball.position += 1;
  }
  return `Signal to move right to position ${ball.position}`;
}

// Predicates
function leftmost(ball) {
  return ball.position === ball.leftWall;
}

function rightmost(ball) {
  return ball.position === ball.rightWall;
}

// Example usage:
console.log(moveLeft(ball)); // Move the ball to the left
console.log(moveRight(ball)); // Move the ball to the right
console.log(`Is the ball at the leftmost? ${leftmost(ball)}`); // Check if ball is at the leftmost
console.log(`Is the ball at the rightmost? ${rightmost(ball)}`); // Check if ball is at the rightmost
