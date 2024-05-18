if (currentState === 0) {
  if (!pressL(e)) {
    cube = rotateRight(cube)
    currentState = 0
  }
  else if (pressL(e) && pressR(e)) {
    currentState = 1
  }
  else if (pressL(e) && !pressR(e)) {
    cube = rotateLeft(cube)
    currentState = 1
  }
}
else if (currentState === 1) {
  if (!pressL(e) && pressR(e)) {
    cube = rotateRight(cube)
    currentState = 0
  }
  else if (pressL(e) && pressR(e)) {
    currentState = 1
  }
  else if (!pressR(e)) {
    cube = rotateLeft(cube)
    currentState = 1
  }
}