if (currentState === 0) {
  if (pressUp(e)) {
    cube.scale.x = t
    currentState = 0
  }
  else if (!pressUp(e)) {
    currentState = 0
  }
}