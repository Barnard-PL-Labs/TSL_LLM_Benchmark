if (currentState === 0) {
  if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x
    shooting.action = shooting.action
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x - 1
    shooting.action = shooting.action
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x - 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x + 1
    shooting.action = shooting.action
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x + 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && !pressS(e)) {
    dead = dead
    ship.position.x = ship.position.x
    shooting.action = shooting.action
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && !pressS(e)) {
    dead = dead
    ship.position.x = ship.position.x
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && !pressS(e)) {
    dead = dead
    ship.position.x = ship.position.x - 1
    shooting.action = shooting.action
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && !pressS(e)) {
    dead = dead
    ship.position.x = ship.position.x - 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && !pressS(e)) {
    dead = dead
    ship.position.x = ship.position.x + 1
    shooting.action = shooting.action
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && !pressS(e)) {
    dead = dead
    ship.position.x = ship.position.x + 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x
    shooting.action = shooting.action
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x - 1
    shooting.action = shooting.action
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x - 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x + 1
    shooting.action = shooting.action
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x + 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = dead
    ship.position.x = ship.position.x
    shooting.action = shooting.action
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = dead
    ship.position.x = ship.position.x
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = dead
    ship.position.x = ship.position.x - 1
    shooting.action = shooting.action
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = dead
    ship.position.x = ship.position.x - 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = dead
    ship.position.x = ship.position.x + 1
    shooting.action = shooting.action
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = dead
    ship.position.x = ship.position.x + 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x - 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x + 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && pressS(e)) {
    dead = dead
    ship.position.x = ship.position.x
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && pressS(e)) {
    dead = dead
    ship.position.x = ship.position.x - 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && pressS(e)) {
    dead = dead
    ship.position.x = ship.position.x + 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x - 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x + 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && pressS(e)) {
    dead = dead
    ship.position.x = ship.position.x
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && pressS(e)) {
    dead = dead
    ship.position.x = ship.position.x - 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && pressS(e)) {
    dead = dead
    ship.position.x = ship.position.x + 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x
    shooting.action = shooting.action
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x - 1
    shooting.action = shooting.action
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x - 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x + 1
    shooting.action = shooting.action
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x + 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x
    shooting.action = shooting.action
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x - 1
    shooting.action = shooting.action
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x - 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x + 1
    shooting.action = shooting.action
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x + 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (pressL(e) && pressR(e)) {
    currentState = 0
  }
  else if (pressL(e) && pressUp(e)) {
    currentState = 0
  }
  else if (pressL(e) && pressDown(e)) {
    currentState = 0
  }
  else if (pressR(e) && pressUp(e)) {
    currentState = 0
  }
  else if (pressR(e) && pressDown(e)) {
    currentState = 0
  }
  else if (pressUp(e) && pressDown(e)) {
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && shipHit && pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && shipHit && pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x - 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && shipHit && pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x + 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && shipHit && pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && shipHit && pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x - 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && shipHit && pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x + 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x - 1
    shooting.action = shooting.action
    currentState = 0
  }
  else if (pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x - 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = dead
    ship.position.x = ship.position.x - 1
    shooting.action = shooting.action
    currentState = 0
  }
  else if (pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = dead
    ship.position.x = ship.position.x - 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x + 1
    shooting.action = shooting.action
    currentState = 0
  }
  else if (!pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x + 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = dead
    ship.position.x = ship.position.x + 1
    shooting.action = shooting.action
    currentState = 0
  }
  else if (!pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = dead
    ship.position.x = ship.position.x + 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e) && !shipHit && pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x - 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e) && !shipHit && pressS(e)) {
    dead = dead
    ship.position.x = ship.position.x - 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e) && shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x - 1
    shooting.action = shooting.action
    currentState = 0
  }
  else if (pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e) && shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x - 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e) && !shipHit && pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x + 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e) && !shipHit && pressS(e)) {
    dead = dead
    ship.position.x = ship.position.x + 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e) && shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x + 1
    shooting.action = shooting.action
    currentState = 0
  }
  else if (!pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e) && shipHit && !pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x + 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e) && shipHit && pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x - 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
  else if (!pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e) && shipHit && pressS(e)) {
    dead = 1
    ship.position.x = ship.position.x + 1
    shooting.action = shooting.action + 1
    currentState = 0
  }
}