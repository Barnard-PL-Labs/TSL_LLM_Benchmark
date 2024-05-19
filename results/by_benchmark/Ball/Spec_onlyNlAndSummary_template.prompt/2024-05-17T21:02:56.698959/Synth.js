if (currentState === 0) {
  if ((ball.position !== 0) && (ball.position === 10)) {
    ball.position = left
    currentState = 1
  }
  else if ((ball.position !== 0) && (ball.position !== 10)) {
    ball.position = left
    currentState = 1
  }
  else if ((ball.position === 0) && (ball.position !== 10)) {
    ball.position = right
    currentState = 2
  }
  else if ((ball.position === 0) && (ball.position === 10)) {
    ball.position = ball.position
    currentState = 3
  }
  else if ((ball.position === 0) && (ball.position === 10)) {
    ball.position = right
    currentState = 3
  }
  else if ((ball.position === 0) && (ball.position === 10)) {
    ball.position = left
    currentState = 3
  }
}
else if (currentState === 1) {
  if ((ball.position !== 0) && (ball.position !== 10)) {
    ball.position = left
    currentState = 1
  }
  else if ((ball.position === 10)) {
    currentState = 2
  }
  else if ((ball.position === 10)) {
    ball.position = left
    ball.position = right
    currentState = 2
  }
  else if ((ball.position === 10)) {
    ball.position = left
    ball.position = ball.position
    currentState = 2
  }
  else if ((ball.position === 10)) {
    ball.position = right
    ball.position = ball.position
    currentState = 2
  }
  else if ((ball.position === 0) && (ball.position !== 10)) {
    ball.position = right
    currentState = 2
  }
}
else if (currentState === 2) {
  if ((ball.position !== 0) && (ball.position === 10)) {
    ball.position = left
    currentState = 1
  }
  else if ((ball.position === 0)) {
    currentState = 2
  }
  else if ((ball.position === 0)) {
    ball.position = left
    ball.position = right
    currentState = 2
  }
  else if ((ball.position === 0)) {
    ball.position = left
    ball.position = ball.position
    currentState = 2
  }
  else if ((ball.position === 0)) {
    ball.position = right
    ball.position = ball.position
    currentState = 2
  }
  else if ((ball.position !== 0) && (ball.position !== 10)) {
    ball.position = right
    currentState = 2
  }
}
else if (currentState === 3) {
  if (true) {
    currentState = 2
  }
  else if (true) {
    ball.position = left
    ball.position = right
    currentState = 2
  }
  else if (true) {
    ball.position = left
    ball.position = ball.position
    currentState = 2
  }
  else if (true) {
    ball.position = right
    ball.position = ball.position
    currentState = 2
  }
}