if (currentState === 0) {
  if (!leftmost(ship) && hit(ship)) {
    ship = moveLeft(ship)
    ship = moveRight(ship)
    currentState = 0
  }
  else if (!leftmost(ship) && hit(ship)) {
    currentState = 0
  }
  else if (!rightmost(ship) && hit(ship)) {
    ship = moveLeft(ship)
    ship = moveRight(ship)
    currentState = 0
  }
  else if (!rightmost(ship) && hit(ship)) {
    currentState = 0
  }
  else if (!leftmost(ship) && !hit(ship)) {
    ship = moveLeft(ship)
    ship = moveRight(ship)
    currentState = 0
  }
  else if (!rightmost(ship) && !hit(ship)) {
    ship = moveLeft(ship)
    ship = moveRight(ship)
    currentState = 0
  }
  else if (leftmost(ship) && rightmost(ship)) {
    currentState = 0
  }
}