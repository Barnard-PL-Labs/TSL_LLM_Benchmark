if (currentState === 0) {
  if (!leftmost(ball) && rightmost(ball)) {
    ball = moveLeft(ball)
    currentState = 0
  }
  else if (!leftmost(ball) && !rightmost(ball)) {
    currentState = 1
  }
  else if (leftmost(ball) && rightmost(ball)) {
    currentState = 1
  }
  else if (leftmost(ball) && !rightmost(ball)) {
    ball = moveLeft(ball)
    currentState = 1
  }
}
else if (currentState === 1) {
  if (!leftmost(ball) && rightmost(ball)) {
    ball = moveRight(ball)
    currentState = 0
  }
  else if (!leftmost(ball) && !rightmost(ball)) {
    currentState = 1
  }
  else if (leftmost(ball) && rightmost(ball)) {
    currentState = 1
  }
  else if (leftmost(ball) && !rightmost(ball)) {
    ball = moveRight(ball)
    currentState = 1
  }
}