if (currentState === 0) {
  if (!leftmost(ball) && !rightmost(ball)) {
    ball = continueMovement(ball)
    currentState = 0
  }
  else if (!leftmost(ball) && rightmost(ball)) {
    ball = continueMovement(ball)
    currentState = 1
  }
  else if (leftmost(ball) && rightmost(ball)) {
    currentState = 2
  }
  else if (leftmost(ball) && !rightmost(ball)) {
    ball = continueMovement(ball)
    currentState = 2
  }
}
else if (currentState === 1) {
  if (!leftmost(ball) && !rightmost(ball)) {
    ball = moveRight(ball)
    currentState = 0
  }
  else if (!leftmost(ball) && !rightmost(ball)) {
    ball = moveLeft(ball)
    currentState = 0
  }
  else if (!leftmost(ball) && !rightmost(ball)) {
    ball = continueMovement(ball)
    currentState = 0
  }
  else if (!leftmost(ball) && !rightmost(ball)) {
    ball = ball
    currentState = 0
  }
  else if (!leftmost(ball) && rightmost(ball)) {
    ball = moveLeft(ball)
    currentState = 1
  }
  else if (leftmost(ball) && !rightmost(ball)) {
    ball = moveRight(ball)
    currentState = 2
  }
  else if (leftmost(ball) && !rightmost(ball)) {
    ball = moveLeft(ball)
    currentState = 2
  }
  else if (leftmost(ball) && !rightmost(ball)) {
    ball = continueMovement(ball)
    currentState = 2
  }
  else if (leftmost(ball) && !rightmost(ball)) {
    ball = ball
    currentState = 2
  }
  else if (leftmost(ball) && rightmost(ball)) {
    currentState = 2
  }
}
else if (currentState === 2) {
  if (!leftmost(ball) && !rightmost(ball)) {
    ball = moveRight(ball)
    currentState = 0
  }
  else if (!leftmost(ball) && !rightmost(ball)) {
    ball = moveLeft(ball)
    currentState = 0
  }
  else if (!leftmost(ball) && !rightmost(ball)) {
    ball = continueMovement(ball)
    currentState = 0
  }
  else if (!leftmost(ball) && !rightmost(ball)) {
    ball = ball
    currentState = 0
  }
  else if (!leftmost(ball) && rightmost(ball)) {
    ball = moveRight(ball)
    currentState = 1
  }
  else if (!leftmost(ball) && rightmost(ball)) {
    ball = moveLeft(ball)
    currentState = 1
  }
  else if (!leftmost(ball) && rightmost(ball)) {
    ball = continueMovement(ball)
    currentState = 1
  }
  else if (!leftmost(ball) && rightmost(ball)) {
    ball = ball
    currentState = 1
  }
  else if (leftmost(ball) && rightmost(ball)) {
    currentState = 2
  }
  else if (leftmost(ball) && !rightmost(ball)) {
    ball = moveRight(ball)
    currentState = 2
  }
}