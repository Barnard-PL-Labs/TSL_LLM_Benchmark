function updateState({currentState, alive, dead, index, changeState}) {
  let _next_changeState

  if (currentState === 0) {
    if (!comeAlive(index) && !comeDead(index)) {
      _next_changeState = dead
      currentState = 0
    }
    else if (!comeAlive(index) && !comeDead(index)) {
      _next_changeState = changeState
      currentState = 0
    }
    else if (!comeAlive(index) && !comeDead(index)) {
      _next_changeState = alive
      currentState = 0
    }
    else if (comeAlive(index) && comeDead(index)) {
      currentState = 0
    }
    else if (comeAlive(index) && !comeDead(index)) {
      _next_changeState = alive
      currentState = 0
    }
    else if (!comeAlive(index) && comeDead(index)) {
      _next_changeState = dead
      currentState = 0
    }
  }

  return {currentState, changeState: _next_changeState}
}