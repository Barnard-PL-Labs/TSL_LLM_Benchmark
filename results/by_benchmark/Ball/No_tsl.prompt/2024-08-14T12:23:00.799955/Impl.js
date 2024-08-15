function updateState({ball}) {
  // Define direction state for the ball if it doesn't exist
  if (ball.direction === undefined) {
    ball.direction = 'right';  // Initialize direction to move right
  }

  // Check if the ball is at the rightmost wall
  if (ball.position === 10) {
    ball.direction = 'left';  // Change direction to left
  }
  // Check if the ball is at the leftmost wall
  else if (ball.position === 0) {
    ball.direction = 'right';  // Change direction to right
  }

  // Update ball position based on direction
  if (ball.direction === 'right') {
    ball.position++;
  } else {
    ball.position--;
  }

  // Output the updated state
  return { ball };
}

// Example usage:
let ballState = { ball: { position: 0 } };  // Ball starting at the leftmost position
console.log(updateState(ballState));  // Expected: { ball: { position: 1, direction: 'right' } }
console.log(updateState(ballState));  // Expected: { ball: { position: 2, direction: 'right' } }
