if (currentState === 0) {
  if ((ball.position !== 0) && (ball.position !== 10)) {
    ball.move = left
    currentState = 1
  }
  else if ((ball.position !== 0) && (ball.position === 10)) {
    ball.move = left
    currentState = 2
  }
  else if ((ball.position === 0) && (ball.position !== 10)) {
    ball.move = right
    currentState = 3
  }
  else if ((ball.position === 0) && (ball.position === 10)) {
    ball.move = ball.move
    currentState = 4
  }
  else if ((ball.position === 0) && (ball.position === 10)) {
    ball.move = right
    currentState = 4
  }
  else if ((ball.position === 0) && (ball.position === 10)) {
    ball.move = left
    currentState = 4
  }
}
else if (currentState === 1) {
  if ((ball.position !== 0) && (ball.position !== 10)) {
    ball.move = left
    currentState = 1
  }
  else if ((ball.position === 0) && (ball.position !== 10)) {
    ball.move = right
    currentState = 3
  }
  else if ((ball.position === 10)) {
    currentState = 5
  }
  else if ((ball.position === 10)) {
    ball.move = left
    ball.move = right
    currentState = 5
  }
  else if ((ball.position === 10)) {
    ball.move = left
    ball.move = ball.move
    currentState = 5
  }
  else if ((ball.position === 10)) {
    ball.move = right
    ball.move = ball.move
    currentState = 5
  }
}
else if (currentState === 2) {
  if ((ball.position === 0) && (ball.position !== 10)) {
    ball.move = right
    currentState = 3
  }
  else if ((ball.position === 10)) {
    currentState = 5
  }
  else if ((ball.position === 10)) {
    ball.move = left
    ball.move = right
    currentState = 5
  }
  else if ((ball.position === 10)) {
    ball.move = left
    ball.move = ball.move
    currentState = 5
  }
  else if ((ball.position === 10)) {
    ball.move = right
    ball.move = ball.move
    currentState = 5
  }
  else if ((ball.position !== 0) && (ball.position !== 10)) {
    ball.move = ball.move
    currentState = 5
  }
}
else if (currentState === 3) {
  if ((ball.position !== 0) && (ball.position !== 10)) {
    ball.move = left
    currentState = 1
  }
  else if ((ball.position === 0)) {
    currentState = 5
  }
  else if ((ball.position === 0)) {
    ball.move = left
    ball.move = right
    currentState = 5
  }
  else if ((ball.position === 0)) {
    ball.move = left
    ball.move = ball.move
    currentState = 5
  }
  else if ((ball.position === 0)) {
    ball.move = right
    ball.move = ball.move
    currentState = 5
  }
  else if ((ball.position !== 0) && (ball.position === 10)) {
    ball.move = left
    currentState = 6
  }
}
else if (currentState === 4) {
  if (true) {
    currentState = 5
  }
  else if (true) {
    ball.move = left
    ball.move = right
    currentState = 5
  }
  else if (true) {
    ball.move = left
    ball.move = ball.move
    currentState = 5
  }
  else if (true) {
    ball.move = right
    ball.move = ball.move
    currentState = 5
  }
}
else if (currentState === 5) {
  if ((ball.position !== 0) && (ball.position !== 10)) {
    ball.move = left
    currentState = 1
  }
  else if ((ball.position === 0) && (ball.position !== 10)) {
    ball.move = right
    currentState = 3
  }
  else if ((ball.position === 0) && (ball.position === 10)) {
    currentState = 5
  }
  else if ((ball.position === 0) && (ball.position === 10)) {
    ball.move = left
    ball.move = right
    currentState = 5
  }
  else if ((ball.position === 0) && (ball.position === 10)) {
    ball.move = left
    ball.move = ball.move
    currentState = 5
  }
  else if ((ball.position === 0) && (ball.position === 10)) {
    ball.move = right
    ball.move = ball.move
    currentState = 5
  }
  else if ((ball.position !== 0) && (ball.position === 10)) {
    ball.move = left
    currentState = 6
  }
}
else if (currentState === 6) {
  if ((ball.position !== 10)) {
    ball.move = right
    currentState = 3
  }
  else if ((ball.position === 10)) {
    currentState = 5
  }
  else if ((ball.position === 10)) {
    ball.move = left
    ball.move = right
    currentState = 5
  }
  else if ((ball.position === 10)) {
    ball.move = left
    ball.move = ball.move
    currentState = 5
  }
  else if ((ball.position === 10)) {
    ball.move = right
    ball.move = ball.move
    currentState = 5
  }
}