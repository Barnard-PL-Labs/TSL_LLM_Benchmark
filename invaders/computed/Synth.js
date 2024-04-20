if (currentState === 0) {
    if (!pressL(e) && !pressR(e) && !pressUp(e) && !hit(ship) && !pressS(e)) {
        dead = dead
        pos = pos
        shoot = shoot
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressUp(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = dead
        pos = pos
        shoot = shoot + 1
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressUp(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = dead
        pos = pos - 1
        shoot = shoot
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressUp(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = dead
        pos = pos - 1
        shoot = shoot + 1
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressUp(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = dead
        pos = pos + 1
        shoot = shoot
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressUp(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = dead
        pos = pos + 1
        shoot = shoot + 1
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressUp(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = 1
        pos = pos
        shoot = shoot
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressUp(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = 1
        pos = pos
        shoot = shoot + 1
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressUp(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = 1
        pos = pos - 1
        shoot = shoot
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressUp(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = 1
        pos = pos - 1
        shoot = shoot + 1
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressUp(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = 1
        pos = pos + 1
        shoot = shoot
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressUp(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = 1
        pos = pos + 1
        shoot = shoot + 1
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = dead
        pos = pos
        shoot = shoot
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = dead
        pos = pos
        shoot = shoot + 1
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = dead
        pos = pos - 1
        shoot = shoot
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = dead
        pos = pos - 1
        shoot = shoot + 1
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = dead
        pos = pos + 1
        shoot = shoot
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = dead
        pos = pos + 1
        shoot = shoot + 1
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = 1
        pos = pos
        shoot = shoot
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = 1
        pos = pos
        shoot = shoot + 1
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = 1
        pos = pos - 1
        shoot = shoot
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = 1
        pos = pos - 1
        shoot = shoot + 1
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = 1
        pos = pos + 1
        shoot = shoot
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = 1
        pos = pos + 1
        shoot = shoot + 1
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressUp(e) &&
        !hit(ship) &&
        pressS(e)
    ) {
        dead = dead
        pos = pos
        shoot = shoot + 1
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressUp(e) &&
        !hit(ship) &&
        pressS(e)
    ) {
        dead = dead
        pos = pos - 1
        shoot = shoot + 1
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressUp(e) &&
        !hit(ship) &&
        pressS(e)
    ) {
        dead = dead
        pos = pos + 1
        shoot = shoot + 1
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressUp(e) &&
        !hit(ship) &&
        pressS(e)
    ) {
        dead = 1
        pos = pos
        shoot = shoot + 1
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressUp(e) &&
        !hit(ship) &&
        pressS(e)
    ) {
        dead = 1
        pos = pos - 1
        shoot = shoot + 1
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressUp(e) &&
        !hit(ship) &&
        pressS(e)
    ) {
        dead = 1
        pos = pos + 1
        shoot = shoot + 1
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        pressS(e)
    ) {
        dead = dead
        pos = pos
        shoot = shoot + 1
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        pressS(e)
    ) {
        dead = dead
        pos = pos - 1
        shoot = shoot + 1
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        pressS(e)
    ) {
        dead = dead
        pos = pos + 1
        shoot = shoot + 1
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        pressS(e)
    ) {
        dead = 1
        pos = pos
        shoot = shoot + 1
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        pressS(e)
    ) {
        dead = 1
        pos = pos - 1
        shoot = shoot + 1
        currentState = 0
    } else if (
        !pressL(e) &&
        !pressR(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        pressS(e)
    ) {
        dead = 1
        pos = pos + 1
        shoot = shoot + 1
        currentState = 0
    } else if (pressL(e) && pressR(e)) {
        currentState = 0
    } else if (pressL(e) && pressUp(e)) {
        currentState = 0
    } else if (pressL(e) && pressDown(e)) {
        currentState = 0
    } else if (pressR(e) && pressUp(e)) {
        currentState = 0
    } else if (pressR(e) && pressDown(e)) {
        currentState = 0
    } else if (pressUp(e) && pressDown(e)) {
        currentState = 0
    } else if (
        pressL(e) &&
        !pressR(e) &&
        !pressUp(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = dead
        pos = pos - 1
        shoot = shoot
        currentState = 0
    } else if (
        pressL(e) &&
        !pressR(e) &&
        !pressUp(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = dead
        pos = pos - 1
        shoot = shoot + 1
        currentState = 0
    } else if (
        pressL(e) &&
        !pressR(e) &&
        !pressUp(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = 1
        pos = pos - 1
        shoot = shoot
        currentState = 0
    } else if (
        pressL(e) &&
        !pressR(e) &&
        !pressUp(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = 1
        pos = pos - 1
        shoot = shoot + 1
        currentState = 0
    } else if (
        !pressL(e) &&
        pressR(e) &&
        !pressUp(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = dead
        pos = pos + 1
        shoot = shoot
        currentState = 0
    } else if (
        !pressL(e) &&
        pressR(e) &&
        !pressUp(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = dead
        pos = pos + 1
        shoot = shoot + 1
        currentState = 0
    } else if (
        !pressL(e) &&
        pressR(e) &&
        !pressUp(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = 1
        pos = pos + 1
        shoot = shoot
        currentState = 0
    } else if (
        !pressL(e) &&
        pressR(e) &&
        !pressUp(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        !pressS(e)
    ) {
        dead = 1
        pos = pos + 1
        shoot = shoot + 1
        currentState = 0
    } else if (!pressL(e) && !pressR(e) && !pressUp(e) && hit(ship)) {
        currentState = 0
    } else if (!pressL(e) && !pressR(e) && !pressDown(e) && hit(ship)) {
        currentState = 0
    } else if (!pressL(e) && !pressUp(e) && !pressDown(e) && hit(ship)) {
        currentState = 0
    } else if (!pressR(e) && !pressUp(e) && !pressDown(e) && hit(ship)) {
        currentState = 0
    } else if (
        pressL(e) &&
        !pressR(e) &&
        !pressUp(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        pressS(e)
    ) {
        dead = dead
        pos = pos - 1
        shoot = shoot + 1
        currentState = 0
    } else if (
        pressL(e) &&
        !pressR(e) &&
        !pressUp(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        pressS(e)
    ) {
        dead = 1
        pos = pos - 1
        shoot = shoot + 1
        currentState = 0
    } else if (
        !pressL(e) &&
        pressR(e) &&
        !pressUp(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        pressS(e)
    ) {
        dead = dead
        pos = pos + 1
        shoot = shoot + 1
        currentState = 0
    } else if (
        !pressL(e) &&
        pressR(e) &&
        !pressUp(e) &&
        !pressDown(e) &&
        !hit(ship) &&
        pressS(e)
    ) {
        dead = 1
        pos = pos + 1
        shoot = shoot + 1
        currentState = 0
    }
}
