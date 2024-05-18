function updateState({currentState, ball}) {
  let _next_ball

  if (currentState === 0) {
    if (!leftmost(ball) && !rightmost(ball)) {
      _next_ball = moveLeft(ball)
      currentState = 1
    }
    else if (!leftmost(ball) && rightmost(ball)) {
      _next_ball = moveLeft(ball)
      currentState = 2
    }
    else if (leftmost(ball) && !rightmost(ball)) {
      _next_ball = moveRight(ball)
      currentState = 3
    }
    else if (leftmost(ball) && rightmost(ball)) {
      _next_ball = ball
      currentState = 4
    }
    else if (leftmost(ball) && rightmost(ball)) {
      _next_ball = moveRight(ball)
      currentState = 4
    }
    else if (leftmost(ball) && rightmost(ball)) {
      _next_ball = moveLeft(ball)
      currentState = 4
    }
  }
  else if (currentState === 1) {
    if (!leftmost(ball) && !rightmost(ball)) {
      _next_ball = moveLeft(ball)
      currentState = 1
    }
    else if (leftmost(ball) && !rightmost(ball)) {
      _next_ball = moveRight(ball)
      currentState = 3
    }
    else if (rightmost(ball)) {
      currentState = 5
    }
    else if (rightmost(ball)) {
      _next_ball = moveLeft(ball)
      _next_ball = moveRight(ball)
      currentState = 5
    }
    else if (rightmost(ball)) {
      _next_ball = moveLeft(ball)
      _next_ball = ball
      currentState = 5
    }
    else if (rightmost(ball)) {
      _next_ball = moveRight(ball)
      _next_ball = ball
      currentState = 5
    }
  }
  else if (currentState === 2) {
    if (leftmost(ball) && !rightmost(ball)) {
      _next_ball = moveRight(ball)
      currentState = 3
    }
    else if (leftmost(ball) && rightmost(ball)) {
      _next_ball = moveLeft(ball)
      currentState = 4
    }
    else if (!leftmost(ball) && rightmost(ball)) {
      currentState = 5
    }
    else if (!leftmost(ball) && rightmost(ball)) {
      _next_ball = moveLeft(ball)
      _next_ball = moveRight(ball)
      currentState = 5
    }
    else if (!leftmost(ball) && rightmost(ball)) {
      _next_ball = moveLeft(ball)
      _next_ball = ball
      currentState = 5
    }
    else if (!leftmost(ball) && rightmost(ball)) {
      _next_ball = moveRight(ball)
      _next_ball = ball
      currentState = 5
    }
    else if (!leftmost(ball) && !rightmost(ball)) {
      _next_ball = moveRight(ball)
      currentState = 5
    }
  }
  else if (currentState === 3) {
    if (!leftmost(ball) && !rightmost(ball)) {
      _next_ball = moveLeft(ball)
      currentState = 1
    }
    else if (!leftmost(ball) && rightmost(ball)) {
      _next_ball = moveLeft(ball)
      currentState = 2
    }
    else if (leftmost(ball) && rightmost(ball)) {
      _next_ball = moveRight(ball)
      currentState = 4
    }
    else if (leftmost(ball) && !rightmost(ball)) {
      currentState = 5
    }
    else if (leftmost(ball) && !rightmost(ball)) {
      _next_ball = moveLeft(ball)
      _next_ball = moveRight(ball)
      currentState = 5
    }
    else if (leftmost(ball) && !rightmost(ball)) {
      _next_ball = moveLeft(ball)
      _next_ball = ball
      currentState = 5
    }
    else if (leftmost(ball) && !rightmost(ball)) {
      _next_ball = moveRight(ball)
      _next_ball = ball
      currentState = 5
    }
  }
  else if (currentState === 4) {
    if (true) {
      currentState = 5
    }
    else if (true) {
      _next_ball = moveLeft(ball)
      _next_ball = moveRight(ball)
      currentState = 5
    }
    else if (true) {
      _next_ball = moveLeft(ball)
      _next_ball = ball
      currentState = 5
    }
    else if (true) {
      _next_ball = moveRight(ball)
      _next_ball = ball
      currentState = 5
    }
  }
  else if (currentState === 5) {
    if (!leftmost(ball) && !rightmost(ball)) {
      _next_ball = moveLeft(ball)
      currentState = 1
    }
    else if (!leftmost(ball) && rightmost(ball)) {
      _next_ball = moveLeft(ball)
      currentState = 2
    }
    else if (leftmost(ball)) {
      currentState = 5
    }
    else if (leftmost(ball)) {
      _next_ball = moveLeft(ball)
      _next_ball = moveRight(ball)
      currentState = 5
    }
    else if (leftmost(ball)) {
      _next_ball = moveLeft(ball)
      _next_ball = ball
      currentState = 5
    }
    else if (leftmost(ball)) {
      _next_ball = moveRight(ball)
      _next_ball = ball
      currentState = 5
    }
  }

  return {currentState, ball: _next_ball}
}