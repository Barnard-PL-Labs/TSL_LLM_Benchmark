if (currentState === 0) {
    if (!comeAlive(idx) && !comeDead(idx)) {
        alive = alive
        currentState = 0
    } else if (!comeAlive(idx) && !comeDead(idx)) {
        alive = True
        currentState = 0
    } else if (!comeAlive(idx) && !comeDead(idx)) {
        alive = False
        currentState = 0
    } else if (comeAlive(idx) && comeDead(idx)) {
        currentState = 0
    } else if (!comeAlive(idx) && comeDead(idx)) {
        alive = False
        currentState = 0
    } else if (comeAlive(idx) && !comeDead(idx)) {
        alive = True
        currentState = 0
    }
}
