if (currentState === 0) {
  if (!pressL && !pressR && !pressUp && !pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX
    shoot = shoot
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !pressS && !hitByEnemy && !hitByObstacle) {
    dead = 1
    posX = posX
    shoot = shoot
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !pressS && !hitByEnemy && !hitByObstacle) {
    shoot = shoot + 1
    posX = posX
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !pressS && !hitByEnemy && !hitByObstacle) {
    shoot = shoot + 1
    dead = 1
    posX = posX
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX + 1
    shoot = shoot
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX + 1
    dead = 1
    shoot = shoot
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX + 1
    shoot = shoot + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX + 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX - 1
    shoot = shoot
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX - 1
    dead = 1
    shoot = shoot
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX - 1
    shoot = shoot + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX - 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX
    shoot = shoot
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !pressS && !hitByEnemy && !hitByObstacle) {
    dead = 1
    posX = posX
    shoot = shoot
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !pressS && !hitByEnemy && !hitByObstacle) {
    shoot = shoot + 1
    posX = posX
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !pressS && !hitByEnemy && !hitByObstacle) {
    shoot = shoot + 1
    dead = 1
    posX = posX
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX + 1
    shoot = shoot
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX + 1
    dead = 1
    shoot = shoot
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX + 1
    shoot = shoot + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX + 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX - 1
    shoot = shoot
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX - 1
    dead = 1
    shoot = shoot
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX - 1
    shoot = shoot + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX - 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !pressS && hitByEnemy) {
    dead = 1
    posX = posX
    shoot = shoot
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !pressS && hitByObstacle) {
    dead = 1
    posX = posX
    shoot = shoot
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !pressS && hitByEnemy) {
    shoot = shoot + 1
    dead = 1
    posX = posX
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !pressS && hitByObstacle) {
    shoot = shoot + 1
    dead = 1
    posX = posX
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !pressS && hitByEnemy) {
    posX = posX + 1
    dead = 1
    shoot = shoot
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !pressS && hitByObstacle) {
    posX = posX + 1
    dead = 1
    shoot = shoot
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !pressS && hitByEnemy) {
    posX = posX + 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !pressS && hitByObstacle) {
    posX = posX + 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !pressS && hitByEnemy) {
    posX = posX - 1
    dead = 1
    shoot = shoot
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !pressS && hitByObstacle) {
    posX = posX - 1
    dead = 1
    shoot = shoot
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !pressS && hitByEnemy) {
    posX = posX - 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && !pressS && hitByObstacle) {
    posX = posX - 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !pressS && hitByEnemy) {
    dead = 1
    posX = posX
    shoot = shoot
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !pressS && hitByObstacle) {
    dead = 1
    posX = posX
    shoot = shoot
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !pressS && hitByEnemy) {
    shoot = shoot + 1
    dead = 1
    posX = posX
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !pressS && hitByObstacle) {
    shoot = shoot + 1
    dead = 1
    posX = posX
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !pressS && hitByEnemy) {
    posX = posX + 1
    dead = 1
    shoot = shoot
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !pressS && hitByObstacle) {
    posX = posX + 1
    dead = 1
    shoot = shoot
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !pressS && hitByEnemy) {
    posX = posX + 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !pressS && hitByObstacle) {
    posX = posX + 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !pressS && hitByEnemy) {
    posX = posX - 1
    dead = 1
    shoot = shoot
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !pressS && hitByObstacle) {
    posX = posX - 1
    dead = 1
    shoot = shoot
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !pressS && hitByEnemy) {
    posX = posX - 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && !pressS && hitByObstacle) {
    posX = posX - 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && pressS && !hitByEnemy && !hitByObstacle) {
    shoot = shoot + 1
    posX = posX
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && pressS && !hitByEnemy && !hitByObstacle) {
    shoot = shoot + 1
    dead = 1
    posX = posX
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX + 1
    shoot = shoot + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX + 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX - 1
    shoot = shoot + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX - 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && pressS && !hitByEnemy && !hitByObstacle) {
    shoot = shoot + 1
    posX = posX
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && pressS && !hitByEnemy && !hitByObstacle) {
    shoot = shoot + 1
    dead = 1
    posX = posX
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX + 1
    shoot = shoot + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX + 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX - 1
    shoot = shoot + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX - 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && pressS && hitByEnemy) {
    shoot = shoot + 1
    dead = 1
    posX = posX
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && pressS && hitByObstacle) {
    shoot = shoot + 1
    dead = 1
    posX = posX
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && pressS && hitByEnemy) {
    posX = posX + 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && pressS && hitByObstacle) {
    posX = posX + 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && pressS && hitByEnemy) {
    posX = posX - 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressUp && pressS && hitByObstacle) {
    posX = posX - 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && pressS && hitByEnemy) {
    shoot = shoot + 1
    dead = 1
    posX = posX
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && pressS && hitByObstacle) {
    shoot = shoot + 1
    dead = 1
    posX = posX
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && pressS && hitByEnemy) {
    posX = posX + 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && pressS && hitByObstacle) {
    posX = posX + 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && pressS && hitByEnemy) {
    posX = posX - 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && !pressR && !pressDown && pressS && hitByObstacle) {
    posX = posX - 1
    shoot = shoot + 1
    dead = 1
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
  else if (pressL && !pressR && !pressUp && !pressDown && !pressS && hitByEnemy) {
    posX = posX - 1
    dead = 1
    shoot = shoot
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && !pressS && hitByObstacle) {
    posX = posX - 1
    dead = 1
    shoot = shoot
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && !pressS && hitByEnemy) {
    posX = posX - 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && !pressS && hitByObstacle) {
    posX = posX - 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && !pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX - 1
    shoot = shoot
    dead = dead
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && !pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX - 1
    dead = 1
    shoot = shoot
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && !pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX - 1
    shoot = shoot + 1
    dead = dead
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && !pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX - 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && !pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX + 1
    shoot = shoot
    dead = dead
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && !pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX + 1
    dead = 1
    shoot = shoot
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && !pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX + 1
    shoot = shoot + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && !pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX + 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && !pressS && hitByEnemy) {
    posX = posX + 1
    dead = 1
    shoot = shoot
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && !pressS && hitByObstacle) {
    posX = posX + 1
    dead = 1
    shoot = shoot
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && !pressS && hitByEnemy) {
    posX = posX + 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && !pressS && hitByObstacle) {
    posX = posX + 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && pressS && hitByEnemy) {
    posX = posX - 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && pressS && hitByObstacle) {
    posX = posX - 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX - 1
    shoot = shoot + 1
    dead = dead
    currentState = 0
  }
  else if (pressL && !pressR && !pressUp && !pressDown && pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX - 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX + 1
    shoot = shoot + 1
    dead = dead
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && pressS && !hitByEnemy && !hitByObstacle) {
    posX = posX + 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && pressS && hitByEnemy) {
    posX = posX + 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
  else if (!pressL && pressR && !pressUp && !pressDown && pressS && hitByObstacle) {
    posX = posX + 1
    shoot = shoot + 1
    dead = 1
    currentState = 0
  }
}