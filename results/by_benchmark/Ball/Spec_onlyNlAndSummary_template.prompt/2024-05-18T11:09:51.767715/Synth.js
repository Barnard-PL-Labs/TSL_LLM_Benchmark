if (currentState === 0) {
  if ((ballPos !== 0) && (ballPos !== 10)) {
    ballMove = left
    currentState = 1
  }
  else if ((ballPos !== 0) && (ballPos === 10)) {
    ballMove = left
    currentState = 2
  }
  else if ((ballPos === 0) && (ballPos !== 10)) {
    ballMove = right
    currentState = 3
  }
  else if ((ballPos === 0) && (ballPos === 10)) {
    ballMove = ballMove
    currentState = 4
  }
  else if ((ballPos === 0) && (ballPos === 10)) {
    ballMove = right
    currentState = 4
  }
  else if ((ballPos === 0) && (ballPos === 10)) {
    ballMove = left
    currentState = 4
  }
}
else if (currentState === 1) {
  if ((ballPos !== 0) && (ballPos !== 10)) {
    ballMove = left
    currentState = 1
  }
  else if ((ballPos === 0) && (ballPos !== 10)) {
    ballMove = right
    currentState = 3
  }
  else if ((ballPos === 10)) {
    currentState = 5
  }
  else if ((ballPos === 10)) {
    ballMove = left
    ballMove = right
    currentState = 5
  }
  else if ((ballPos === 10)) {
    ballMove = left
    ballMove = ballMove
    currentState = 5
  }
  else if ((ballPos === 10)) {
    ballMove = right
    ballMove = ballMove
    currentState = 5
  }
}
else if (currentState === 2) {
  if ((ballPos === 0) && (ballPos !== 10)) {
    ballMove = right
    currentState = 3
  }
  else if ((ballPos === 10)) {
    currentState = 5
  }
  else if ((ballPos === 10)) {
    ballMove = left
    ballMove = right
    currentState = 5
  }
  else if ((ballPos === 10)) {
    ballMove = left
    ballMove = ballMove
    currentState = 5
  }
  else if ((ballPos === 10)) {
    ballMove = right
    ballMove = ballMove
    currentState = 5
  }
  else if ((ballPos !== 0) && (ballPos !== 10)) {
    ballMove = ballMove
    currentState = 5
  }
}
else if (currentState === 3) {
  if ((ballPos !== 0) && (ballPos !== 10)) {
    ballMove = left
    currentState = 1
  }
  else if ((ballPos === 0)) {
    currentState = 5
  }
  else if ((ballPos === 0)) {
    ballMove = left
    ballMove = right
    currentState = 5
  }
  else if ((ballPos === 0)) {
    ballMove = left
    ballMove = ballMove
    currentState = 5
  }
  else if ((ballPos === 0)) {
    ballMove = right
    ballMove = ballMove
    currentState = 5
  }
  else if ((ballPos !== 0) && (ballPos === 10)) {
    ballMove = left
    currentState = 6
  }
}
else if (currentState === 4) {
  if (true) {
    currentState = 5
  }
  else if (true) {
    ballMove = left
    ballMove = right
    currentState = 5
  }
  else if (true) {
    ballMove = left
    ballMove = ballMove
    currentState = 5
  }
  else if (true) {
    ballMove = right
    ballMove = ballMove
    currentState = 5
  }
}
else if (currentState === 5) {
  if ((ballPos !== 0) && (ballPos !== 10)) {
    ballMove = left
    currentState = 1
  }
  else if ((ballPos === 0) && (ballPos !== 10)) {
    ballMove = right
    currentState = 3
  }
  else if ((ballPos === 0) && (ballPos === 10)) {
    currentState = 5
  }
  else if ((ballPos === 0) && (ballPos === 10)) {
    ballMove = left
    ballMove = right
    currentState = 5
  }
  else if ((ballPos === 0) && (ballPos === 10)) {
    ballMove = left
    ballMove = ballMove
    currentState = 5
  }
  else if ((ballPos === 0) && (ballPos === 10)) {
    ballMove = right
    ballMove = ballMove
    currentState = 5
  }
  else if ((ballPos !== 0) && (ballPos === 10)) {
    ballMove = left
    currentState = 6
  }
}
else if (currentState === 6) {
  if ((ballPos !== 10)) {
    ballMove = right
    currentState = 3
  }
  else if ((ballPos === 10)) {
    currentState = 5
  }
  else if ((ballPos === 10)) {
    ballMove = left
    ballMove = right
    currentState = 5
  }
  else if ((ballPos === 10)) {
    ballMove = left
    ballMove = ballMove
    currentState = 5
  }
  else if ((ballPos === 10)) {
    ballMove = right
    ballMove = ballMove
    currentState = 5
  }
}