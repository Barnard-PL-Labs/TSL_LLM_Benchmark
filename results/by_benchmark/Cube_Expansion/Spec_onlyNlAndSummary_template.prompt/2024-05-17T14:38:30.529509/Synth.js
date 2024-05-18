if (currentState === 0) {
  if (pressUpKey) {
    count = count + 1
    cube.scale.x = cube.scale.x
    currentState = 0
  }
  else if (pressUpKey) {
    count = count + 1
    cube.scale.x = count
    currentState = 0
  }
  else if (!pressUpKey) {
    count = 0.5
    cube.scale.x = count
    currentState = 0
  }
}