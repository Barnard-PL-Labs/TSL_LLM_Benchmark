// Assumed ball object structure for demonstration (you can adjust to your actual data structure):
// ball = {
//   position: current position number,
//   leftWall: position of leftmost wall,
//   rightWall: position of rightmost wall
// }

// Functions
function moveLeft(ball) {
  // Move the ball to the left by changing its position
  if (ball.position > ball.leftWall) {
    ball.position -= 1;  // Move left only if it's not at the leftmost wall
  }
  return ball; // Returns the updated state of the ball
}

function moveRight(ball) {
  // Move the ball to the right by changing its position
  if (ball.position < ball.rightWall) {
    ball.position += 1;  // Move right only if it's not at the rightmost wall
  }
  return ball; // Returns the updated state of the ball
}

// Predicates
function leftmost(ball) {
  // Check if the ball is against the leftmost wall
  return ball.position === ball.leftWall;
}

function rightmost(ball) {
  // Check if the ball is against the rightmost wall
  return ball.position === ball.rightWall;
}

// Example usage
let ball = {
  position: 5,
  leftWall: 0,
  rightWall: 10
};

console.log("Initial Position:", ball.position);
ball = moveLeft(ball);
console.log("After moving left:", ball.position);
console.log("Is at leftmost?", leftmost(ball));
ball = moveRight(ball);
ball = moveRight(ball);
console.log("After moving right twice:", ball.position);
console.log("Is at rightmost?", rightmost(ball));
