if (currentState === 0) {
  if (!pressL(e) && !pressR(e)) {
    cube.rotation = sin(count)
    polygon.rotation = polygon.rotation
    cube.position.y = 0
    cube.position.x = 0
    cube.position.z = 0
    polygon.position.x = 10
    polygon.position.y = 10
    polygon.position.z = 0
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    cube.rotation = sin(count)
    polygon.rotation = saw(count)
    cube.position.y = 0
    cube.position.x = 0
    cube.position.z = 0
    polygon.position.x = 10
    polygon.position.y = 10
    polygon.position.z = 0
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    cube.rotation = cube.rotation
    polygon.rotation = polygon.rotation
    cube.position.y = 0
    cube.position.x = 0
    cube.position.z = 0
    polygon.position.x = 10
    polygon.position.y = 10
    polygon.position.z = 0
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    cube.rotation = cube.rotation
    polygon.rotation = saw(count)
    cube.position.y = 0
    cube.position.x = 0
    cube.position.z = 0
    polygon.position.x = 10
    polygon.position.y = 10
    polygon.position.z = 0
    currentState = 0
  }
  else if (pressL(e) && !pressR(e)) {
    cube.rotation = sin(count)
    polygon.rotation = polygon.rotation
    cube.position.y = 0
    cube.position.x = 0
    cube.position.z = 0
    polygon.position.x = 10
    polygon.position.y = 10
    polygon.position.z = 0
    currentState = 0
  }
  else if (pressL(e) && !pressR(e)) {
    cube.rotation = sin(count)
    polygon.rotation = saw(count)
    cube.position.y = 0
    cube.position.x = 0
    cube.position.z = 0
    polygon.position.x = 10
    polygon.position.y = 10
    polygon.position.z = 0
    currentState = 0
  }
  else if (!pressL(e) && pressR(e)) {
    cube.rotation = sin(count)
    polygon.rotation = saw(count)
    cube.position.y = 0
    cube.position.x = 0
    cube.position.z = 0
    polygon.position.x = 10
    polygon.position.y = 10
    polygon.position.z = 0
    currentState = 0
  }
  else if (!pressL(e) && pressR(e)) {
    cube.rotation = cube.rotation
    polygon.rotation = saw(count)
    cube.position.y = 0
    cube.position.x = 0
    cube.position.z = 0
    polygon.position.x = 10
    polygon.position.y = 10
    polygon.position.z = 0
    currentState = 0
  }
  else if (pressL(e) && pressR(e)) {
    currentState = 0
  }
}