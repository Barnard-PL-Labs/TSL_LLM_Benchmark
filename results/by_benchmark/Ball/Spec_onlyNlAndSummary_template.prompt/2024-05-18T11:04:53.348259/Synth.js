if (currentState === 0) {
  if ((ball.position !== 0) && (ball.position === 10)) {
    ball.direction = left
    currentState = 1
  }
  else if ((ball.position !== 0) && (ball.position !== 10)) {
    ball.direction = left
    currentState = 1
  }
  else if ((ball.position === 0) && (ball.position !== 10)) {
    ball.direction = right
    currentState = 2
  }
  else if ((ball.position === 0) && (ball.position === 10)) {
    ball.direction = ball.direction
    currentState = 3
  }
  else if ((ball.position === 0) && (ball.position === 10)) {
    ball.direction = right
    currentState = 3
  }
  else if ((ball.position === 0) && (ball.position === 10)) {
    ball.direction = left
    currentState = 3
  }
}
else if (currentState === 1) {
  if ((ball.position !== 0) && (ball.position !== 10)) {
    ball.direction = left
    currentState = 1
  }
  else if ((ball.position === 10)) {
    currentState = 2
  }
  else if ((ball.position === 10)) {
    ball.direction = left
    ball.direction = right
    currentState = 2
  }
  else if ((ball.position === 10)) {
    ball.direction = left
    ball.direction = ball.direction
    currentState = 2
  }
  else if ((ball.position === 10)) {
    ball.direction = right
    ball.direction = ball.direction
    currentState = 2
  }
  else if ((ball.position === 0) && (ball.position !== 10)) {
    ball.direction = right
    currentState = 2
  }
}
else if (currentState === 2) {
  if ((ball.position !== 0) && (ball.position === 10)) {
    ball.direction = left
    currentState = 1
  }
  else if ((ball.position === 0)) {
    currentState = 2
  }
  else if ((ball.position === 0)) {
    ball.direction = left
    ball.direction = right
    currentState = 2
  }
  else if ((ball.position === 0)) {
    ball.direction = left
    ball.direction = ball.direction
    currentState = 2
  }
  else if ((ball.position === 0)) {
    ball.direction = right
    ball.direction = ball.direction
    currentState = 2
  }
  else if ((ball.position !== 0) && (ball.position !== 10)) {
    ball.direction = right
    currentState = 2
  }
}
else if (currentState === 3) {
  if (true) {
    currentState = 2
  }
  else if (true) {
    ball.direction = left
    ball.direction = right
    currentState = 2
  }
  else if (true) {
    ball.direction = left
    ball.direction = ball.direction
    currentState = 2
  }
  else if (true) {
    ball.direction = right
    ball.direction = ball.direction
    currentState = 2
  }
}