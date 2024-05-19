if (currentState === 0) {
  if (!pressL(e) && !pressR(e)) {
    count = count + 1
    Cube.rotation = sin(count)
    Polygon.rotation = saw(count)
    Cube.position.y = 0
    Cube.position.x = 0
    Polygon.position.x = 5
    Polygon.position.y = 5
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count + 1
    Cube.rotation = sin(count)
    Polygon.rotation = Polygon.rotation
    Cube.position.y = 0
    Cube.position.x = 0
    Polygon.position.x = 5
    Polygon.position.y = 5
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count + 1
    Cube.rotation = Cube.rotation
    Polygon.rotation = saw(count)
    Cube.position.y = 0
    Cube.position.x = 0
    Polygon.position.x = 5
    Polygon.position.y = 5
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count + 1
    Cube.rotation = Cube.rotation
    Polygon.rotation = Polygon.rotation
    Cube.position.y = 0
    Cube.position.x = 0
    Polygon.position.x = 5
    Polygon.position.y = 5
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count
    Cube.rotation = sin(count)
    Polygon.rotation = saw(count)
    Cube.position.y = 0
    Cube.position.x = 0
    Polygon.position.x = 5
    Polygon.position.y = 5
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count
    Cube.rotation = sin(count)
    Polygon.rotation = Polygon.rotation
    Cube.position.y = 0
    Cube.position.x = 0
    Polygon.position.x = 5
    Polygon.position.y = 5
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count
    Cube.rotation = Cube.rotation
    Polygon.rotation = saw(count)
    Cube.position.y = 0
    Cube.position.x = 0
    Polygon.position.x = 5
    Polygon.position.y = 5
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count
    Cube.rotation = Cube.rotation
    Polygon.rotation = Polygon.rotation
    Cube.position.y = 0
    Cube.position.x = 0
    Polygon.position.x = 5
    Polygon.position.y = 5
    currentState = 0
  }
  else if (pressL(e) && !pressR(e)) {
    count = count + 1
    Cube.rotation = sin(count)
    Polygon.rotation = saw(count)
    Cube.position.y = 0
    Cube.position.x = 0
    Polygon.position.x = 5
    Polygon.position.y = 5
    currentState = 0
  }
  else if (pressL(e) && !pressR(e)) {
    count = count + 1
    Cube.rotation = sin(count)
    Polygon.rotation = Polygon.rotation
    Cube.position.y = 0
    Cube.position.x = 0
    Polygon.position.x = 5
    Polygon.position.y = 5
    currentState = 0
  }
  else if (!pressL(e) && pressR(e)) {
    count = count + 1
    Cube.rotation = sin(count)
    Polygon.rotation = saw(count)
    Cube.position.y = 0
    Cube.position.x = 0
    Polygon.position.x = 5
    Polygon.position.y = 5
    currentState = 0
  }
  else if (!pressL(e) && pressR(e)) {
    count = count + 1
    Cube.rotation = Cube.rotation
    Polygon.rotation = saw(count)
    Cube.position.y = 0
    Cube.position.x = 0
    Polygon.position.x = 5
    Polygon.position.y = 5
    currentState = 0
  }
  else if (pressL(e) && pressR(e)) {
    currentState = 0
  }
}