if (currentState === 0) {
  if (!pressL(e) && !pressR(e)) {
    cube.rotation.y = rotateRight(cube.rotation.y)
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    cube.rotation.y = rotateLeft(cube.rotation.y)
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    cube.rotation.y = cube.rotation.y
    currentState = 0
  }
  else if (pressL(e) && pressR(e)) {
    currentState = 0
  }
  else if (pressL(e) && !pressR(e)) {
    cube.rotation.y = rotateLeft(cube.rotation.y)
    currentState = 0
  }
  else if (!pressL(e) && pressR(e)) {
    cube.rotation.y = rotateRight(cube.rotation.y)
    currentState = 0
  }
}