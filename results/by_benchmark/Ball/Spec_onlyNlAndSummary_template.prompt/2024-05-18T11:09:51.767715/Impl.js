// Assuming 'ball' is an object with properties that can be manipulated
// Let's also assume it has properties 'position' and 'maxPosition' to determine its location

// Functions
function moveLeft(ball) {
  // Check if ball can move left
  if (ball.position > 0) {
    ball.position -= 1; // Move the ball left by decrementing its position
    return `Signal to move ball to position ${ball.position}`;
  } else {
    return "Ball is already at the leftmost position.";
  }
}

function moveRight(ball) {
  // Check if ball can move right
  if (ball.position < ball.maxPosition) {
    ball.position += 1; // Move the ball right by incrementing its position
    return `Signal to move ball to position ${ball.position}`;
  } else {
    return "Ball is already at the rightmost position.";
  }
}

// Predicates
function leftmost(ball) {
  // Check if the ball is at the leftmost position
  return ball.position === 0;
}

function rightmost(ball) {
  // Check if the ball is at the rightmost position
  return ball.position === ball.maxPosition;
}

// Example usage
let ball = { position: 5, maxPosition: 10 };

console.log(moveLeft(ball));  // Expected output: "Signal to move ball to position 4"
console.log(moveLeft(ball));  // Decrementing position further
console.log(leftmost(ball));  // Expected output: false, since position is not 0

console.log(moveRight(ball)); // Moving to the right
console.log(rightmost(ball)); // Expected output: false, since position is not maxPosition

ball.position = 0;
console.log(leftmost(ball));  // Expected output: true, since position is 0

ball.position = 10;
console.log(rightmost(ball)); // Expected output: true, since position is maxPosition
