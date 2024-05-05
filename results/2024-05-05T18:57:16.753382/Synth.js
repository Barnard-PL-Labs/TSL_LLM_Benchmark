if (currentState === 0) {
  if (!comeAlive && !comeDead) {
    cell.changeState = dead
    currentState = 0
  }
  else if (!comeAlive && !comeDead) {
    cell.changeState = cell.changeState
    currentState = 0
  }
  else if (!comeAlive && !comeDead) {
    cell.changeState = alive
    currentState = 0
  }
  else if (comeAlive && comeDead) {
    currentState = 0
  }
  else if (comeAlive && !comeDead) {
    cell.changeState = alive
    currentState = 0
  }
  else if (!comeAlive && comeDead) {
    cell.changeState = dead
    currentState = 0
  }
}