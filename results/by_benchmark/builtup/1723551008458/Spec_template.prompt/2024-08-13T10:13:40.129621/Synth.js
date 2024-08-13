function updateState({currentState, g}) {
  let _next_g

  if (currentState === 0) {
    if () {
      true
      currentState = 1
    }
    else if (  _next_g = 3 &&   _next_g = 4) {
      true
      currentState = 1
    }
    else if (  _next_g = 3 &&   _next_g = 1) {
      true
      currentState = 1
    }
    else if (  _next_g = 3 &&   _next_g = 2) {
      true
      currentState = 1
    }
    else if (  _next_g = 3 &&   _next_g = g) {
      true
      currentState = 1
    }
    else if (  _next_g = 4 &&   _next_g = 1) {
      true
      currentState = 1
    }
    else if (  _next_g = 4 &&   _next_g = 2) {
      true
      currentState = 1
    }
    else if (  _next_g = 4 &&   _next_g = g) {
      true
      currentState = 1
    }
    else if (  _next_g = 1 &&   _next_g = 2) {
      true
      currentState = 1
    }
    else if (  _next_g = 1 &&   _next_g = g) {
      true
      currentState = 1
    }
    else if (  _next_g = 2 &&   _next_g = g) {
      true
      currentState = 1
    }
    else if (  _next_g = g) {
      r(1) && !r(2)
      currentState = 1
    }
    else if (  _next_g = 2) {
      r(1) && !r(2)
      currentState = 1
    }
    else if (  _next_g = 1) {
      r(1) && !r(2)
      currentState = 1
    }
    else if (  _next_g = 4) {
      r(1) && !r(2)
      currentState = 1
    }
    else if (  _next_g = 3) {
      r(1) && !r(2)
      currentState = 1
    }
  }
  else if (currentState === 1) {
    if (  _next_g = g) {
      !r(1) && r(2) && r(3) && r(4)
      currentState = 0
    }
    else if (  _next_g = 2) {
      !r(1) && r(2) && r(3) && r(4)
      currentState = 0
    }
    else if (  _next_g = 1) {
      !r(1) && r(2) && r(3) && r(4)
      currentState = 0
    }
    else if (  _next_g = 4) {
      !r(1) && r(2) && r(3) && r(4)
      currentState = 0
    }
    else if (  _next_g = 3) {
      !r(1) && r(2) && r(3) && r(4)
      currentState = 0
    }
    else if () {
      true
      currentState = 1
    }
    else if (  _next_g = 3 &&   _next_g = 4) {
      true
      currentState = 1
    }
    else if (  _next_g = 3 &&   _next_g = 1) {
      true
      currentState = 1
    }
    else if (  _next_g = 3 &&   _next_g = 2) {
      true
      currentState = 1
    }
    else if (  _next_g = 3 &&   _next_g = g) {
      true
      currentState = 1
    }
    else if (  _next_g = 4 &&   _next_g = 1) {
      true
      currentState = 1
    }
    else if (  _next_g = 4 &&   _next_g = 2) {
      true
      currentState = 1
    }
    else if (  _next_g = 4 &&   _next_g = g) {
      true
      currentState = 1
    }
    else if (  _next_g = 1 &&   _next_g = 2) {
      true
      currentState = 1
    }
    else if (  _next_g = 1 &&   _next_g = g) {
      true
      currentState = 1
    }
    else if (  _next_g = 2 &&   _next_g = g) {
      true
      currentState = 1
    }
  }

  return {currentState, g: _next_g}
}