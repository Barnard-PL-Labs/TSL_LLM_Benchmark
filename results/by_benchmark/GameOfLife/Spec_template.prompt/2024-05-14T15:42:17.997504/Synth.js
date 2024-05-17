if (currentState === 0) {
  if (!comeAlive(index) && !comeDead(index)) {
    changeState = dead
    currentState = 0
  }
  else if (!comeAlive(index) && !comeDead(index)) {
    changeState = changeState
    currentState = 0
  }
  else if (!comeAlive(index) && !comeDead(index)) {
    changeState = alive
    currentState = 0
  }
  else if (comeAlive(index) && comeDead(index)) {
    currentState = 0
  }
  else if (comeAlive(index) && !comeDead(index)) {
    changeState = alive
    currentState = 0
  }
  else if (!comeAlive(index) && comeDead(index)) {
    changeState = dead
    currentState = 0
  }
}