if (currentState === 0) {
  if ((ball.position !== 0) && (ball.position !== 10)) {
    ball.position = ball.position - 1
    currentState = 1
  }
  else if ((ball.position !== 0) && (ball.position === 10)) {
    ball.position = ball.position - 1
    currentState = 2
  }
  else if ((ball.position === 0) && (ball.position !== 10)) {
    ball.position = ball.position - 1
    currentState = 3
  }
  else if ((ball.position === 0) && (ball.position === 10)) {
    ball.position = ball.position
    currentState = 4
  }
  else if ((ball.position === 0) && (ball.position === 10)) {
    ball.position = ball.position + 1
    currentState = 4
  }
  else if ((ball.position === 0) && (ball.position === 10)) {
    ball.position = ball.position - 1
    currentState = 4
  }
}
else if (currentState === 1) {
  if ((ball.position !== 0) && (ball.position !== 10)) {
    ball.position = ball.position - 1
    currentState = 1
  }
  else if ((ball.position === 0) && (ball.position !== 10)) {
    ball.position = ball.position - 1
    currentState = 3
  }
  else if ((ball.position === 10)) {
    currentState = 6
  }
  else if ((ball.position === 10)) {
    ball.position = ball.position - 1
    ball.position = ball.position + 1
    currentState = 6
  }
  else if ((ball.position === 10)) {
    ball.position = ball.position - 1
    ball.position = ball.position
    currentState = 6
  }
  else if ((ball.position === 10)) {
    ball.position = ball.position + 1
    ball.position = ball.position
    currentState = 6
  }
}
else if (currentState === 2) {
  if ((ball.position !== 0) && (ball.position !== 10)) {
    ball.position = ball.position - 1
    currentState = 2
  }
  else if ((ball.position === 0) && (ball.position !== 10)) {
    ball.position = ball.position - 1
    currentState = 3
  }
  else if ((ball.position === 0) && (ball.position === 10)) {
    ball.position = ball.position
    currentState = 4
  }
  else if ((ball.position === 0) && (ball.position === 10)) {
    ball.position = ball.position + 1
    currentState = 4
  }
  else if ((ball.position !== 0) && (ball.position === 10)) {
    currentState = 6
  }
  else if ((ball.position !== 0) && (ball.position === 10)) {
    ball.position = ball.position - 1
    ball.position = ball.position + 1
    currentState = 6
  }
  else if ((ball.position !== 0) && (ball.position === 10)) {
    ball.position = ball.position - 1
    ball.position = ball.position
    currentState = 6
  }
  else if ((ball.position !== 0) && (ball.position === 10)) {
    ball.position = ball.position + 1
    ball.position = ball.position
    currentState = 6
  }
}
else if (currentState === 3) {
  if ((ball.position === 0) && (ball.position === 10)) {
    ball.position = ball.position
    currentState = 4
  }
  else if ((ball.position === 0) && (ball.position === 10)) {
    ball.position = ball.position - 1
    currentState = 4
  }
  else if ((ball.position !== 10)) {
    ball.position = ball.position + 1
    currentState = 5
  }
  else if ((ball.position !== 0) && (ball.position === 10)) {
    currentState = 6
  }
  else if ((ball.position !== 0) && (ball.position === 10)) {
    ball.position = ball.position - 1
    ball.position = ball.position + 1
    currentState = 6
  }
  else if ((ball.position !== 0) && (ball.position === 10)) {
    ball.position = ball.position - 1
    ball.position = ball.position
    currentState = 6
  }
  else if ((ball.position !== 0) && (ball.position === 10)) {
    ball.position = ball.position + 1
    ball.position = ball.position
    currentState = 6
  }
}
else if (currentState === 4) {
  if (true) {
    currentState = 6
  }
  else if (true) {
    ball.position = ball.position - 1
    ball.position = ball.position + 1
    currentState = 6
  }
  else if (true) {
    ball.position = ball.position - 1
    ball.position = ball.position
    currentState = 6
  }
  else if (true) {
    ball.position = ball.position + 1
    ball.position = ball.position
    currentState = 6
  }
}
else if (currentState === 5) {
  if ((ball.position === 0) && (ball.position === 10)) {
    ball.position = ball.position
    currentState = 4
  }
  else if ((ball.position === 0) && (ball.position === 10)) {
    ball.position = ball.position - 1
    currentState = 4
  }
  else if ((ball.position !== 0) && (ball.position !== 10)) {
    ball.position = ball.position + 1
    currentState = 5
  }
  else if ((ball.position === 0) && (ball.position !== 10)) {
    currentState = 6
  }
  else if ((ball.position === 0) && (ball.position !== 10)) {
    ball.position = ball.position - 1
    ball.position = ball.position + 1
    currentState = 6
  }
  else if ((ball.position === 0) && (ball.position !== 10)) {
    ball.position = ball.position - 1
    ball.position = ball.position
    currentState = 6
  }
  else if ((ball.position === 0) && (ball.position !== 10)) {
    ball.position = ball.position + 1
    ball.position = ball.position
    currentState = 6
  }
  else if ((ball.position !== 0) && (ball.position === 10)) {
    ball.position = ball.position + 1
    currentState = 6
  }
}
else if (currentState === 6) {
  if ((ball.position !== 0)) {
    ball.position = ball.position - 1
    currentState = 2
  }
  else if ((ball.position === 0) && (ball.position === 10)) {
    ball.position = ball.position
    currentState = 4
  }
  else if ((ball.position === 0) && (ball.position === 10)) {
    ball.position = ball.position + 1
    currentState = 4
  }
  else if ((ball.position === 0) && (ball.position !== 10)) {
    currentState = 6
  }
  else if ((ball.position === 0) && (ball.position !== 10)) {
    ball.position = ball.position - 1
    ball.position = ball.position + 1
    currentState = 6
  }
  else if ((ball.position === 0) && (ball.position !== 10)) {
    ball.position = ball.position - 1
    ball.position = ball.position
    currentState = 6
  }
  else if ((ball.position === 0) && (ball.position !== 10)) {
    ball.position = ball.position + 1
    ball.position = ball.position
    currentState = 6
  }
}