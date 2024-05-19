if (currentState === 0) {
  if (pressUp) {
    count = count + 1
    cube.scale.x = count
    currentState = 0
  }
  else if (!pressUp) {
    count = 0.5
    cube.scale.x = count
    currentState = 0
  }
}