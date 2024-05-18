if (currentState === 0) {
  if (pressL(e) && pressR(e)) {
    currentState = 0
  }
  else if (!pressL(e)) {
    count = count + 0.1
    polygon.rotation.y = saw(0.5 * (1 + count))
    cube.rotation.y = sin(2 * count)
    cube.position.x = 1
    polygon.position.x = 3
    currentState = 0
  }
  else if (pressL(e) && !pressR(e)) {
    count = count - 0.1
    polygon.rotation.y = saw(0.5 * (1 + count))
    cube.rotation.y = sin(2 * count)
    cube.position.x = 1
    polygon.position.x = 3
    currentState = 1
  }
}
else if (currentState === 1) {
  if (pressL(e) && pressR(e)) {
    currentState = 0
  }
  else if (!pressL(e) && pressR(e)) {
    count = count + 0.1
    polygon.rotation.y = saw(0.5 * (1 + count))
    cube.rotation.y = sin(2 * count)
    cube.position.x = 1
    polygon.position.x = 3
    currentState = 0
  }
  else if (!pressR(e)) {
    count = count - 0.1
    polygon.rotation.y = saw(0.5 * (1 + count))
    cube.rotation.y = sin(2 * count)
    cube.position.x = 1
    polygon.position.x = 3
    currentState = 1
  }
}