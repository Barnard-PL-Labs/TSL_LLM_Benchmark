function updateState({currentState, pressDown, pressL, pressR, pressUp, ship}) {
  let _next_ship

  if (currentState === 0) {
    if (  _next_ship = ship) {
      !pressL && !pressR && !pressUp
      currentState = 0
    }
    else if (  _next_ship = ship) {
      !pressL && !pressR && !pressDown
      currentState = 0
    }
    else if (  _next_ship = ship) {
      !pressL && !pressUp && !pressDown
      currentState = 0
    }
    else if (  _next_ship = ship) {
      !pressR && !pressUp && !pressDown
      currentState = 0
    }
    else if (  _next_ship = shoot(ship)) {
      !pressL && !pressR && !pressUp
      currentState = 0
    }
    else if (  _next_ship = shoot(ship)) {
      !pressL && !pressR && !pressDown
      currentState = 0
    }
    else if (  _next_ship = shoot(ship)) {
      !pressL && !pressUp && !pressDown
      currentState = 0
    }
    else if (  _next_ship = shoot(ship)) {
      !pressR && !pressUp && !pressDown
      currentState = 0
    }
    else if (  _next_ship = moveRight(ship)) {
      !pressL && !pressR && !pressUp
      currentState = 0
    }
    else if (  _next_ship = moveRight(ship)) {
      !pressL && !pressR && !pressDown
      currentState = 0
    }
    else if (  _next_ship = moveRight(ship)) {
      !pressL && !pressUp && !pressDown
      currentState = 0
    }
    else if (  _next_ship = moveRight(ship)) {
      !pressR && !pressUp && !pressDown
      currentState = 0
    }
    else if (  _next_ship = moveLeft(ship)) {
      !pressL && !pressR && !pressUp
      currentState = 0
    }
    else if (  _next_ship = moveLeft(ship)) {
      !pressL && !pressR && !pressDown
      currentState = 0
    }
    else if (  _next_ship = moveLeft(ship)) {
      !pressL && !pressUp && !pressDown
      currentState = 0
    }
    else if (  _next_ship = moveLeft(ship)) {
      !pressR && !pressUp && !pressDown
      currentState = 0
    }
    else if (  _next_ship = die(ship)) {
      !pressL && !pressR && !pressUp
      currentState = 0
    }
    else if (  _next_ship = die(ship)) {
      !pressL && !pressR && !pressDown
      currentState = 0
    }
    else if (  _next_ship = die(ship)) {
      !pressL && !pressUp && !pressDown
      currentState = 0
    }
    else if (  _next_ship = die(ship)) {
      !pressR && !pressUp && !pressDown
      currentState = 0
    }
    else if () {
      true
      currentState = 0
    }
    else if (  _next_ship = die(ship) &&   _next_ship = moveLeft(ship)) {
      true
      currentState = 0
    }
    else if (  _next_ship = die(ship) &&   _next_ship = moveRight(ship)) {
      true
      currentState = 0
    }
    else if (  _next_ship = die(ship) &&   _next_ship = shoot(ship)) {
      true
      currentState = 0
    }
    else if (  _next_ship = die(ship) &&   _next_ship = ship) {
      true
      currentState = 0
    }
    else if (  _next_ship = moveLeft(ship) &&   _next_ship = moveRight(ship)) {
      true
      currentState = 0
    }
    else if (  _next_ship = moveLeft(ship) &&   _next_ship = shoot(ship)) {
      true
      currentState = 0
    }
    else if (  _next_ship = moveLeft(ship) &&   _next_ship = ship) {
      true
      currentState = 0
    }
    else if (  _next_ship = moveRight(ship) &&   _next_ship = shoot(ship)) {
      true
      currentState = 0
    }
    else if (  _next_ship = moveRight(ship) &&   _next_ship = ship) {
      true
      currentState = 0
    }
    else if (  _next_ship = shoot(ship) &&   _next_ship = ship) {
      true
      currentState = 0
    }
  }

  return {currentState, ship: _next_ship}
}