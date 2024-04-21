if (currentState === 0) {
    if (!comeAlive(index) && !comeDead(index)) {
        alive = alive - 1
        currentState = 0
    } else if (!comeAlive(index) && !comeDead(index)) {
        alive = alive + 1
        currentState = 0
    } else if (!comeAlive(index) && !comeDead(index)) {
        alive = alive
        currentState = 0
    } else if (comeAlive(index) && comeDead(index)) {
        currentState = 0
    } else if (comeAlive(index) && !comeDead(index)) {
        alive = alive + 1
        currentState = 0
    } else if (!comeAlive(index) && comeDead(index)) {
        alive = alive - 1
        currentState = 0
    }
}
