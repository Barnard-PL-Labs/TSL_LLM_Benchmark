if (currentState === 0) {
  if (leftmost(ball) && rightmost(ball)) {
    currentState = 0
  }
  else if (!leftmost(ball) && rightmost(ball)) {
    ball = moveLeft(ball)
    currentState = 0
  }
  else if (!rightmost(ball)) {
    ball = moveRight(ball)
    currentState = 0
  }
}