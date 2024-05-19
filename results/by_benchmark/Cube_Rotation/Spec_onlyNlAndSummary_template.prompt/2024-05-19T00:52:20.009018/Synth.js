if (currentState === 0) {
  if (!pressL) {
    cube.rotation = right
    currentState = 0
  }
  else if (pressL && pressR) {
    currentState = 1
  }
  else if (pressL && !pressR) {
    cube.rotation = left
    currentState = 1
  }
}
else if (currentState === 1) {
  if (!pressL && pressR) {
    cube.rotation = right
    currentState = 0
  }
  else if (pressL && pressR) {
    currentState = 1
  }
  else if (!pressR) {
    cube.rotation = left
    currentState = 1
  }
}