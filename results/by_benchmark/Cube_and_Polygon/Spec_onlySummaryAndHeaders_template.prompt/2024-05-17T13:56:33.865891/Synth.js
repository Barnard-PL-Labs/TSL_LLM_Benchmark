if (currentState === 0) {
  if (!pressL(e) && !pressR(e)) {
    count = count + 1
    cube.rotation = sin(count)
    polygon.rotation = polygon.rotation
    polygon.position = staticPositionPolygon
    cube.position = staticPositionCube
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count + 1
    cube.rotation = sin(count)
    polygon.rotation = saw(count)
    polygon.position = staticPositionPolygon
    cube.position = staticPositionCube
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count + 1
    cube.rotation = cube.rotation
    polygon.rotation = polygon.rotation
    polygon.position = staticPositionPolygon
    cube.position = staticPositionCube
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count + 1
    cube.rotation = cube.rotation
    polygon.rotation = saw(count)
    polygon.position = staticPositionPolygon
    cube.position = staticPositionCube
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count
    cube.rotation = sin(count)
    polygon.rotation = polygon.rotation
    polygon.position = staticPositionPolygon
    cube.position = staticPositionCube
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count
    cube.rotation = sin(count)
    polygon.rotation = saw(count)
    polygon.position = staticPositionPolygon
    cube.position = staticPositionCube
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count
    cube.rotation = cube.rotation
    polygon.rotation = polygon.rotation
    polygon.position = staticPositionPolygon
    cube.position = staticPositionCube
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count
    cube.rotation = cube.rotation
    polygon.rotation = saw(count)
    polygon.position = staticPositionPolygon
    cube.position = staticPositionCube
    currentState = 0
  }
  else if (pressL(e) && !pressR(e)) {
    count = count + 1
    cube.rotation = sin(count)
    polygon.rotation = polygon.rotation
    polygon.position = staticPositionPolygon
    cube.position = staticPositionCube
    currentState = 0
  }
  else if (pressL(e) && !pressR(e)) {
    count = count + 1
    cube.rotation = sin(count)
    polygon.rotation = saw(count)
    polygon.position = staticPositionPolygon
    cube.position = staticPositionCube
    currentState = 0
  }
  else if (!pressL(e) && pressR(e)) {
    count = count + 1
    cube.rotation = sin(count)
    polygon.rotation = saw(count)
    polygon.position = staticPositionPolygon
    cube.position = staticPositionCube
    currentState = 0
  }
  else if (!pressL(e) && pressR(e)) {
    count = count + 1
    cube.rotation = cube.rotation
    polygon.rotation = saw(count)
    polygon.position = staticPositionPolygon
    cube.position = staticPositionCube
    currentState = 0
  }
  else if (pressL(e) && pressR(e)) {
    currentState = 0
  }
}