if (currentState === 0) {
    if (!comeAlive(index) && !comeDead(index)) {
        currentState = 0
    } else if (comeAlive(index) && comeDead(index)) {
        currentState = 0
    } else if (comeAlive(index) && !comeDead(index)) {
        alive = True
        currentState = 0
    } else if (!comeAlive(index) && comeDead(index)) {
        alive = False
        currentState = 0
    }
}