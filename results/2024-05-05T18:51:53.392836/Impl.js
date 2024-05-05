// Assuming we have some basic setup for 'ball' to simulate its position
// Let's say `ball` is an object with a `position` property simulating its x coordinate on a 1D scale.

// Define the ball object with an initial arbitrary position
let ball = {
  position: 0
};

// Assuming some environment constants
const leftWall = 0;
const rightWall = 10;  // Assuming the ball moves in a range [0, 10]

// Functions
/**
 * moveLeft moves the ball to the left. Decrements the ball's position.
 * If the ball is at the leftmost position (leftWall), it can't move left further.
 * @param {object} ball - The ball object
 * @returns {string} - Returns a signal to move the ball to the left.
 */
function moveLeft(ball) {
  if (ball.position > leftWall) {
    ball.position -= 1;
  }
  return 'MOVE LEFT';
}

/**
 * moveRight moves the ball to the right. Increments the ball's position.
 * If the ball is at the rightmost position (rightWall), it can't move right further.
 * @param {object} ball - The ball object
 * @returns {string} - Returns a signal to move the ball to the right.
 */
function moveRight(ball) {
  if (ball.position < rightWall) {
    ball.position += 1;
  }
  return 'MOVE RIGHT';
}

// Predicates
/**
 * leftmost checks if the ball is at the leftmost position.
 * @param {object} ball - The ball object.
 * @returns {boolean} - True if the ball is in the leftmost position, otherwise false.
 */
function leftmost(ball) {
  return ball.position === leftWall;
}

/**
 * rightmost checks if the ball is at the rightmost position.
 * @param {object} ball - The ball object.
 * @returns {boolean} - True if the ball is in the rightmost position, otherwise false.
 */
function rightmost(ball) {
  return ball.position === rightWall;
}

// Example Usage:
console.log(moveLeft(ball));  // 'MOVE LEFT'
console.log("Is at leftmost:", leftmost(ball));  // false
console.log(moveRight(ball)); // 'MOVE RIGHT'
console.log("Is at rightmost:", rightmost(ball)); // false

// Moving ball to extremes to check boundary conditions
ball.position = leftWall;  // move ball to left wall
console.log("Is at leftmost:", leftmost(ball));  // true
ball.position = rightWall; // move ball to right wall
console.log("Is at rightmost:", rightmost(ball)); // true
