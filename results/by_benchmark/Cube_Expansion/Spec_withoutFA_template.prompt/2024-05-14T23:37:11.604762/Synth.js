if (currentState === 0) {
  if (pressUp(e)) {
    count = count + 1
    cube.scale.x = count
    currentState = 0
  }
  else if (!pressUp(e)) {
    currentState = 0
  }
}