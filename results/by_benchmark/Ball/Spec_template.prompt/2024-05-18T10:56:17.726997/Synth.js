if (currentState === 0) {
  if (!leftmost(ball) && !rightmost(ball)) {
    ball = moveLeft()
    currentState = 1
  }
  else if (!leftmost(ball) && rightmost(ball)) {
    ball = moveLeft()
    currentState = 2
  }
  else if (leftmost(ball) && !rightmost(ball)) {
    ball = moveRight()
    currentState = 3
  }
  else if (leftmost(ball) && rightmost(ball)) {
    ball = ball
    currentState = 4
  }
  else if (leftmost(ball) && rightmost(ball)) {
    ball = moveRight()
    currentState = 4
  }
  else if (leftmost(ball) && rightmost(ball)) {
    ball = moveLeft()
    currentState = 4
  }
}
else if (currentState === 1) {
  if (!leftmost(ball) && !rightmost(ball)) {
    ball = moveLeft()
    currentState = 1
  }
  else if (leftmost(ball) && !rightmost(ball)) {
    ball = moveRight()
    currentState = 3
  }
  else if (rightmost(ball)) {
    currentState = 5
  }
  else if (rightmost(ball)) {
    ball = moveLeft()
    ball = moveRight()
    currentState = 5
  }
  else if (rightmost(ball)) {
    ball = moveLeft()
    ball = ball
    currentState = 5
  }
  else if (rightmost(ball)) {
    ball = moveRight()
    ball = ball
    currentState = 5
  }
}
else if (currentState === 2) {
  if (leftmost(ball) && !rightmost(ball)) {
    ball = moveRight()
    currentState = 3
  }
  else if (leftmost(ball) && rightmost(ball)) {
    ball = moveLeft()
    currentState = 4
  }
  else if (!leftmost(ball) && rightmost(ball)) {
    currentState = 5
  }
  else if (!leftmost(ball) && rightmost(ball)) {
    ball = moveLeft()
    ball = moveRight()
    currentState = 5
  }
  else if (!leftmost(ball) && rightmost(ball)) {
    ball = moveLeft()
    ball = ball
    currentState = 5
  }
  else if (!leftmost(ball) && rightmost(ball)) {
    ball = moveRight()
    ball = ball
    currentState = 5
  }
  else if (!leftmost(ball) && !rightmost(ball)) {
    ball = moveRight()
    currentState = 5
  }
}
else if (currentState === 3) {
  if (!leftmost(ball) && !rightmost(ball)) {
    ball = moveLeft()
    currentState = 1
  }
  else if (!leftmost(ball) && rightmost(ball)) {
    ball = moveLeft()
    currentState = 2
  }
  else if (leftmost(ball) && rightmost(ball)) {
    ball = moveRight()
    currentState = 4
  }
  else if (leftmost(ball) && !rightmost(ball)) {
    currentState = 5
  }
  else if (leftmost(ball) && !rightmost(ball)) {
    ball = moveLeft()
    ball = moveRight()
    currentState = 5
  }
  else if (leftmost(ball) && !rightmost(ball)) {
    ball = moveLeft()
    ball = ball
    currentState = 5
  }
  else if (leftmost(ball) && !rightmost(ball)) {
    ball = moveRight()
    ball = ball
    currentState = 5
  }
}
else if (currentState === 4) {
  if (true) {
    currentState = 5
  }
  else if (true) {
    ball = moveLeft()
    ball = moveRight()
    currentState = 5
  }
  else if (true) {
    ball = moveLeft()
    ball = ball
    currentState = 5
  }
  else if (true) {
    ball = moveRight()
    ball = ball
    currentState = 5
  }
}
else if (currentState === 5) {
  if (!leftmost(ball) && !rightmost(ball)) {
    ball = moveLeft()
    currentState = 1
  }
  else if (!leftmost(ball) && rightmost(ball)) {
    ball = moveLeft()
    currentState = 2
  }
  else if (leftmost(ball)) {
    currentState = 5
  }
  else if (leftmost(ball)) {
    ball = moveLeft()
    ball = moveRight()
    currentState = 5
  }
  else if (leftmost(ball)) {
    ball = moveLeft()
    ball = ball
    currentState = 5
  }
  else if (leftmost(ball)) {
    ball = moveRight()
    ball = ball
    currentState = 5
  }
}