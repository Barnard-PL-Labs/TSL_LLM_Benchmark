if (currentState === 0) {
  if (!pressL(e) && !pressR(e)) {
    cube = rotateRight(cube)
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    cube = rotateLeft(cube)
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    cube = cube
    currentState = 0
  }
  else if (pressL(e) && pressR(e)) {
    currentState = 0
  }
  else if (pressL(e) && !pressR(e)) {
    cube = rotateLeft(cube)
    currentState = 0
  }
  else if (!pressL(e) && pressR(e)) {
    cube = rotateRight(cube)
    currentState = 0
  }
}