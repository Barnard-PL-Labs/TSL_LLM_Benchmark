if (currentState === 0) {
  if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = dead
    position = position
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && !pressS) {
    shootCounter = shootCounter + 1
    dead = dead
    position = position
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && !pressS) {
    position = position + 1
    dead = dead
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && !pressS) {
    position = position + 1
    shootCounter = shootCounter + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && !pressS) {
    position = position - 1
    dead = dead
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && !pressS) {
    position = position - 1
    shootCounter = shootCounter + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    position = position
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    shootCounter = shootCounter + 1
    position = position
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    position = position + 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    position = position + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    position = position - 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    position = position - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = dead
    position = position
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    shootCounter = shootCounter + 1
    dead = dead
    position = position
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    position = position + 1
    dead = dead
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    position = position + 1
    shootCounter = shootCounter + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    position = position - 1
    dead = dead
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    position = position - 1
    shootCounter = shootCounter + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    position = position
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    shootCounter = shootCounter + 1
    position = position
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    position = position + 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    position = position + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    position = position - 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    position = position - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByEnemy && !pressS) {
    dead = 1
    position = position
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByEnemy && !pressS) {
    dead = 1
    shootCounter = shootCounter + 1
    position = position
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByEnemy && !pressS) {
    dead = 1
    position = position + 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByEnemy && !pressS) {
    dead = 1
    position = position + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByEnemy && !pressS) {
    dead = 1
    position = position - 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByEnemy && !pressS) {
    dead = 1
    position = position - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByObstacle && !pressS) {
    dead = 1
    position = position
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByObstacle && !pressS) {
    dead = 1
    shootCounter = shootCounter + 1
    position = position
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByObstacle && !pressS) {
    dead = 1
    position = position + 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByObstacle && !pressS) {
    dead = 1
    position = position + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByObstacle && !pressS) {
    dead = 1
    position = position - 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByObstacle && !pressS) {
    dead = 1
    position = position - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByEnemy && !pressS) {
    dead = 1
    position = position
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByEnemy && !pressS) {
    dead = 1
    shootCounter = shootCounter + 1
    position = position
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByEnemy && !pressS) {
    dead = 1
    position = position + 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByEnemy && !pressS) {
    dead = 1
    position = position + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByEnemy && !pressS) {
    dead = 1
    position = position - 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByEnemy && !pressS) {
    dead = 1
    position = position - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByObstacle && !pressS) {
    dead = 1
    position = position
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByObstacle && !pressS) {
    dead = 1
    shootCounter = shootCounter + 1
    position = position
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByObstacle && !pressS) {
    dead = 1
    position = position + 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByObstacle && !pressS) {
    dead = 1
    position = position + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByObstacle && !pressS) {
    dead = 1
    position = position - 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByObstacle && !pressS) {
    dead = 1
    position = position - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && pressS) {
    shootCounter = shootCounter + 1
    dead = dead
    position = position
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && pressS) {
    position = position + 1
    shootCounter = shootCounter + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && pressS) {
    position = position - 1
    shootCounter = shootCounter + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && pressS) {
    dead = 1
    shootCounter = shootCounter + 1
    position = position
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && pressS) {
    dead = 1
    position = position + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && pressS) {
    dead = 1
    position = position - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && pressS) {
    shootCounter = shootCounter + 1
    dead = dead
    position = position
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && pressS) {
    position = position + 1
    shootCounter = shootCounter + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && pressS) {
    position = position - 1
    shootCounter = shootCounter + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && pressS) {
    dead = 1
    shootCounter = shootCounter + 1
    position = position
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && pressS) {
    dead = 1
    position = position + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && pressS) {
    dead = 1
    position = position - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByEnemy && pressS) {
    dead = 1
    shootCounter = shootCounter + 1
    position = position
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByEnemy && pressS) {
    dead = 1
    position = position + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByEnemy && pressS) {
    dead = 1
    position = position - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByObstacle && pressS) {
    dead = 1
    shootCounter = shootCounter + 1
    position = position
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByObstacle && pressS) {
    dead = 1
    position = position + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByObstacle && pressS) {
    dead = 1
    position = position - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByEnemy && pressS) {
    dead = 1
    shootCounter = shootCounter + 1
    position = position
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByEnemy && pressS) {
    dead = 1
    position = position + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByEnemy && pressS) {
    dead = 1
    position = position - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByObstacle && pressS) {
    dead = 1
    shootCounter = shootCounter + 1
    position = position
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByObstacle && pressS) {
    dead = 1
    position = position + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByObstacle && pressS) {
    dead = 1
    position = position - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (pressL && pressR) {
    currentState = 0
  }
  else if (pressL && pressUp) {
    currentState = 0
  }
  else if (pressL && pressDown) {
    currentState = 0
  }
  else if (pressR && pressUp) {
    currentState = 0
  }
  else if (pressR && pressDown) {
    currentState = 0
  }
  else if (pressUp && pressDown) {
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && hitByEnemy && !pressS) {
    dead = 1
    position = position - 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && hitByEnemy && !pressS) {
    dead = 1
    position = position - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && hitByObstacle && !pressS) {
    dead = 1
    position = position - 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && hitByObstacle && !pressS) {
    dead = 1
    position = position - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    position = position - 1
    dead = dead
    shootCounter = shootCounter
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    position = position - 1
    shootCounter = shootCounter + 1
    dead = dead
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    position = position - 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    position = position - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    position = position + 1
    dead = dead
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    position = position + 1
    shootCounter = shootCounter + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    position = position + 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    position = position + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && hitByEnemy && !pressS) {
    dead = 1
    position = position + 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && hitByEnemy && !pressS) {
    dead = 1
    position = position + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && hitByObstacle && !pressS) {
    dead = 1
    position = position + 1
    shootCounter = shootCounter
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && hitByObstacle && !pressS) {
    dead = 1
    position = position + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && hitByEnemy && pressS) {
    dead = 1
    position = position - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && hitByObstacle && pressS) {
    dead = 1
    position = position - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && !hitByEnemy && !hitByObstacle && pressS) {
    position = position - 1
    shootCounter = shootCounter + 1
    dead = dead
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && !hitByEnemy && !hitByObstacle && pressS) {
    dead = 1
    position = position - 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && !hitByEnemy && !hitByObstacle && pressS) {
    position = position + 1
    shootCounter = shootCounter + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && !hitByEnemy && !hitByObstacle && pressS) {
    dead = 1
    position = position + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && hitByEnemy && pressS) {
    dead = 1
    position = position + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && hitByObstacle && pressS) {
    dead = 1
    position = position + 1
    shootCounter = shootCounter + 1
    currentState = 0
  }
}