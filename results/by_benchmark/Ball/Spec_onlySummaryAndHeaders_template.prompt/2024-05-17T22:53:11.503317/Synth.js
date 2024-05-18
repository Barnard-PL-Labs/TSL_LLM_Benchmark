if (currentState === 0) {
  if (rightmost(ball) && leftmost(ball)) {
    ball = moveRight(ball)
    currentState = 1
  }
  else if (rightmost(ball) && leftmost(ball)) {
    ball = moveLeft(ball)
    currentState = 1
  }
  else if (rightmost(ball) && leftmost(ball)) {
    ball = ball
    currentState = 1
  }
  else if (rightmost(ball) && !leftmost(ball)) {
    ball = moveRight(ball)
    currentState = 1
  }
  else if (rightmost(ball) && !leftmost(ball)) {
    ball = moveLeft(ball)
    currentState = 1
  }
  else if (rightmost(ball) && !leftmost(ball)) {
    ball = ball
    currentState = 1
  }
  else if (!rightmost(ball) && leftmost(ball)) {
    ball = moveRight(ball)
    currentState = 1
  }
  else if (!rightmost(ball) && leftmost(ball)) {
    ball = moveLeft(ball)
    currentState = 1
  }
  else if (!rightmost(ball) && leftmost(ball)) {
    ball = ball
    currentState = 1
  }
  else if (!rightmost(ball) && !leftmost(ball)) {
    currentState = 2
  }
  else if (!rightmost(ball) && !leftmost(ball)) {
    ball = ball
    ball = moveLeft(ball)
    currentState = 2
  }
  else if (!rightmost(ball) && !leftmost(ball)) {
    ball = ball
    ball = moveRight(ball)
    currentState = 2
  }
  else if (!rightmost(ball) && !leftmost(ball)) {
    ball = moveLeft(ball)
    ball = moveRight(ball)
    currentState = 2
  }
}
else if (currentState === 1) {
  if (rightmost(ball) && leftmost(ball)) {
    ball = moveRight(ball)
    currentState = 1
  }
  else if (rightmost(ball) && leftmost(ball)) {
    ball = moveLeft(ball)
    currentState = 1
  }
  else if (rightmost(ball) && leftmost(ball)) {
    ball = ball
    currentState = 1
  }
  else if (!rightmost(ball) && !leftmost(ball)) {
    currentState = 2
  }
  else if (!rightmost(ball) && !leftmost(ball)) {
    ball = ball
    ball = moveLeft(ball)
    currentState = 2
  }
  else if (!rightmost(ball) && !leftmost(ball)) {
    ball = ball
    ball = moveRight(ball)
    currentState = 2
  }
  else if (!rightmost(ball) && !leftmost(ball)) {
    ball = moveLeft(ball)
    ball = moveRight(ball)
    currentState = 2
  }
  else if (!rightmost(ball) && leftmost(ball)) {
    ball = moveLeft(ball)
    currentState = 2
  }
  else if (!rightmost(ball) && leftmost(ball)) {
    ball = ball
    currentState = 2
  }
  else if (rightmost(ball) && !leftmost(ball)) {
    ball = moveRight(ball)
    currentState = 3
  }
}
else if (currentState === 2) {
  if (rightmost(ball)) {
    ball = moveRight(ball)
    currentState = 1
  }
  else if (rightmost(ball)) {
    ball = moveLeft(ball)
    currentState = 1
  }
  else if (rightmost(ball)) {
    ball = ball
    currentState = 1
  }
  else if (!rightmost(ball) && !leftmost(ball)) {
    currentState = 2
  }
  else if (!rightmost(ball) && !leftmost(ball)) {
    ball = ball
    ball = moveLeft(ball)
    currentState = 2
  }
  else if (!rightmost(ball) && !leftmost(ball)) {
    ball = ball
    ball = moveRight(ball)
    currentState = 2
  }
  else if (!rightmost(ball) && !leftmost(ball)) {
    ball = moveLeft(ball)
    ball = moveRight(ball)
    currentState = 2
  }
  else if (!rightmost(ball) && leftmost(ball)) {
    ball = moveRight(ball)
    currentState = 2
  }
}
else if (currentState === 3) {
  if (rightmost(ball) && leftmost(ball)) {
    ball = moveRight(ball)
    currentState = 1
  }
  else if (rightmost(ball) && leftmost(ball)) {
    ball = moveLeft(ball)
    currentState = 1
  }
  else if (rightmost(ball) && leftmost(ball)) {
    ball = ball
    currentState = 1
  }
  else if (!rightmost(ball) && !leftmost(ball)) {
    currentState = 2
  }
  else if (!rightmost(ball) && !leftmost(ball)) {
    ball = ball
    ball = moveLeft(ball)
    currentState = 2
  }
  else if (!rightmost(ball) && !leftmost(ball)) {
    ball = ball
    ball = moveRight(ball)
    currentState = 2
  }
  else if (!rightmost(ball) && !leftmost(ball)) {
    ball = moveLeft(ball)
    ball = moveRight(ball)
    currentState = 2
  }
  else if (!rightmost(ball) && leftmost(ball)) {
    ball = moveLeft(ball)
    currentState = 2
  }
  else if (rightmost(ball) && !leftmost(ball)) {
    ball = moveLeft(ball)
    currentState = 3
  }
}