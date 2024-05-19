if (currentState === 0) {
  if (!pressUp(e)) {
    cube.scale.x = 0.5
    count = 0.5
    currentState = 0
  }
  else if (pressUp(e)) {
    cube.scale.x = count
    count = count + 1
    currentState = 0
  }
}