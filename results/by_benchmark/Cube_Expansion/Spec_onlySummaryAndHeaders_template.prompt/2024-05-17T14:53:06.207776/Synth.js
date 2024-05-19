if (currentState === 0) {
  if (pressUp(e)) {
    cube.scale.x = t + 0.5
    currentState = 0
  }
  else if (!pressUp(e)) {
    cube.scale.x = 0.5
    currentState = 0
  }
}