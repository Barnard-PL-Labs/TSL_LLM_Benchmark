if (currentState === 0) {
  if (!pressL(e) && !pressR(e)) {
    count = count - 1
    cube.rotation.y = sin(count)
    cube.position.y = 0
    cube.position.x = 0
    cube.position.z = 0
    polygon.position.x = 5
    polygon.position.y = 5
    polygon.position.z = 5
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count - 1
    cube.rotation.y = saw(count)
    cube.position.y = 0
    cube.position.x = 0
    cube.position.z = 0
    polygon.position.x = 5
    polygon.position.y = 5
    polygon.position.z = 5
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count - 1
    cube.rotation.y = cube.rotation.y
    cube.position.y = 0
    cube.position.x = 0
    cube.position.z = 0
    polygon.position.x = 5
    polygon.position.y = 5
    polygon.position.z = 5
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count + 1
    cube.rotation.y = sin(count)
    cube.position.y = 0
    cube.position.x = 0
    cube.position.z = 0
    polygon.position.x = 5
    polygon.position.y = 5
    polygon.position.z = 5
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count + 1
    cube.rotation.y = saw(count)
    cube.position.y = 0
    cube.position.x = 0
    cube.position.z = 0
    polygon.position.x = 5
    polygon.position.y = 5
    polygon.position.z = 5
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count + 1
    cube.rotation.y = cube.rotation.y
    cube.position.y = 0
    cube.position.x = 0
    cube.position.z = 0
    polygon.position.x = 5
    polygon.position.y = 5
    polygon.position.z = 5
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count
    cube.rotation.y = sin(count)
    cube.position.y = 0
    cube.position.x = 0
    cube.position.z = 0
    polygon.position.x = 5
    polygon.position.y = 5
    polygon.position.z = 5
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count
    cube.rotation.y = saw(count)
    cube.position.y = 0
    cube.position.x = 0
    cube.position.z = 0
    polygon.position.x = 5
    polygon.position.y = 5
    polygon.position.z = 5
    currentState = 0
  }
  else if (!pressL(e) && !pressR(e)) {
    count = count
    cube.rotation.y = cube.rotation.y
    cube.position.y = 0
    cube.position.x = 0
    cube.position.z = 0
    polygon.position.x = 5
    polygon.position.y = 5
    polygon.position.z = 5
    currentState = 0
  }
  else if (pressL(e) && pressR(e)) {
    currentState = 0
  }
  else if (pressL(e) && !pressR(e)) {
    count = count + 1
    cube.rotation.y = sin(count)
    cube.position.y = 0
    cube.position.x = 0
    cube.position.z = 0
    polygon.position.x = 5
    polygon.position.y = 5
    polygon.position.z = 5
    currentState = 0
  }
  else if (!pressL(e) && pressR(e)) {
    count = count - 1
    cube.rotation.y = saw(count)
    cube.position.y = 0
    cube.position.x = 0
    cube.position.z = 0
    polygon.position.x = 5
    polygon.position.y = 5
    polygon.position.z = 5
    currentState = 0
  }
}