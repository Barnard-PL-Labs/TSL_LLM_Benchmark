if (currentState === 0) {
  if (!comeAlive && !comeDead) {
    cellState = changeState(dead)
    currentState = 0
  }
  else if (!comeAlive && !comeDead) {
    cellState = changeState(alive)
    currentState = 0
  }
  else if (!comeAlive && !comeDead) {
    cellState = cellState
    currentState = 0
  }
  else if (comeAlive && comeDead) {
    currentState = 0
  }
  else if (comeAlive && !comeDead) {
    cellState = changeState(alive)
    currentState = 0
  }
  else if (!comeAlive && comeDead) {
    cellState = changeState(dead)
    currentState = 0
  }
}