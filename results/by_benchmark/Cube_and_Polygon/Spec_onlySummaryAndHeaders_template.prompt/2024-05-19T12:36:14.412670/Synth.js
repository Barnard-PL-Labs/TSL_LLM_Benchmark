if (currentState === 0) {
  if (!pressL(e) && !pressR(e)) {
    count = count + 1
    cube.rotation.y = sin(count)
    polygon.rotation.y = polygon.rotation.y
    polygon.position = staticPolygonPosition
    cube.position = staticCubePosition
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count + 1
    cube.rotation.y = sin(count)
    polygon.rotation.y = saw(count)
    polygon.position = staticPolygonPosition
    cube.position = staticCubePosition
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count + 1
    cube.rotation.y = cube.rotation.y
    polygon.rotation.y = polygon.rotation.y
    polygon.position = staticPolygonPosition
    cube.position = staticCubePosition
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count + 1
    cube.rotation.y = cube.rotation.y
    polygon.rotation.y = saw(count)
    polygon.position = staticPolygonPosition
    cube.position = staticCubePosition
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count
    cube.rotation.y = sin(count)
    polygon.rotation.y = polygon.rotation.y
    polygon.position = staticPolygonPosition
    cube.position = staticCubePosition
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count
    cube.rotation.y = sin(count)
    polygon.rotation.y = saw(count)
    polygon.position = staticPolygonPosition
    cube.position = staticCubePosition
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count
    cube.rotation.y = cube.rotation.y
    polygon.rotation.y = polygon.rotation.y
    polygon.position = staticPolygonPosition
    cube.position = staticCubePosition
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count
    cube.rotation.y = cube.rotation.y
    polygon.rotation.y = saw(count)
    polygon.position = staticPolygonPosition
    cube.position = staticCubePosition
    currentState = 0
  }
  else if (pressL(e) && !pressR(e)) {
    count = count + 1
    cube.rotation.y = sin(count)
    polygon.rotation.y = saw(count)
    polygon.position = staticPolygonPosition
    cube.position = staticCubePosition
    currentState = 0
  }
  else if (pressL(e) && !pressR(e)) {
    count = count + 1
    cube.rotation.y = cube.rotation.y
    polygon.rotation.y = saw(count)
    polygon.position = staticPolygonPosition
    cube.position = staticCubePosition
    currentState = 0
  }
  else if (!pressL(e) && pressR(e)) {
    count = count + 1
    cube.rotation.y = sin(count)
    polygon.rotation.y = polygon.rotation.y
    polygon.position = staticPolygonPosition
    cube.position = staticCubePosition
    currentState = 0
  }
  else if (!pressL(e) && pressR(e)) {
    count = count + 1
    cube.rotation.y = sin(count)
    polygon.rotation.y = saw(count)
    polygon.position = staticPolygonPosition
    cube.position = staticCubePosition
    currentState = 0
  }
  else if (pressL(e) && pressR(e)) {
    currentState = 0
  }
}