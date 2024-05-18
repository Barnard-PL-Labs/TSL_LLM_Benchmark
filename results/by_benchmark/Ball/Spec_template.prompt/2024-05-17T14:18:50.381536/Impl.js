function moveLeft(ball) {
  // Assuming 'ball.position' keeps track of the ball's horizontal position
  // This function decrements the position to move the ball left
  ball.position--;
  return `Signal to move ball to position ${ball.position}`;
}

function moveRight(ball) {
  // Similar to 'moveLeft', but increments the position to move the ball right
  ball.position++;
  return `Signal to move ball to position ${ball.position}`;
}
