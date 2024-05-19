if (currentState === 0) {
  if (pressUp(e)) {
    cube.scale.x = cube.scale.x + t
    currentState = 0
  }
  else if (!pressUp(e)) {
    cube.scale.x = 0.5
    currentState = 0
  }
}