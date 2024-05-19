if (currentState === 0) {
  if (!pressL(e) && !pressR(e)) {
    count = count - 0.1
    cube.rotation.y = sin(2 * count)
    polygon.rotation.y = polygon.rotation.y
    polygon.position.x = 3
    cube.position.x = 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count - 0.1
    cube.rotation.y = sin(2 * count)
    polygon.rotation.y = saw(0.5 * (1 + count))
    polygon.position.x = 3
    cube.position.x = 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count - 0.1
    cube.rotation.y = cube.rotation.y
    polygon.rotation.y = polygon.rotation.y
    polygon.position.x = 3
    cube.position.x = 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count - 0.1
    cube.rotation.y = cube.rotation.y
    polygon.rotation.y = saw(0.5 * (1 + count))
    polygon.position.x = 3
    cube.position.x = 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count + 0.1
    cube.rotation.y = sin(2 * count)
    polygon.rotation.y = polygon.rotation.y
    polygon.position.x = 3
    cube.position.x = 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count + 0.1
    cube.rotation.y = sin(2 * count)
    polygon.rotation.y = saw(0.5 * (1 + count))
    polygon.position.x = 3
    cube.position.x = 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count + 0.1
    cube.rotation.y = cube.rotation.y
    polygon.rotation.y = polygon.rotation.y
    polygon.position.x = 3
    cube.position.x = 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count + 0.1
    cube.rotation.y = cube.rotation.y
    polygon.rotation.y = saw(0.5 * (1 + count))
    polygon.position.x = 3
    cube.position.x = 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count
    cube.rotation.y = sin(2 * count)
    polygon.rotation.y = polygon.rotation.y
    polygon.position.x = 3
    cube.position.x = 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count
    cube.rotation.y = sin(2 * count)
    polygon.rotation.y = saw(0.5 * (1 + count))
    polygon.position.x = 3
    cube.position.x = 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count
    cube.rotation.y = cube.rotation.y
    polygon.rotation.y = polygon.rotation.y
    polygon.position.x = 3
    cube.position.x = 1
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count
    cube.rotation.y = cube.rotation.y
    polygon.rotation.y = saw(0.5 * (1 + count))
    polygon.position.x = 3
    cube.position.x = 1
    currentState = 0
  }
  else if (pressL(e) && pressR(e)) {
    currentState = 0
  }
  else if (!pressL(e) && pressR(e)) {
    count = count + 0.1
    cube.rotation.y = sin(2 * count)
    polygon.rotation.y = saw(0.5 * (1 + count))
    polygon.position.x = 3
    cube.position.x = 1
    currentState = 0
  }
  else if (pressL(e) && !pressR(e)) {
    count = count - 0.1
    cube.rotation.y = sin(2 * count)
    polygon.rotation.y = saw(0.5 * (1 + count))
    polygon.position.x = 3
    cube.position.x = 1
    currentState = 0
  }
}