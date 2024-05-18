if (currentState === 0) {
  if (!leftmost(ball) && !rightmost(ball)) {
    ball = moveLeft(ball)
    currentState = 1
  }
  else if (!leftmost(ball) && rightmost(ball)) {
    ball = moveLeft(ball)
    currentState = 2
  }
  else if (leftmost(ball) && !rightmost(ball)) {
    ball = moveRight(ball)
    currentState = 3
  }
  else if (leftmost(ball) && rightmost(ball)) {
    ball = ball
    currentState = 4
  }
  else if (leftmost(ball) && rightmost(ball)) {
    ball = moveRight(ball)
    currentState = 4
  }
  else if (leftmost(ball) && rightmost(ball)) {
    ball = moveLeft(ball)
    currentState = 4
  }
}
else if (currentState === 1) {
  if (!leftmost(ball) && !rightmost(ball)) {
    ball = moveLeft(ball)
    currentState = 1
  }
  else if (leftmost(ball) && !rightmost(ball)) {
    ball = moveRight(ball)
    currentState = 3
  }
  else if (rightmost(ball)) {
    currentState = 5
  }
  else if (rightmost(ball)) {
    ball = moveLeft(ball)
    ball = moveRight(ball)
    currentState = 5
  }
  else if (rightmost(ball)) {
    ball = moveLeft(ball)
    ball = ball
    currentState = 5
  }
  else if (rightmost(ball)) {
    ball = moveRight(ball)
    ball = ball
    currentState = 5
  }
}
else if (currentState === 2) {
  if (leftmost(ball) && !rightmost(ball)) {
    ball = moveRight(ball)
    currentState = 3
  }
  else if (leftmost(ball) && rightmost(ball)) {
    ball = moveLeft(ball)
    currentState = 4
  }
  else if (!leftmost(ball) && rightmost(ball)) {
    currentState = 5
  }
  else if (!leftmost(ball) && rightmost(ball)) {
    ball = moveLeft(ball)
    ball = moveRight(ball)
    currentState = 5
  }
  else if (!leftmost(ball) && rightmost(ball)) {
    ball = moveLeft(ball)
    ball = ball
    currentState = 5
  }
  else if (!leftmost(ball) && rightmost(ball)) {
    ball = moveRight(ball)
    ball = ball
    currentState = 5
  }
  else if (!leftmost(ball) && !rightmost(ball)) {
    ball = moveRight(ball)
    currentState = 5
  }
}
else if (currentState === 3) {
  if (!leftmost(ball) && !rightmost(ball)) {
    ball = moveLeft(ball)
    currentState = 1
  }
  else if (!leftmost(ball) && rightmost(ball)) {
    ball = moveLeft(ball)
    currentState = 2
  }
  else if (leftmost(ball) && rightmost(ball)) {
    ball = moveRight(ball)
    currentState = 4
  }
  else if (leftmost(ball) && !rightmost(ball)) {
    currentState = 5
  }
  else if (leftmost(ball) && !rightmost(ball)) {
    ball = moveLeft(ball)
    ball = moveRight(ball)
    currentState = 5
  }
  else if (leftmost(ball) && !rightmost(ball)) {
    ball = moveLeft(ball)
    ball = ball
    currentState = 5
  }
  else if (leftmost(ball) && !rightmost(ball)) {
    ball = moveRight(ball)
    ball = ball
    currentState = 5
  }
}
else if (currentState === 4) {
  if (true) {
    currentState = 5
  }
  else if (true) {
    ball = moveLeft(ball)
    ball = moveRight(ball)
    currentState = 5
  }
  else if (true) {
    ball = moveLeft(ball)
    ball = ball
    currentState = 5
  }
  else if (true) {
    ball = moveRight(ball)
    ball = ball
    currentState = 5
  }
}
else if (currentState === 5) {
  if (!leftmost(ball) && !rightmost(ball)) {
    ball = moveLeft(ball)
    currentState = 1
  }
  else if (!leftmost(ball) && rightmost(ball)) {
    ball = moveLeft(ball)
    currentState = 2
  }
  else if (leftmost(ball)) {
    currentState = 5
  }
  else if (leftmost(ball)) {
    ball = moveLeft(ball)
    ball = moveRight(ball)
    currentState = 5
  }
  else if (leftmost(ball)) {
    ball = moveLeft(ball)
    ball = ball
    currentState = 5
  }
  else if (leftmost(ball)) {
    ball = moveRight(ball)
    ball = ball
    currentState = 5
  }
}