// Assuming there is a global object 'system' to interact with the environment
// which we can use to get or set the state of 'ball' cell

// Functions
function moveLeft(ball) {
  // Assuming 'system.setBallDirection' exists and accepts parameters for ball and direction
  system.setBallDirection(ball, 'left');
  return 'Signal to move left sent';
}

function moveRight(ball) {
  // Similarly assuming 'system.setBallDirection' for moving right
  system.setBallDirection(ball, 'right');
  return 'Signal to move right sent';
}

// Predicates
function leftmost(ball) {
  // Assuming 'system.getBallPosition' returns the position of the ball
  // and 'system.getLeftWallPosition' gives the position of the leftmost wall
  const ballPosition = system.getBallPosition(ball);
  const leftWallPosition = system.getLeftWallPosition();
  return ballPosition === leftWallPosition;
}

function rightmost(ball) {
  // Assuming similar function for getting the rightmost wall position
  const ballPosition = system.getBallPosition(ball);
  const rightWallPosition = system.getRightWallPosition();
  return ballPosition === rightWallPosition;
}
