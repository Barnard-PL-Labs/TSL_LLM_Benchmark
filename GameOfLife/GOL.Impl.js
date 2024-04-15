function changeAlive(index) {
    if (comeAlive(index) && !comeDead(index)) {
        alive[index] < -true
    } else if (!comeAlive(index) && comeDead(index)) {
        alive[index] < -false
    }
}

function comeAlive(index) {
    countNeighboursAlive(index) == 3
}
