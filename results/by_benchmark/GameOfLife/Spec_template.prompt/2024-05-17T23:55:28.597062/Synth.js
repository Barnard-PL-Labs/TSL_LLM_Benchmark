function updateState({currentState, index, p, alive}) {
  let _next_alive

  if (currentState === 0) {
    if (!comeAlive(index) && !comeDead(index)) {
      _next_alive = p
      currentState = 0
    }
    else if (!comeAlive(index) && !comeDead(index)) {
      _next_alive = p
      currentState = 0
    }
    else if (!comeAlive(index) && !comeDead(index)) {
      _next_alive = alive
      currentState = 0
    }
    else if (comeAlive(index) && comeDead(index)) {
      currentState = 0
    }
    else if (!comeAlive(index) && comeDead(index)) {
      _next_alive = p
      currentState = 0
    }
    else if (comeAlive(index) && !comeDead(index)) {
      _next_alive = p
      currentState = 0
    }
  }

  return {currentState, alive: _next_alive}
}