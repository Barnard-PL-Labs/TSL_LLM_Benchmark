function moveLeft(ball) {
  // Assuming 'ball' has a method to update its position
  // Decrements the x position, simulating a move to the left
  ball.position.x -= 1;
  return `Signal to move to left; New position: (${ball.position.x}, ${ball.position.y})`;
}

function moveRight(ball) {
  // Assuming 'ball' has a method to update its position
  // Increments the x position, simulating a move to the right
  ball.position.x += 1;
  return `Signal to move to right; New position: (${ball.position.x}, ${ball.position.y})`;
}
