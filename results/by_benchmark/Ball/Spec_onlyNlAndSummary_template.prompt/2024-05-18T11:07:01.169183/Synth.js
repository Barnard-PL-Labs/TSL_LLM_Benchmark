if (currentState === 0) {
  if ((ballPos !== 0) && (ballPos !== 10)) {
    ballPos = ballPos - 1
    currentState = 1
  }
  else if ((ballPos !== 0) && (ballPos === 10)) {
    ballPos = ballPos - 1
    currentState = 2
  }
  else if ((ballPos === 0) && (ballPos !== 10)) {
    ballPos = ballPos + 1
    currentState = 3
  }
  else if ((ballPos === 0) && (ballPos === 10)) {
    ballPos = ballPos
    currentState = 4
  }
  else if ((ballPos === 0) && (ballPos === 10)) {
    ballPos = ballPos + 1
    currentState = 4
  }
  else if ((ballPos === 0) && (ballPos === 10)) {
    ballPos = ballPos - 1
    currentState = 4
  }
}
else if (currentState === 1) {
  if ((ballPos !== 0) && (ballPos !== 10)) {
    ballPos = ballPos - 1
    currentState = 1
  }
  else if ((ballPos === 0) && (ballPos !== 10)) {
    ballPos = ballPos + 1
    currentState = 3
  }
  else if ((ballPos === 10)) {
    currentState = 8
  }
  else if ((ballPos === 10)) {
    ballPos = ballPos - 1
    ballPos = ballPos + 1
    currentState = 8
  }
  else if ((ballPos === 10)) {
    ballPos = ballPos - 1
    ballPos = ballPos
    currentState = 8
  }
  else if ((ballPos === 10)) {
    ballPos = ballPos + 1
    ballPos = ballPos
    currentState = 8
  }
}
else if (currentState === 2) {
  if ((ballPos !== 0) && (ballPos !== 10) && (ballPos === 9)) {
    ballPos = ballPos - 1
    currentState = 1
  }
  else if ((ballPos === 0) && (ballPos !== 10)) {
    ballPos = ballPos + 1
    currentState = 3
  }
  else if ((ballPos !== 0) && (ballPos !== 10) && (ballPos !== 9)) {
    ballPos = ballPos
    currentState = 5
  }
  else if ((ballPos === 10)) {
    currentState = 8
  }
  else if ((ballPos === 10)) {
    ballPos = ballPos - 1
    ballPos = ballPos + 1
    currentState = 8
  }
  else if ((ballPos === 10)) {
    ballPos = ballPos - 1
    ballPos = ballPos
    currentState = 8
  }
  else if ((ballPos === 10)) {
    ballPos = ballPos + 1
    ballPos = ballPos
    currentState = 8
  }
}
else if (currentState === 3) {
  if ((ballPos !== 0) && (ballPos !== 10) && (ballPos !== 1)) {
    ballPos = ballPos - 1
    currentState = 1
  }
  else if ((ballPos !== 0) && (ballPos !== 10) && (ballPos === 1)) {
    ballPos = ballPos + 1
    currentState = 6
  }
  else if ((ballPos !== 0) && (ballPos === 10)) {
    ballPos = ballPos - 1
    currentState = 7
  }
  else if ((ballPos === 0)) {
    currentState = 8
  }
  else if ((ballPos === 0)) {
    ballPos = ballPos - 1
    ballPos = ballPos + 1
    currentState = 8
  }
  else if ((ballPos === 0)) {
    ballPos = ballPos - 1
    ballPos = ballPos
    currentState = 8
  }
  else if ((ballPos === 0)) {
    ballPos = ballPos + 1
    ballPos = ballPos
    currentState = 8
  }
}
else if (currentState === 4) {
  if (true) {
    currentState = 8
  }
  else if (true) {
    ballPos = ballPos - 1
    ballPos = ballPos + 1
    currentState = 8
  }
  else if (true) {
    ballPos = ballPos - 1
    ballPos = ballPos
    currentState = 8
  }
  else if (true) {
    ballPos = ballPos + 1
    ballPos = ballPos
    currentState = 8
  }
}
else if (currentState === 5) {
  if ((ballPos !== 0) && (ballPos !== 10)) {
    ballPos = ballPos - 1
    currentState = 1
  }
  else if ((ballPos === 0) && (ballPos !== 10)) {
    ballPos = ballPos + 1
    currentState = 3
  }
  else if ((ballPos !== 0) && (ballPos === 10)) {
    ballPos = ballPos - 1
    currentState = 7
  }
  else if ((ballPos === 0) && (ballPos === 10)) {
    currentState = 8
  }
  else if ((ballPos === 0) && (ballPos === 10)) {
    ballPos = ballPos - 1
    ballPos = ballPos + 1
    currentState = 8
  }
  else if ((ballPos === 0) && (ballPos === 10)) {
    ballPos = ballPos - 1
    ballPos = ballPos
    currentState = 8
  }
  else if ((ballPos === 0) && (ballPos === 10)) {
    ballPos = ballPos + 1
    ballPos = ballPos
    currentState = 8
  }
}
else if (currentState === 6) {
  if ((ballPos !== 0) && (ballPos !== 10)) {
    ballPos = ballPos + 1
    currentState = 6
  }
  else if ((ballPos !== 0) && (ballPos === 10)) {
    ballPos = ballPos - 1
    currentState = 7
  }
  else if ((ballPos === 0)) {
    currentState = 8
  }
  else if ((ballPos === 0)) {
    ballPos = ballPos - 1
    ballPos = ballPos + 1
    currentState = 8
  }
  else if ((ballPos === 0)) {
    ballPos = ballPos - 1
    ballPos = ballPos
    currentState = 8
  }
  else if ((ballPos === 0)) {
    ballPos = ballPos + 1
    ballPos = ballPos
    currentState = 8
  }
}
else if (currentState === 7) {
  if ((ballPos !== 0) && (ballPos !== 10) && (ballPos === 9)) {
    ballPos = ballPos - 1
    currentState = 1
  }
  else if ((ballPos === 0) && (ballPos !== 10)) {
    ballPos = ballPos + 1
    currentState = 3
  }
  else if ((ballPos === 10)) {
    currentState = 8
  }
  else if ((ballPos === 10)) {
    ballPos = ballPos - 1
    ballPos = ballPos + 1
    currentState = 8
  }
  else if ((ballPos === 10)) {
    ballPos = ballPos - 1
    ballPos = ballPos
    currentState = 8
  }
  else if ((ballPos === 10)) {
    ballPos = ballPos + 1
    ballPos = ballPos
    currentState = 8
  }
  else if ((ballPos !== 0) && (ballPos !== 10) && (ballPos !== 9)) {
    ballPos = ballPos + 1
    currentState = 8
  }
}
else if (currentState === 8) {
  if ((ballPos !== 0) && (ballPos !== 10)) {
    ballPos = ballPos - 1
    currentState = 1
  }
  else if ((ballPos !== 0) && (ballPos === 10)) {
    ballPos = ballPos - 1
    currentState = 7
  }
  else if ((ballPos === 0)) {
    currentState = 8
  }
  else if ((ballPos === 0)) {
    ballPos = ballPos - 1
    ballPos = ballPos + 1
    currentState = 8
  }
  else if ((ballPos === 0)) {
    ballPos = ballPos - 1
    ballPos = ballPos
    currentState = 8
  }
  else if ((ballPos === 0)) {
    ballPos = ballPos + 1
    ballPos = ballPos
    currentState = 8
  }
}