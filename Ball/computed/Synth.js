if (currentState === 0) {
  if (!leftmost(ball.pos) && rightmost(ball.pos)) {
    ball.pos = moveLeft(ball.pos)
    currentState = 1
  }
  else if (!leftmost(ball.pos) && !rightmost(ball.pos)) {
    ball.pos = moveLeft(ball.pos)
    currentState = 1
  }
  else if (leftmost(ball.pos) && !rightmost(ball.pos)) {
    ball.pos = moveLeft(ball.pos)
    currentState = 2
  }
  else if (leftmost(ball.pos) && rightmost(ball.pos)) {
    ball.pos = ball.pos
    currentState = 3
  }
  else if (leftmost(ball.pos) && rightmost(ball.pos)) {
    ball.pos = moveRight(ball.pos)
    currentState = 3
  }
  else if (leftmost(ball.pos) && rightmost(ball.pos)) {
    ball.pos = moveLeft(ball.pos)
    currentState = 3
  }
}
else if (currentState === 1) {
  if (!leftmost(ball.pos) && !rightmost(ball.pos)) {
    ball.pos = moveLeft(ball.pos)
    currentState = 1
  }
  else if (leftmost(ball.pos) && !rightmost(ball.pos)) {
    ball.pos = moveRight(ball.pos)
    currentState = 4
  }
  else if (rightmost(ball.pos)) {
    currentState = 5
  }
  else if (rightmost(ball.pos)) {
    ball.pos = moveLeft(ball.pos)
    ball.pos = moveRight(ball.pos)
    currentState = 5
  }
  else if (rightmost(ball.pos)) {
    ball.pos = moveLeft(ball.pos)
    ball.pos = ball.pos
    currentState = 5
  }
  else if (rightmost(ball.pos)) {
    ball.pos = moveRight(ball.pos)
    ball.pos = ball.pos
    currentState = 5
  }
}
else if (currentState === 2) {
  if (leftmost(ball.pos) && !rightmost(ball.pos)) {
    ball.pos = moveRight(ball.pos)
    currentState = 4
  }
  else if (rightmost(ball.pos)) {
    currentState = 5
  }
  else if (rightmost(ball.pos)) {
    ball.pos = moveLeft(ball.pos)
    ball.pos = moveRight(ball.pos)
    currentState = 5
  }
  else if (rightmost(ball.pos)) {
    ball.pos = moveLeft(ball.pos)
    ball.pos = ball.pos
    currentState = 5
  }
  else if (rightmost(ball.pos)) {
    ball.pos = moveRight(ball.pos)
    ball.pos = ball.pos
    currentState = 5
  }
  else if (!leftmost(ball.pos) && !rightmost(ball.pos)) {
    ball.pos = moveRight(ball.pos)
    currentState = 5
  }
}
else if (currentState === 3) {
  if (true) {
    currentState = 5
  }
  else if (true) {
    ball.pos = moveLeft(ball.pos)
    ball.pos = moveRight(ball.pos)
    currentState = 5
  }
  else if (true) {
    ball.pos = moveLeft(ball.pos)
    ball.pos = ball.pos
    currentState = 5
  }
  else if (true) {
    ball.pos = moveRight(ball.pos)
    ball.pos = ball.pos
    currentState = 5
  }
}
else if (currentState === 4) {
  if (!leftmost(ball.pos) && rightmost(ball.pos)) {
    ball.pos = moveLeft(ball.pos)
    currentState = 1
  }
  else if (!leftmost(ball.pos) && !rightmost(ball.pos)) {
    ball.pos = moveRight(ball.pos)
    currentState = 4
  }
  else if (leftmost(ball.pos)) {
    currentState = 5
  }
  else if (leftmost(ball.pos)) {
    ball.pos = moveLeft(ball.pos)
    ball.pos = moveRight(ball.pos)
    currentState = 5
  }
  else if (leftmost(ball.pos)) {
    ball.pos = moveLeft(ball.pos)
    ball.pos = ball.pos
    currentState = 5
  }
  else if (leftmost(ball.pos)) {
    ball.pos = moveRight(ball.pos)
    ball.pos = ball.pos
    currentState = 5
  }
}
else if (currentState === 5) {
  if (!leftmost(ball.pos) && rightmost(ball.pos)) {
    ball.pos = moveLeft(ball.pos)
    currentState = 1
  }
  else if (!leftmost(ball.pos) && !rightmost(ball.pos)) {
    ball.pos = moveLeft(ball.pos)
    currentState = 1
  }
  else if (leftmost(ball.pos)) {
    currentState = 5
  }
  else if (leftmost(ball.pos)) {
    ball.pos = moveLeft(ball.pos)
    ball.pos = moveRight(ball.pos)
    currentState = 5
  }
  else if (leftmost(ball.pos)) {
    ball.pos = moveLeft(ball.pos)
    ball.pos = ball.pos
    currentState = 5
  }
  else if (leftmost(ball.pos)) {
    ball.pos = moveRight(ball.pos)
    ball.pos = ball.pos
    currentState = 5
  }
}