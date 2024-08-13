function updateState({currentState, g}) {
  let _next_g

  if (currentState === 0) {
    if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 0
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 0
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 0
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 0
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 0
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 1
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 3
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 4
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 4
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 4
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 6
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 6
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 6
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 7
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 7
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 7
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 8
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 8
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 8
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 8
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 10
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 10
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 10
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 11
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 11
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 11
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 12
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 12
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 12
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 12
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 13
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 13
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 13
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 14
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 14
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 14
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 14
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 15
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 15
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 15
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 15
    }
  }
  else if (currentState === 1) {
    if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 1
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 1
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 1
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 1
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 18
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 19
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 19
    }
  }
  else if (currentState === 2) {
    if (!r(1) && !r(2) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
  }
  else if (currentState === 3) {
    if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 3
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 3
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 3
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 3
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 24
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 25
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 25
    }
  }
  else if (currentState === 4) {
    if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 1
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 3
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 4
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 4
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 4
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 4
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 4
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 4
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 4
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 4
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 4
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 18
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 19
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 19
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 24
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 25
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 25
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 26
    }
  }
  else if (currentState === 5) {
    if (!r(1) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 28
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 29
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 30
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 30
    }
  }
  else if (currentState === 6) {
    if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 1
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 1
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 1
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 6
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 6
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 6
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 6
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 6
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 6
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 6
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 6
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 6
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 28
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 30
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 30
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 31
    }
  }
  else if (currentState === 7) {
    if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 3
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 3
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 3
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 7
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 7
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 7
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 7
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 7
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 7
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 7
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 7
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 7
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 32
    }
  }
  else if (currentState === 8) {
    if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 1
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 3
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 4
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 4
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 4
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 4
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 4
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 4
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 6
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 6
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 6
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 6
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 6
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 6
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 7
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 7
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 7
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 7
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 7
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 7
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = g
      currentState = 8
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 2
      currentState = 8
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 1
      currentState = 8
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 3
      currentState = 8
    }
  }
  else if (currentState === 9) {
    if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 34
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 35
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 36
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 36
    }
  }
  else if (currentState === 10) {
    if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 10
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 10
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 10
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 10
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 10
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 10
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 34
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 36
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 36
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 37
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 38
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 38
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 39
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 39
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 39
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 40
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 41
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 41
    }
  }
  else if (currentState === 11) {
    if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 11
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 11
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 11
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 11
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 11
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 11
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 42
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 43
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 43
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 44
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 44
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 44
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 45
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 46
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 46
    }
  }
  else if (currentState === 12) {
    if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 10
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 10
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 10
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 11
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 11
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 11
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = g
      currentState = 12
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = 2
      currentState = 12
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = 1
      currentState = 12
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = 4
      currentState = 12
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 26
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 38
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 38
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 39
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 39
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 39
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 43
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 43
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 44
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 44
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 44
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 47
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 47
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 47
    }
  }
  else if (currentState === 13) {
    if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 13
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 13
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 13
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 13
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 13
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 13
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 29
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 35
    }
    else if (!r(1) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 49
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 50
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 50
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 51
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 51
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 52
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 53
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 53
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 54
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 54
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 55
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 55
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 55
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 65
    }
  }
  else if (currentState === 14) {
    if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 13
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 13
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 13
    }
    else if (!r(1) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 14
    }
    else if (!r(1) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 14
    }
    else if (!r(1) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 14
    }
    else if (!r(1) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 14
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 29
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 31
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 35
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 37
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 50
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 50
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 53
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 53
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 55
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 55
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 55
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 56
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 56
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 57
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 57
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 57
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 58
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 58
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 58
    }
  }
  else if (currentState === 15) {
    if (!r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 15
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 15
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 15
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 15
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 32
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 42
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 59
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 59
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 60
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 61
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 61
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 62
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 62
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 62
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 63
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 63
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 64
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 64
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 64
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 65
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 65
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 65
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 65
    }
  }
  else if (currentState === 16) {
    if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 1
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = g
      currentState = 16
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = g
      currentState = 16
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 2
      currentState = 16
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 1
      currentState = 16
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 1
      currentState = 16
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 16
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 16
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 18
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 19
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 19
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 66
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 66
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 66
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 66
    }
  }
  else if (currentState === 17) {
    if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 17
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 17
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 17
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 17
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 17
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 17
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 18
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 18
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 18
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 38
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 38
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 40
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 41
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 41
    }
  }
  else if (currentState === 18) {
    if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 17
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 17
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 17
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 17
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 18
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 18
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 18
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 18
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 18
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 18
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (!r(1) && !r(3) && r(4)) {
      _next_g = g
      currentState = 38
    }
    else if (!r(1) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 38
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 40
    }
  }
  else if (currentState === 19) {
    if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 1
    }
    else if (!r(1) && r(3) && !r(4)) {
      _next_g = g
      currentState = 1
    }
    else if (!r(1) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 1
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (!r(1) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 18
    }
    else if (!r(1) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 19
    }
    else if (!r(1) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 19
    }
  }
  else if (currentState === 20) {
    if (!r(1) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 2
      currentState = 67
    }
    else if (r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 67
    }
  }
  else if (currentState === 21) {
    if (!r(1) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (!r(1) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 68
    }
    else if (r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 68
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 68
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 69
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 69
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 69
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 69
    }
  }
  else if (currentState === 22) {
    if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 3
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = g
      currentState = 22
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = g
      currentState = 22
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 2
      currentState = 22
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 2
      currentState = 22
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 1
      currentState = 22
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 22
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 22
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 24
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 25
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 25
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 70
    }
  }
  else if (currentState === 23) {
    if (r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 23
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 23
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 23
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 23
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 23
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 23
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 24
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 24
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 24
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 43
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 43
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 45
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 46
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 46
    }
  }
  else if (currentState === 24) {
    if (r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 23
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 23
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 23
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 23
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 24
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 24
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 24
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 24
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 24
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 24
    }
    else if (!r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 43
    }
    else if (!r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 43
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 45
    }
  }
  else if (currentState === 25) {
    if (r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 3
    }
    else if (!r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 3
    }
    else if (!r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 3
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (!r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 24
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 25
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 25
    }
  }
  else if (currentState === 26) {
    if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 17
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 17
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 18
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 18
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 18
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 23
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 23
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 24
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 24
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 24
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 26
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 26
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 26
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 26
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 26
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 26
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 26
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 26
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 26
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 38
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 38
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 43
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 43
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 47
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 47
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 47
    }
  }
  else if (currentState === 27) {
    if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = g
      currentState = 27
    }
    else if (!r(1) && !r(3) && r(4)) {
      _next_g = g
      currentState = 27
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 1
      currentState = 27
    }
    else if (!r(1) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 3
      currentState = 27
    }
    else if (!r(1) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 27
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 27
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 27
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 28
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 30
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 30
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && r(3) && r(4)) {
      _next_g = 4
      currentState = 70
    }
  }
  else if (currentState === 28) {
    if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 28
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 28
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 28
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 28
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 28
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 28
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 29
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 29
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 29
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 29
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 29
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 29
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 29
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 52
    }
    else if (!r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 53
    }
    else if (!r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 53
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 68
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 68
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 68
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 68
    }
  }
  else if (currentState === 29) {
    if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 28
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 28
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 28
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 29
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 29
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 29
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 29
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 29
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 29
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 29
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 29
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 29
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 29
    }
    else if (!r(1) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 52
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 53
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 53
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 54
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 54
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 68
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 68
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 68
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 68
    }
  }
  else if (currentState === 30) {
    if (r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (!r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (!r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (!r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 28
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 30
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 30
    }
  }
  else if (currentState === 31) {
    if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 1
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 6
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 6
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 6
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 6
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 6
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 6
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 16
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 16
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 16
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 16
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = g
      currentState = 31
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 2
      currentState = 31
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 1
      currentState = 31
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 3
      currentState = 31
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 66
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 66
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 71
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 71
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 71
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 72
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 72
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 72
    }
  }
  else if (currentState === 32) {
    if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 3
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 7
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 7
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 7
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 7
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 7
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 7
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 22
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 22
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 22
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 22
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 27
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 27
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 27
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 27
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = g
      currentState = 32
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 2
      currentState = 32
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 1
      currentState = 32
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 3
      currentState = 32
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 70
    }
  }
  else if (currentState === 33) {
    if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = g
      currentState = 33
    }
    else if (!r(1) && r(3) && !r(4)) {
      _next_g = g
      currentState = 33
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (!r(1) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = 4
      currentState = 33
    }
    else if (!r(1) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 33
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 33
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 33
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 34
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 36
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 36
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && r(3) && r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 73
    }
  }
  else if (currentState === 34) {
    if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 34
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 34
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 34
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 34
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 34
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 34
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 35
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 35
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 35
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 35
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 35
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 35
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 35
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 49
    }
    else if (!r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 50
    }
    else if (!r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 50
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 67
    }
  }
  else if (currentState === 35) {
    if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 34
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 34
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 34
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 35
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 35
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 35
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 35
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 35
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 35
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 35
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 35
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 35
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 35
    }
    else if (!r(1) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 49
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 50
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 50
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 51
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 51
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 67
    }
  }
  else if (currentState === 36) {
    if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (!r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (!r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (!r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 34
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 36
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 36
    }
  }
  else if (currentState === 37) {
    if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 10
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 10
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 10
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = g
      currentState = 37
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = 2
      currentState = 37
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = 1
      currentState = 37
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = 4
      currentState = 37
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 38
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 38
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 39
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 39
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 39
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 74
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 74
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 74
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 75
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 75
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 75
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = g
      currentState = 76
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 2
      currentState = 76
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 1
      currentState = 76
    }
  }
  else if (currentState === 38) {
    if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 18
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = g
      currentState = 38
    }
    else if (!r(1) && !r(3) && r(4)) {
      _next_g = g
      currentState = 38
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 1
      currentState = 38
    }
    else if (!r(1) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 38
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 40
    }
  }
  else if (currentState === 39) {
    if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 10
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 10
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 10
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 34
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 36
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 36
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 37
    }
    else if (!r(1) && !r(3) && r(4)) {
      _next_g = g
      currentState = 38
    }
    else if (!r(1) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 38
    }
    else if (!r(1) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 39
    }
    else if (!r(1) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 39
    }
    else if (!r(1) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 39
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 40
    }
  }
  else if (currentState === 40) {
    if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 40
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 40
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 40
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 56
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 56
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 77
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 78
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 78
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 78
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 79
    }
  }
  else if (currentState === 41) {
    if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 18
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 38
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 38
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 40
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 41
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 41
    }
  }
  else if (currentState === 42) {
    if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 11
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 11
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 11
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 33
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 33
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 33
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 33
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = g
      currentState = 42
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = 2
      currentState = 42
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = 1
      currentState = 42
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = 4
      currentState = 42
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 43
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 43
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 44
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 44
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 44
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = g
      currentState = 80
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 2
      currentState = 80
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 1
      currentState = 80
    }
  }
  else if (currentState === 43) {
    if (r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 24
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = g
      currentState = 43
    }
    else if (!r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 43
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 2
      currentState = 43
    }
    else if (!r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 43
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 45
    }
  }
  else if (currentState === 44) {
    if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 11
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 11
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 11
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 42
    }
    else if (!r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 43
    }
    else if (!r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 43
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 44
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 44
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 44
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 45
    }
  }
  else if (currentState === 45) {
    if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 45
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 45
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 45
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 59
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 59
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 60
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 81
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 81
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 82
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 83
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 83
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 83
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 84
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 84
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 84
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 84
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 84
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 84
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 84
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 84
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 85
    }
  }
  else if (currentState === 46) {
    if (r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 24
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 43
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 43
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 45
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 46
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 46
    }
  }
  else if (currentState === 47) {
    if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 18
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 24
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 26
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 26
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 26
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 38
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 38
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 43
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 43
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 47
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 47
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 47
    }
  }
  else if (currentState === 48) {
    if (!r(1) && !r(2) && !r(3)) {
      _next_g = 1
      currentState = 86
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 1
      currentState = 86
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 86
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 86
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 86
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 86
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 86
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 87
    }
  }
  else if (currentState === 49) {
    if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 48
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 49
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 49
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 49
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 60
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 63
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 63
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 84
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 84
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 89
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 89
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 89
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 91
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 91
    }
  }
  else if (currentState === 50) {
    if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 34
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 35
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 35
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 35
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 49
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = g
      currentState = 50
    }
    else if (!r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 50
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = 4
      currentState = 50
    }
    else if (!r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 50
    }
  }
  else if (currentState === 51) {
    if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 34
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 35
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 35
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 35
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 35
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 49
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 50
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 50
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 51
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 51
    }
  }
  else if (currentState === 52) {
    if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 48
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 52
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 52
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 52
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 60
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 61
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 61
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 68
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 68
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 81
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 81
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 88
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 88
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 88
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 92
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 92
    }
  }
  else if (currentState === 53) {
    if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 28
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 29
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 29
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 29
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 52
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = g
      currentState = 53
    }
    else if (!r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 53
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 3
      currentState = 53
    }
    else if (!r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 53
    }
  }
  else if (currentState === 54) {
    if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 28
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 29
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 29
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 29
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 29
    }
    else if (!r(1) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 52
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 53
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 53
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 54
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 54
    }
  }
  else if (currentState === 55) {
    if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 13
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 13
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 13
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 29
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 35
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 49
    }
    else if (!r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 50
    }
    else if (!r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 50
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 52
    }
    else if (!r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 53
    }
    else if (!r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 53
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 55
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 55
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 55
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 65
    }
  }
  else if (currentState === 56) {
    if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 40
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 56
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 56
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 78
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 93
    }
  }
  else if (currentState === 57) {
    if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 28
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 29
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 29
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 31
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 31
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 31
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 53
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 53
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 56
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 56
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 57
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 57
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 57
    }
  }
  else if (currentState === 58) {
    if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 34
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 35
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 35
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 37
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 37
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 40
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 50
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 50
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 56
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 56
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 58
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 58
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 58
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 78
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 94
    }
  }
  else if (currentState === 59) {
    if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 45
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 59
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 59
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 60
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 81
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 81
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 83
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 84
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 84
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 84
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 84
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 95
    }
  }
  else if (currentState === 60) {
    if (!r(1) && !r(2) && !r(3)) {
      _next_g = 1
      currentState = 87
    }
    else if (!r(1) && r(3) && r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 87
    }
  }
  else if (currentState === 61) {
    if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 52
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 60
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 61
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 61
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 81
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 81
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 88
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 96
    }
  }
  else if (currentState === 62) {
    if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 32
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 32
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 32
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 59
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 59
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 60
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 61
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 61
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 62
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 62
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 62
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 81
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 81
    }
  }
  else if (currentState === 63) {
    if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 49
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 60
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 63
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 63
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 84
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 84
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 89
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 97
    }
  }
  else if (currentState === 64) {
    if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 42
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 42
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 45
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 59
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 59
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 60
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 63
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 63
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 64
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 64
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 64
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 83
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 84
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 84
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 98
    }
  }
  else if (currentState === 65) {
    if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 49
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 52
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 60
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 61
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 61
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 63
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 63
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 65
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 65
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 65
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 65
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 65
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 88
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 89
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 90
    }
  }
  else if (currentState === 66) {
    if (r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (!r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 69
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 69
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 69
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 69
    }
  }
  else if (currentState === 67) {
    if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 86
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 86
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 86
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 86
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 99
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 99
    }
    else if (r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 99
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 100
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 100
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 1
      currentState = 100
    }
  }
  else if (currentState === 68) {
    if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 70
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 70
    }
    else if (r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 70
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 86
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 86
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 1
      currentState = 86
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 101
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 101
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = 1
      currentState = 101
    }
  }
  else if (currentState === 69) {
    if (r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 70
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 86
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 86
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 99
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 100
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 100
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 101
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 101
    }
    else if (r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 102
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 103
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 103
    }
  }
  else if (currentState === 70) {
    if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && r(3) && r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 102
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 102
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 102
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 102
    }
  }
  else if (currentState === 71) {
    if (r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (!r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 66
    }
    else if (!r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 66
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 71
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 71
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 71
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 72
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 72
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 72
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 92
    }
  }
  else if (currentState === 72) {
    if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 66
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 66
    }
    else if (!r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 66
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 71
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 71
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 71
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 72
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 72
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 72
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 1
      currentState = 92
    }
  }
  else if (currentState === 73) {
    if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 86
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 86
    }
    else if (!r(1) && r(3) && r(4)) {
      _next_g = 2
      currentState = 86
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 100
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 100
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 2
      currentState = 100
    }
  }
  else if (currentState === 74) {
    if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (!r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (!r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 74
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 74
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 74
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 75
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 75
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 75
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 91
    }
  }
  else if (currentState === 75) {
    if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (!r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 74
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 74
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 74
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 75
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 75
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 75
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = 1
      currentState = 91
    }
  }
  else if (currentState === 76) {
    if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 18
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 38
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 38
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = g
      currentState = 76
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 2
      currentState = 76
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 1
      currentState = 76
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 104
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 104
    }
  }
  else if (currentState === 77) {
    if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 56
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 56
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 68
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 68
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 69
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 69
    }
    else if (!r(1) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 77
    }
    else if (!r(1) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 77
    }
    else if (!r(1) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 77
    }
    else if (!r(1) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 77
    }
    else if (!r(1) && !r(3) && r(4)) {
      _next_g = g
      currentState = 78
    }
    else if (!r(1) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 78
    }
    else if (!r(1) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 78
    }
    else if (!r(1) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 104
    }
  }
  else if (currentState === 78) {
    if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 56
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 56
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 77
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = g
      currentState = 78
    }
    else if (!r(1) && !r(3) && r(4)) {
      _next_g = g
      currentState = 78
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 1
      currentState = 78
    }
    else if (!r(1) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 78
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 3
      currentState = 78
    }
    else if (!r(1) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 78
    }
  }
  else if (currentState === 79) {
    if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 1
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 16
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 16
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 16
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 16
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 21
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 21
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 66
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 66
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 69
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 69
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = g
      currentState = 79
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 2
      currentState = 79
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 1
      currentState = 79
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 3
      currentState = 79
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 105
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 105
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 105
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 106
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 106
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 106
    }
  }
  else if (currentState === 80) {
    if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 24
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 43
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 43
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = g
      currentState = 80
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 2
      currentState = 80
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 1
      currentState = 80
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 107
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 107
    }
  }
  else if (currentState === 81) {
    if (!r(1) && !r(2) && !r(4)) {
      _next_g = 1
      currentState = 70
    }
    else if (!r(1) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 70
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 70
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 70
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 70
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 70
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 70
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 87
    }
  }
  else if (currentState === 82) {
    if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 59
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 59
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 60
    }
    else if (r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 81
    }
    else if (r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 81
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 82
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 82
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 82
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 82
    }
    else if (!r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 83
    }
    else if (!r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 83
    }
    else if (!r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 83
    }
    else if (r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 84
    }
    else if (r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 84
    }
    else if (!r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 107
    }
    else if (r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 108
    }
    else if (r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 108
    }
    else if (r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 108
    }
  }
  else if (currentState === 83) {
    if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 59
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 59
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 60
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 81
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 81
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 82
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = g
      currentState = 83
    }
    else if (!r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 83
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 2
      currentState = 83
    }
    else if (!r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 83
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 3
      currentState = 83
    }
    else if (!r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 83
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 84
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 84
    }
    else if (r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 84
    }
    else if (r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 84
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 108
    }
  }
  else if (currentState === 84) {
    if (!r(1) && r(3) && r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (!r(1) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (!r(1) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 99
    }
    else if (r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 99
    }
    else if (!r(1) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 99
    }
    else if (r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 99
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 99
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 99
    }
  }
  else if (currentState === 85) {
    if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 3
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 21
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 21
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 22
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 22
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 22
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 22
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = g
      currentState = 85
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 2
      currentState = 85
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 1
      currentState = 85
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 3
      currentState = 85
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 102
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 102
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 109
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 109
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 109
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 110
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 110
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 110
    }
  }
  else if (currentState === 86) {
    if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 66
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 66
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 66
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 66
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 4
      currentState = 101
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 4
      currentState = 101
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 101
    }
  }
  else if (currentState === 87) {
    if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && r(3) && r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 70
    }
  }
  else if (currentState === 88) {
    if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 48
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 48
    }
    else if (!r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 60
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 61
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 61
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 68
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 81
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 81
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = g
      currentState = 88
    }
    else if (!r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 88
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 2
      currentState = 88
    }
    else if (!r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 88
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 3
      currentState = 88
    }
    else if (!r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 88
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 92
    }
  }
  else if (currentState === 89) {
    if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = g
      currentState = 48
    }
    else if (!r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 48
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 60
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 63
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 63
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 84
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 84
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = g
      currentState = 89
    }
    else if (!r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 89
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = 2
      currentState = 89
    }
    else if (!r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 89
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = 4
      currentState = 89
    }
    else if (!r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 89
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 91
    }
  }
  else if (currentState === 90) {
    if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (!r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 48
    }
    else if (!r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 60
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 61
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 61
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 63
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 63
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 65
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 65
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 65
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 65
    }
    else if (!r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 88
    }
    else if (!r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 88
    }
    else if (!r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 88
    }
    else if (!r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 89
    }
    else if (!r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 89
    }
    else if (!r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 89
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 90
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 90
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 90
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 90
    }
  }
  else if (currentState === 91) {
    if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 33
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 33
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 33
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 33
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 74
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 74
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 74
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 75
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 75
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 75
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 91
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 91
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 91
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 91
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 91
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 91
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 91
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 91
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 111
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 111
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 111
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 111
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 111
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 111
    }
  }
  else if (currentState === 92) {
    if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 27
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 27
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 27
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 27
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 66
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 66
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 71
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 71
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 71
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 72
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 72
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 72
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 92
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 92
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 92
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 92
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 92
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 92
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 92
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 92
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 101
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 101
    }
  }
  else if (currentState === 93) {
    if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 1
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 16
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 16
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 16
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 16
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 18
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 19
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 19
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 66
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 66
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 66
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 66
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 93
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 93
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 93
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 112
    }
  }
  else if (currentState === 94) {
    if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 10
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 10
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 10
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 37
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 37
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 37
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 37
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 38
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 38
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 39
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 39
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 39
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 74
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 74
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 74
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 75
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 75
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 75
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 76
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 76
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 76
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 94
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 94
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 94
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 94
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 113
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 113
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 113
    }
  }
  else if (currentState === 95) {
    if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 3
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 22
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 22
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 22
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 22
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 24
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 25
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 25
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 95
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 95
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 95
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 114
    }
  }
  else if (currentState === 96) {
    if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 5
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 5
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 27
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 27
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 27
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 27
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 27
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 28
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 30
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 30
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 92
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 96
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 96
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 96
    }
  }
  else if (currentState === 97) {
    if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 33
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 33
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 33
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 33
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 34
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 36
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 36
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 91
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 97
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 97
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 97
    }
  }
  else if (currentState === 98) {
    if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 9
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 9
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 11
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 11
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 11
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 33
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 33
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 33
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 33
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 33
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 42
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 42
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 42
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 42
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 43
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 43
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 44
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 44
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 44
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 80
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 80
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 80
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 98
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 98
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 98
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 98
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 115
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 115
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 115
    }
  }
  else if (currentState === 99) {
    if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 21
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 21
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 21
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 21
    }
    else if (!r(1) && r(3) && r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 102
    }
    else if (!r(1) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 102
    }
  }
  else if (currentState === 100) {
    if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 21
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 21
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 66
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 66
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 69
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 69
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 101
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 101
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 102
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 102
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 4
      currentState = 103
    }
  }
  else if (currentState === 101) {
    if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 69
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 69
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 3
      currentState = 100
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 102
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 102
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = 3
      currentState = 103
    }
  }
  else if (currentState === 102) {
    if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 48
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 67
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 68
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 68
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 69
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 69
    }
    else if (!r(1) && r(3) && r(4)) {
      _next_g = 2
      currentState = 86
    }
    else if (!r(1) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 100
    }
    else if (!r(1) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 101
    }
    else if (!r(1) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 103
    }
  }
  else if (currentState === 103) {
    if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 21
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 66
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 69
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 69
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 69
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 69
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 69
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 69
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 69
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 70
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 100
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 100
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 100
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 100
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 101
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 101
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 101
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 101
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 101
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 102
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 102
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 102
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 102
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 102
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 102
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 103
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 103
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 103
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 103
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 103
    }
  }
  else if (currentState === 104) {
    if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 17
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 17
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 18
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 18
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 18
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 38
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 38
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 69
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 69
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = g
      currentState = 76
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 2
      currentState = 76
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 1
      currentState = 76
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = g
      currentState = 104
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = 2
      currentState = 104
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = 1
      currentState = 104
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = 4
      currentState = 104
    }
  }
  else if (currentState === 105) {
    if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 1
    }
    else if (!r(1) && r(3) && !r(4)) {
      _next_g = g
      currentState = 1
    }
    else if (!r(1) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 1
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 21
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 21
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 21
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 21
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 79
    }
    else if (!r(1) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 105
    }
    else if (!r(1) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 105
    }
    else if (!r(1) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 105
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 106
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 106
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 106
    }
  }
  else if (currentState === 106) {
    if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 1
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 1
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 1
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 1
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 16
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 21
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 21
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 21
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 21
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 2
      currentState = 79
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 105
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 105
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 105
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 106
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 106
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 106
    }
  }
  else if (currentState === 107) {
    if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 23
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 23
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 24
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 24
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 24
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 43
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 43
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = g
      currentState = 80
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 2
      currentState = 80
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 1
      currentState = 80
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 102
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 102
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = g
      currentState = 107
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = 2
      currentState = 107
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = 1
      currentState = 107
    }
    else if (!r(1) && !r(2) && !r(4)) {
      _next_g = 4
      currentState = 107
    }
  }
  else if (currentState === 108) {
    if (!r(1) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 70
    }
    else if (r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 70
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 70
    }
    else if (!r(1) && r(3) && r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 87
    }
    else if (!r(1) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 99
    }
    else if (r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 99
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 99
    }
    else if (!r(1) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 102
    }
    else if (r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 102
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 102
    }
  }
  else if (currentState === 109) {
    if (r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 3
    }
    else if (!r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 3
    }
    else if (!r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 3
    }
    else if (r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 21
    }
    else if (r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 21
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 85
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 109
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 109
    }
    else if (!r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 109
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 110
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 110
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 110
    }
  }
  else if (currentState === 110) {
    if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 2
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 3
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 3
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 3
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 3
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 21
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 21
    }
    else if (r(2) && !r(3) && r(4)) {
      _next_g = 4
      currentState = 21
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 22
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 1
      currentState = 85
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 109
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 109
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 109
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 110
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 110
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 110
    }
  }
  else if (currentState === 111) {
    if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && !r(2) && r(4)) {
      _next_g = 3
      currentState = 100
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 100
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 100
    }
  }
  else if (currentState === 112) {
    if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 17
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 17
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 18
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 18
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 18
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 38
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 38
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 69
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 69
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 76
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 76
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 76
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 104
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 104
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 104
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 104
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 112
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 112
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 112
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 112
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 113
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 113
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 113
    }
  }
  else if (currentState === 113) {
    if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 17
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 18
    }
    else if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 38
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 38
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 67
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 76
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 76
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 76
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 104
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = g
      currentState = 113
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 2
      currentState = 113
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 1
      currentState = 113
    }
  }
  else if (currentState === 114) {
    if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 21
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 23
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 23
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 24
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 24
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 24
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 43
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 43
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 80
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 80
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 80
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 102
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 102
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = g
      currentState = 107
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 2
      currentState = 107
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 1
      currentState = 107
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 107
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = g
      currentState = 114
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 2
      currentState = 114
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 1
      currentState = 114
    }
    else if (!r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 114
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 115
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 115
    }
    else if (!r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 1
      currentState = 115
    }
  }
  else if (currentState === 115) {
    if (r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 20
    }
    else if (r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 23
    }
    else if (r(1) && !r(2) && !r(3) && !r(4)) {
      _next_g = 4
      currentState = 24
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = g
      currentState = 43
    }
    else if (r(1) && !r(2) && !r(3) && r(4)) {
      _next_g = 2
      currentState = 43
    }
    else if (!r(1) && r(2) && r(3) && r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && r(2) && r(3) && !r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && r(2) && !r(3) && r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && r(2) && !r(3) && !r(4)) {
      _next_g = 3
      currentState = 73
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = g
      currentState = 80
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 2
      currentState = 80
    }
    else if (!r(1) && !r(2) && r(3) && r(4)) {
      _next_g = 1
      currentState = 80
    }
    else if (!r(1) && !r(2) && r(3) && !r(4)) {
      _next_g = 4
      currentState = 107
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = g
      currentState = 115
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 2
      currentState = 115
    }
    else if (!r(1) && !r(2) && !r(3)) {
      _next_g = 1
      currentState = 115
    }
  }

  return {currentState, g: _next_g}
}