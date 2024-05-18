if (currentState === 0) {
  if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x - 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x + 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && !pressS(e)) {
    dead = dead
    shipPosition.x = shipPosition.x
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && !pressS(e)) {
    dead = dead
    shipPosition.x = shipPosition.x
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && !pressS(e)) {
    dead = dead
    shipPosition.x = shipPosition.x - 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && !pressS(e)) {
    dead = dead
    shipPosition.x = shipPosition.x - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && !pressS(e)) {
    dead = dead
    shipPosition.x = shipPosition.x + 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && !pressS(e)) {
    dead = dead
    shipPosition.x = shipPosition.x + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x - 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x + 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = dead
    shipPosition.x = shipPosition.x
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = dead
    shipPosition.x = shipPosition.x
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = dead
    shipPosition.x = shipPosition.x - 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = dead
    shipPosition.x = shipPosition.x - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = dead
    shipPosition.x = shipPosition.x + 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = dead
    shipPosition.x = shipPosition.x + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && pressS(e)) {
    dead = dead
    shipPosition.x = shipPosition.x
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && pressS(e)) {
    dead = dead
    shipPosition.x = shipPosition.x - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && !shipHit && pressS(e)) {
    dead = dead
    shipPosition.x = shipPosition.x + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && pressS(e)) {
    dead = dead
    shipPosition.x = shipPosition.x
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && pressS(e)) {
    dead = dead
    shipPosition.x = shipPosition.x - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && !shipHit && pressS(e)) {
    dead = dead
    shipPosition.x = shipPosition.x + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x - 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x + 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x - 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x + 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x + 1
    shootCounter = shootCounter + 1
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
    shipPosition.x = shipPosition.x
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && shipHit && pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressUp(e) && shipHit && pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && shipHit && pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && shipHit && pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e) && !pressDown(e) && shipHit && pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x - 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = dead
    shipPosition.x = shipPosition.x - 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = dead
    shipPosition.x = shipPosition.x - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x + 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = dead
    shipPosition.x = shipPosition.x + 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e) && !shipHit && !pressS(e)) {
    dead = dead
    shipPosition.x = shipPosition.x + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e) && !shipHit && pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e) && !shipHit && pressS(e)) {
    dead = dead
    shipPosition.x = shipPosition.x - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e) && shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x - 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e) && shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e) && !shipHit && pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e) && !shipHit && pressS(e)) {
    dead = dead
    shipPosition.x = shipPosition.x + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e) && shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x + 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e) && shipHit && !pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (pressL(e) && !pressR(e) && !pressUp(e) && !pressDown(e) && shipHit && pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL(e) && pressR(e) && !pressUp(e) && !pressDown(e) && shipHit && pressS(e)) {
    dead = 1
    shipPosition.x = shipPosition.x + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
}