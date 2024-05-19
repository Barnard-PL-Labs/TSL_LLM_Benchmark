if (currentState === 0) {
  if (pressUp(e)) {
    currentState = 0
  }
  else if (!pressUp(e)) {
    count = 0.5
    cube.scale.x = count
    currentState = 0
  }
}