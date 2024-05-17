if (currentState === 0) {
  if (rightmost(ball) && leftmost(ball)) {
    ball = moveRight(ball)
    currentState = 0
  }
  else if (rightmost(ball) && leftmost(ball)) {
    ball = moveLeft(ball)
    currentState = 0
  }
  else if (rightmost(ball) && leftmost(ball)) {
    ball = ball
    currentState = 0
  }
  else if (rightmost(ball) && !leftmost(ball)) {
    ball = moveLeft(ball)
    currentState = 0
  }
  else if (!rightmost(ball) && leftmost(ball)) {
    ball = moveRight(ball)
    currentState = 0
  }
  else if (!rightmost(ball) && !leftmost(ball)) {
    currentState = 0
  }
}