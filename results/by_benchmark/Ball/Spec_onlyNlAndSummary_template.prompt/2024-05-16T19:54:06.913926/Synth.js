if (currentState === 0) {
  if ((ballPosition !== 0) && (ballPosition !== 10)) {
    ballPosition = ballPosition - 1
    currentState = 1
  }
  else if ((ballPosition !== 0) && (ballPosition === 10)) {
    ballPosition = ballPosition - 1
    currentState = 2
  }
  else if ((ballPosition === 0) && (ballPosition !== 10)) {
    ballPosition = ballPosition + 1
    currentState = 3
  }
  else if ((ballPosition === 0) && (ballPosition === 10)) {
    ballPosition = ballPosition
    currentState = 4
  }
  else if ((ballPosition === 0) && (ballPosition === 10)) {
    ballPosition = ballPosition + 1
    currentState = 4
  }
  else if ((ballPosition === 0) && (ballPosition === 10)) {
    ballPosition = ballPosition - 1
    currentState = 4
  }
}
else if (currentState === 1) {
  if ((ballPosition !== 0) && (ballPosition !== 10)) {
    ballPosition = ballPosition - 1
    currentState = 1
  }
  else if ((ballPosition === 0) && (ballPosition !== 10)) {
    ballPosition = ballPosition + 1
    currentState = 3
  }
  else if ((ballPosition === 10)) {
    currentState = 5
  }
  else if ((ballPosition === 10)) {
    ballPosition = ballPosition - 1
    ballPosition = ballPosition + 1
    currentState = 5
  }
  else if ((ballPosition === 10)) {
    ballPosition = ballPosition - 1
    ballPosition = ballPosition
    currentState = 5
  }
  else if ((ballPosition === 10)) {
    ballPosition = ballPosition + 1
    ballPosition = ballPosition
    currentState = 5
  }
}
else if (currentState === 2) {
  if ((ballPosition === 0) && (ballPosition !== 10)) {
    ballPosition = ballPosition + 1
    currentState = 3
  }
  else if ((ballPosition === 10)) {
    currentState = 5
  }
  else if ((ballPosition === 10)) {
    ballPosition = ballPosition - 1
    ballPosition = ballPosition + 1
    currentState = 5
  }
  else if ((ballPosition === 10)) {
    ballPosition = ballPosition - 1
    ballPosition = ballPosition
    currentState = 5
  }
  else if ((ballPosition === 10)) {
    ballPosition = ballPosition + 1
    ballPosition = ballPosition
    currentState = 5
  }
  else if ((ballPosition !== 0) && (ballPosition !== 10)) {
    ballPosition = ballPosition
    currentState = 5
  }
}
else if (currentState === 3) {
  if ((ballPosition !== 0) && (ballPosition !== 10)) {
    ballPosition = ballPosition - 1
    currentState = 1
  }
  else if ((ballPosition === 0)) {
    currentState = 5
  }
  else if ((ballPosition === 0)) {
    ballPosition = ballPosition - 1
    ballPosition = ballPosition + 1
    currentState = 5
  }
  else if ((ballPosition === 0)) {
    ballPosition = ballPosition - 1
    ballPosition = ballPosition
    currentState = 5
  }
  else if ((ballPosition === 0)) {
    ballPosition = ballPosition + 1
    ballPosition = ballPosition
    currentState = 5
  }
  else if ((ballPosition !== 0) && (ballPosition === 10)) {
    ballPosition = ballPosition - 1
    currentState = 6
  }
}
else if (currentState === 4) {
  if (true) {
    currentState = 5
  }
  else if (true) {
    ballPosition = ballPosition - 1
    ballPosition = ballPosition + 1
    currentState = 5
  }
  else if (true) {
    ballPosition = ballPosition - 1
    ballPosition = ballPosition
    currentState = 5
  }
  else if (true) {
    ballPosition = ballPosition + 1
    ballPosition = ballPosition
    currentState = 5
  }
}
else if (currentState === 5) {
  if ((ballPosition !== 0) && (ballPosition !== 10)) {
    ballPosition = ballPosition - 1
    currentState = 1
  }
  else if ((ballPosition === 0) && (ballPosition !== 10)) {
    ballPosition = ballPosition + 1
    currentState = 3
  }
  else if ((ballPosition === 0) && (ballPosition === 10)) {
    currentState = 5
  }
  else if ((ballPosition === 0) && (ballPosition === 10)) {
    ballPosition = ballPosition - 1
    ballPosition = ballPosition + 1
    currentState = 5
  }
  else if ((ballPosition === 0) && (ballPosition === 10)) {
    ballPosition = ballPosition - 1
    ballPosition = ballPosition
    currentState = 5
  }
  else if ((ballPosition === 0) && (ballPosition === 10)) {
    ballPosition = ballPosition + 1
    ballPosition = ballPosition
    currentState = 5
  }
  else if ((ballPosition !== 0) && (ballPosition === 10)) {
    ballPosition = ballPosition - 1
    currentState = 6
  }
}
else if (currentState === 6) {
  if ((ballPosition !== 10)) {
    ballPosition = ballPosition + 1
    currentState = 3
  }
  else if ((ballPosition === 10)) {
    currentState = 5
  }
  else if ((ballPosition === 10)) {
    ballPosition = ballPosition - 1
    ballPosition = ballPosition + 1
    currentState = 5
  }
  else if ((ballPosition === 10)) {
    ballPosition = ballPosition - 1
    ballPosition = ballPosition
    currentState = 5
  }
  else if ((ballPosition === 10)) {
    ballPosition = ballPosition + 1
    ballPosition = ballPosition
    currentState = 5
  }
}