if (currentState === 0) {
  if (!leftmost(ball)) {
    ball = moveLeft(ball)
    currentState = 1
  }
  else if (leftmost(ball) && !rightmost(ball)) {
    ball = moveRight(ball)
    currentState = 2
  }
  else if (leftmost(ball) && rightmost(ball)) {
    ball = ball
    currentState = 3
  }
  else if (leftmost(ball) && rightmost(ball)) {
    ball = moveRight(ball)
    currentState = 3
  }
  else if (leftmost(ball) && rightmost(ball)) {
    ball = moveLeft(ball)
    currentState = 3
  }
}
else if (currentState === 1) {
  if (!leftmost(ball) && !rightmost(ball)) {
    ball = moveLeft(ball)
    currentState = 1
  }
  else if (rightmost(ball)) {
    currentState = 2
  }
  else if (rightmost(ball)) {
    ball = moveLeft(ball)
    ball = moveRight(ball)
    currentState = 2
  }
  else if (rightmost(ball)) {
    ball = moveLeft(ball)
    ball = ball
    currentState = 2
  }
  else if (rightmost(ball)) {
    ball = moveRight(ball)
    ball = ball
    currentState = 2
  }
  else if (leftmost(ball) && !rightmost(ball)) {
    ball = moveRight(ball)
    currentState = 2
  }
}
else if (currentState === 2) {
  if (!leftmost(ball)) {
    ball = moveLeft(ball)
    currentState = 1
  }
  else if (leftmost(ball)) {
    currentState = 2
  }
  else if (leftmost(ball)) {
    ball = moveLeft(ball)
    ball = moveRight(ball)
    currentState = 2
  }
  else if (leftmost(ball)) {
    ball = moveLeft(ball)
    ball = ball
    currentState = 2
  }
  else if (leftmost(ball)) {
    ball = moveRight(ball)
    ball = ball
    currentState = 2
  }
}
else if (currentState === 3) {
  if (true) {
    currentState = 2
  }
  else if (true) {
    ball = moveLeft(ball)
    ball = moveRight(ball)
    currentState = 2
  }
  else if (true) {
    ball = moveLeft(ball)
    ball = ball
    currentState = 2
  }
  else if (true) {
    ball = moveRight(ball)
    ball = ball
    currentState = 2
  }
}