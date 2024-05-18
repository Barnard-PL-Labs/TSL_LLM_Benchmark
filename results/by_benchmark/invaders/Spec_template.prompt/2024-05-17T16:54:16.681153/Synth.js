function updateState({currentState, ship, ship.action, ship.position.x, ship.status}) {
  let _next_ship.action, _next_ship.position.x, _next_ship.status

  if (currentState === 0) {
    if (!pressL(ship) && !pressR(ship) && !pressUp(ship) && !hit(ship) && !pressShoot(ship)) {
      _next_ship.status = ship.status
      _next_ship.position.x = ship.position.x
      _next_ship.action = ship.action
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressUp(ship) && !hit(ship) && !pressShoot(ship)) {
      _next_ship.status = ship.status
      _next_ship.position.x = ship.position.x
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressUp(ship) && !hit(ship) && !pressShoot(ship)) {
      _next_ship.status = ship.status
      _next_ship.position.x = moveRight(ship)
      _next_ship.action = ship.action
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressUp(ship) && !hit(ship) && !pressShoot(ship)) {
      _next_ship.status = ship.status
      _next_ship.position.x = moveRight(ship)
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressUp(ship) && !hit(ship) && !pressShoot(ship)) {
      _next_ship.status = ship.status
      _next_ship.position.x = moveLeft(ship)
      _next_ship.action = ship.action
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressUp(ship) && !hit(ship) && !pressShoot(ship)) {
      _next_ship.status = ship.status
      _next_ship.position.x = moveLeft(ship)
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressUp(ship) && !hit(ship) && !pressShoot(ship)) {
      _next_ship.status = die(ship)
      _next_ship.position.x = ship.position.x
      _next_ship.action = ship.action
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressUp(ship) && !hit(ship) && !pressShoot(ship)) {
      _next_ship.status = die(ship)
      _next_ship.position.x = ship.position.x
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressUp(ship) && !hit(ship) && !pressShoot(ship)) {
      _next_ship.status = die(ship)
      _next_ship.position.x = moveRight(ship)
      _next_ship.action = ship.action
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressUp(ship) && !hit(ship) && !pressShoot(ship)) {
      _next_ship.status = die(ship)
      _next_ship.position.x = moveRight(ship)
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressUp(ship) && !hit(ship) && !pressShoot(ship)) {
      _next_ship.status = die(ship)
      _next_ship.position.x = moveLeft(ship)
      _next_ship.action = ship.action
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressUp(ship) && !hit(ship) && !pressShoot(ship)) {
      _next_ship.status = die(ship)
      _next_ship.position.x = moveLeft(ship)
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressDown(ship) && !hit(ship) && !pressShoot(ship)) {
      _next_ship.status = ship.status
      _next_ship.position.x = ship.position.x
      _next_ship.action = ship.action
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressDown(ship) && !hit(ship) && !pressShoot(ship)) {
      _next_ship.status = ship.status
      _next_ship.position.x = ship.position.x
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressDown(ship) && !hit(ship) && !pressShoot(ship)) {
      _next_ship.status = ship.status
      _next_ship.position.x = moveRight(ship)
      _next_ship.action = ship.action
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressDown(ship) && !hit(ship) && !pressShoot(ship)) {
      _next_ship.status = ship.status
      _next_ship.position.x = moveRight(ship)
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressDown(ship) && !hit(ship) && !pressShoot(ship)) {
      _next_ship.status = ship.status
      _next_ship.position.x = moveLeft(ship)
      _next_ship.action = ship.action
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressDown(ship) && !hit(ship) && !pressShoot(ship)) {
      _next_ship.status = ship.status
      _next_ship.position.x = moveLeft(ship)
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressDown(ship) && !hit(ship) && !pressShoot(ship)) {
      _next_ship.status = die(ship)
      _next_ship.position.x = ship.position.x
      _next_ship.action = ship.action
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressDown(ship) && !hit(ship) && !pressShoot(ship)) {
      _next_ship.status = die(ship)
      _next_ship.position.x = ship.position.x
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressDown(ship) && !hit(ship) && !pressShoot(ship)) {
      _next_ship.status = die(ship)
      _next_ship.position.x = moveRight(ship)
      _next_ship.action = ship.action
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressDown(ship) && !hit(ship) && !pressShoot(ship)) {
      _next_ship.status = die(ship)
      _next_ship.position.x = moveRight(ship)
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressDown(ship) && !hit(ship) && !pressShoot(ship)) {
      _next_ship.status = die(ship)
      _next_ship.position.x = moveLeft(ship)
      _next_ship.action = ship.action
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressDown(ship) && !hit(ship) && !pressShoot(ship)) {
      _next_ship.status = die(ship)
      _next_ship.position.x = moveLeft(ship)
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressUp(ship) && !hit(ship) && pressShoot(ship)) {
      _next_ship.status = ship.status
      _next_ship.position.x = ship.position.x
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressUp(ship) && !hit(ship) && pressShoot(ship)) {
      _next_ship.status = ship.status
      _next_ship.position.x = moveRight(ship)
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressUp(ship) && !hit(ship) && pressShoot(ship)) {
      _next_ship.status = ship.status
      _next_ship.position.x = moveLeft(ship)
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressUp(ship) && !hit(ship) && pressShoot(ship)) {
      _next_ship.status = die(ship)
      _next_ship.position.x = ship.position.x
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressUp(ship) && !hit(ship) && pressShoot(ship)) {
      _next_ship.status = die(ship)
      _next_ship.position.x = moveRight(ship)
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressUp(ship) && !hit(ship) && pressShoot(ship)) {
      _next_ship.status = die(ship)
      _next_ship.position.x = moveLeft(ship)
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressDown(ship) && !hit(ship) && pressShoot(ship)) {
      _next_ship.status = ship.status
      _next_ship.position.x = ship.position.x
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressDown(ship) && !hit(ship) && pressShoot(ship)) {
      _next_ship.status = ship.status
      _next_ship.position.x = moveRight(ship)
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressDown(ship) && !hit(ship) && pressShoot(ship)) {
      _next_ship.status = ship.status
      _next_ship.position.x = moveLeft(ship)
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressDown(ship) && !hit(ship) && pressShoot(ship)) {
      _next_ship.status = die(ship)
      _next_ship.position.x = ship.position.x
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressDown(ship) && !hit(ship) && pressShoot(ship)) {
      _next_ship.status = die(ship)
      _next_ship.position.x = moveRight(ship)
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressDown(ship) && !hit(ship) && pressShoot(ship)) {
      _next_ship.status = die(ship)
      _next_ship.position.x = moveLeft(ship)
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (pressL(ship) && pressR(ship)) {
      currentState = 0
    }
    else if (pressL(ship) && pressUp(ship)) {
      currentState = 0
    }
    else if (pressL(ship) && pressDown(ship)) {
      currentState = 0
    }
    else if (pressL(ship) && leftmost(ship)) {
      currentState = 0
    }
    else if (pressR(ship) && pressUp(ship)) {
      currentState = 0
    }
    else if (pressR(ship) && pressDown(ship)) {
      currentState = 0
    }
    else if (pressR(ship) && rightmost(ship)) {
      currentState = 0
    }
    else if (pressUp(ship) && pressDown(ship)) {
      currentState = 0
    }
    else if (pressL(ship) && !pressR(ship) && !pressUp(ship) && !pressDown(ship) && !hit(ship) && !leftmost(ship) && !pressShoot(ship)) {
      _next_ship.status = ship.status
      _next_ship.position.x = moveLeft(ship)
      _next_ship.action = ship.action
      currentState = 0
    }
    else if (pressL(ship) && !pressR(ship) && !pressUp(ship) && !pressDown(ship) && !hit(ship) && !leftmost(ship) && !pressShoot(ship)) {
      _next_ship.status = ship.status
      _next_ship.position.x = moveLeft(ship)
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (pressL(ship) && !pressR(ship) && !pressUp(ship) && !pressDown(ship) && !hit(ship) && !leftmost(ship) && !pressShoot(ship)) {
      _next_ship.status = die(ship)
      _next_ship.position.x = moveLeft(ship)
      _next_ship.action = ship.action
      currentState = 0
    }
    else if (pressL(ship) && !pressR(ship) && !pressUp(ship) && !pressDown(ship) && !hit(ship) && !leftmost(ship) && !pressShoot(ship)) {
      _next_ship.status = die(ship)
      _next_ship.position.x = moveLeft(ship)
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (!pressL(ship) && pressR(ship) && !pressUp(ship) && !pressDown(ship) && !hit(ship) && !rightmost(ship) && !pressShoot(ship)) {
      _next_ship.status = ship.status
      _next_ship.position.x = moveRight(ship)
      _next_ship.action = ship.action
      currentState = 0
    }
    else if (!pressL(ship) && pressR(ship) && !pressUp(ship) && !pressDown(ship) && !hit(ship) && !rightmost(ship) && !pressShoot(ship)) {
      _next_ship.status = ship.status
      _next_ship.position.x = moveRight(ship)
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (!pressL(ship) && pressR(ship) && !pressUp(ship) && !pressDown(ship) && !hit(ship) && !rightmost(ship) && !pressShoot(ship)) {
      _next_ship.status = die(ship)
      _next_ship.position.x = moveRight(ship)
      _next_ship.action = ship.action
      currentState = 0
    }
    else if (!pressL(ship) && pressR(ship) && !pressUp(ship) && !pressDown(ship) && !hit(ship) && !rightmost(ship) && !pressShoot(ship)) {
      _next_ship.status = die(ship)
      _next_ship.position.x = moveRight(ship)
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressUp(ship) && hit(ship)) {
      currentState = 0
    }
    else if (!pressL(ship) && !pressR(ship) && !pressDown(ship) && hit(ship)) {
      currentState = 0
    }
    else if (!pressL(ship) && !pressUp(ship) && !pressDown(ship) && hit(ship) && !rightmost(ship)) {
      currentState = 0
    }
    else if (!pressR(ship) && !pressUp(ship) && !pressDown(ship) && hit(ship) && !leftmost(ship)) {
      currentState = 0
    }
    else if (pressL(ship) && !pressR(ship) && !pressUp(ship) && !pressDown(ship) && !hit(ship) && !leftmost(ship) && pressShoot(ship)) {
      _next_ship.status = ship.status
      _next_ship.position.x = moveLeft(ship)
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (pressL(ship) && !pressR(ship) && !pressUp(ship) && !pressDown(ship) && !hit(ship) && !leftmost(ship) && pressShoot(ship)) {
      _next_ship.status = die(ship)
      _next_ship.position.x = moveLeft(ship)
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (!pressL(ship) && pressR(ship) && !pressUp(ship) && !pressDown(ship) && !hit(ship) && !rightmost(ship) && pressShoot(ship)) {
      _next_ship.status = ship.status
      _next_ship.position.x = moveRight(ship)
      _next_ship.action = shoot(ship)
      currentState = 0
    }
    else if (!pressL(ship) && pressR(ship) && !pressUp(ship) && !pressDown(ship) && !hit(ship) && !rightmost(ship) && pressShoot(ship)) {
      _next_ship.status = die(ship)
      _next_ship.position.x = moveRight(ship)
      _next_ship.action = shoot(ship)
      currentState = 0
    }
  }

  return {currentState, ship.action: _next_ship.action, ship.position.x: _next_ship.position.x, ship.status: _next_ship.status}
}