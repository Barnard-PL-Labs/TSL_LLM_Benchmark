if (currentState === 0) {
  if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = dead
    positionX = positionX
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && !pressS) {
    shootingCounter = shootingCounter + 1
    dead = dead
    positionX = positionX
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && !pressS) {
    positionX = positionX + 1
    dead = dead
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && !pressS) {
    positionX = positionX + 1
    shootingCounter = shootingCounter + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && !pressS) {
    positionX = positionX - 1
    dead = dead
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && !pressS) {
    positionX = positionX - 1
    shootingCounter = shootingCounter + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    positionX = positionX
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    shootingCounter = shootingCounter + 1
    positionX = positionX
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    positionX = positionX + 1
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    positionX = positionX + 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    positionX = positionX - 1
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    positionX = positionX - 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = dead
    positionX = positionX
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    shootingCounter = shootingCounter + 1
    dead = dead
    positionX = positionX
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    positionX = positionX + 1
    dead = dead
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    positionX = positionX + 1
    shootingCounter = shootingCounter + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    positionX = positionX - 1
    dead = dead
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    positionX = positionX - 1
    shootingCounter = shootingCounter + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    positionX = positionX
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    shootingCounter = shootingCounter + 1
    positionX = positionX
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    positionX = positionX + 1
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    positionX = positionX + 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    positionX = positionX - 1
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    positionX = positionX - 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByEnemy && !pressS) {
    dead = 1
    positionX = positionX
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByEnemy && !pressS) {
    dead = 1
    shootingCounter = shootingCounter + 1
    positionX = positionX
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByEnemy && !pressS) {
    dead = 1
    positionX = positionX + 1
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByEnemy && !pressS) {
    dead = 1
    positionX = positionX + 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByEnemy && !pressS) {
    dead = 1
    positionX = positionX - 1
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByEnemy && !pressS) {
    dead = 1
    positionX = positionX - 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByObstacle && !pressS) {
    dead = 1
    positionX = positionX
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByObstacle && !pressS) {
    dead = 1
    shootingCounter = shootingCounter + 1
    positionX = positionX
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByObstacle && !pressS) {
    dead = 1
    positionX = positionX + 1
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByObstacle && !pressS) {
    dead = 1
    positionX = positionX + 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByObstacle && !pressS) {
    dead = 1
    positionX = positionX - 1
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByObstacle && !pressS) {
    dead = 1
    positionX = positionX - 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByEnemy && !pressS) {
    dead = 1
    positionX = positionX
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByEnemy && !pressS) {
    dead = 1
    shootingCounter = shootingCounter + 1
    positionX = positionX
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByEnemy && !pressS) {
    dead = 1
    positionX = positionX + 1
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByEnemy && !pressS) {
    dead = 1
    positionX = positionX + 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByEnemy && !pressS) {
    dead = 1
    positionX = positionX - 1
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByEnemy && !pressS) {
    dead = 1
    positionX = positionX - 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByObstacle && !pressS) {
    dead = 1
    positionX = positionX
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByObstacle && !pressS) {
    dead = 1
    shootingCounter = shootingCounter + 1
    positionX = positionX
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByObstacle && !pressS) {
    dead = 1
    positionX = positionX + 1
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByObstacle && !pressS) {
    dead = 1
    positionX = positionX + 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByObstacle && !pressS) {
    dead = 1
    positionX = positionX - 1
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByObstacle && !pressS) {
    dead = 1
    positionX = positionX - 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && pressS) {
    shootingCounter = shootingCounter + 1
    dead = dead
    positionX = positionX
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && pressS) {
    positionX = positionX + 1
    shootingCounter = shootingCounter + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && pressS) {
    positionX = positionX - 1
    shootingCounter = shootingCounter + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && pressS) {
    dead = 1
    shootingCounter = shootingCounter + 1
    positionX = positionX
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && pressS) {
    dead = 1
    positionX = positionX + 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !hitByEnemy && !hitByObstacle && pressS) {
    dead = 1
    positionX = positionX - 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && pressS) {
    shootingCounter = shootingCounter + 1
    dead = dead
    positionX = positionX
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && pressS) {
    positionX = positionX + 1
    shootingCounter = shootingCounter + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && pressS) {
    positionX = positionX - 1
    shootingCounter = shootingCounter + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && pressS) {
    dead = 1
    shootingCounter = shootingCounter + 1
    positionX = positionX
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && pressS) {
    dead = 1
    positionX = positionX + 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !hitByEnemy && !hitByObstacle && pressS) {
    dead = 1
    positionX = positionX - 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByEnemy && pressS) {
    dead = 1
    shootingCounter = shootingCounter + 1
    positionX = positionX
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByEnemy && pressS) {
    dead = 1
    positionX = positionX + 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByEnemy && pressS) {
    dead = 1
    positionX = positionX - 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByObstacle && pressS) {
    dead = 1
    shootingCounter = shootingCounter + 1
    positionX = positionX
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByObstacle && pressS) {
    dead = 1
    positionX = positionX + 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && hitByObstacle && pressS) {
    dead = 1
    positionX = positionX - 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByEnemy && pressS) {
    dead = 1
    shootingCounter = shootingCounter + 1
    positionX = positionX
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByEnemy && pressS) {
    dead = 1
    positionX = positionX + 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByEnemy && pressS) {
    dead = 1
    positionX = positionX - 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByObstacle && pressS) {
    dead = 1
    shootingCounter = shootingCounter + 1
    positionX = positionX
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByObstacle && pressS) {
    dead = 1
    positionX = positionX + 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && hitByObstacle && pressS) {
    dead = 1
    positionX = positionX - 1
    shootingCounter = shootingCounter + 1
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
    positionX = positionX - 1
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && hitByEnemy && !pressS) {
    dead = 1
    positionX = positionX - 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && hitByObstacle && !pressS) {
    dead = 1
    positionX = positionX - 1
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && hitByObstacle && !pressS) {
    dead = 1
    positionX = positionX - 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    positionX = positionX - 1
    dead = dead
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    positionX = positionX - 1
    shootingCounter = shootingCounter + 1
    dead = dead
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    positionX = positionX - 1
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    positionX = positionX - 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    positionX = positionX + 1
    dead = dead
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    positionX = positionX + 1
    shootingCounter = shootingCounter + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    positionX = positionX + 1
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && !hitByEnemy && !hitByObstacle && !pressS) {
    dead = 1
    positionX = positionX + 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && hitByEnemy && !pressS) {
    dead = 1
    positionX = positionX + 1
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && hitByEnemy && !pressS) {
    dead = 1
    positionX = positionX + 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && hitByObstacle && !pressS) {
    dead = 1
    positionX = positionX + 1
    shootingCounter = shootingCounter
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && hitByObstacle && !pressS) {
    dead = 1
    positionX = positionX + 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && hitByEnemy && pressS) {
    dead = 1
    positionX = positionX - 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && hitByObstacle && pressS) {
    dead = 1
    positionX = positionX - 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && !hitByEnemy && !hitByObstacle && pressS) {
    positionX = positionX - 1
    shootingCounter = shootingCounter + 1
    dead = dead
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && !hitByEnemy && !hitByObstacle && pressS) {
    dead = 1
    positionX = positionX - 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && !hitByEnemy && !hitByObstacle && pressS) {
    positionX = positionX + 1
    shootingCounter = shootingCounter + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && !hitByEnemy && !hitByObstacle && pressS) {
    dead = 1
    positionX = positionX + 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && hitByEnemy && pressS) {
    dead = 1
    positionX = positionX + 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && hitByObstacle && pressS) {
    dead = 1
    positionX = positionX + 1
    shootingCounter = shootingCounter + 1
    currentState = 0
  }
}