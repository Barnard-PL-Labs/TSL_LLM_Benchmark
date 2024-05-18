if (currentState === 0) {
  if (!comeAlive && !comeDead) {
    changeState = dead
    currentState = 0
  }
  else if (!comeAlive && !comeDead) {
    changeState = changeState
    currentState = 0
  }
  else if (!comeAlive && !comeDead) {
    changeState = alive
    currentState = 0
  }
  else if (comeAlive && comeDead) {
    currentState = 0
  }
  else if (comeAlive && !comeDead) {
    changeState = alive
    currentState = 0
  }
  else if (!comeAlive && comeDead) {
    changeState = dead
    currentState = 0
  }
}