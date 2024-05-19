if (currentState === 0) {
  if (!pressA && !pressB && !pressC) {
    count = count + stepsize
    stepsize = stepsize
    currentState = 0
  }
  else if (!pressA && !pressB && !pressC) {
    count = count + stepsize
    stepsize = stepsize * 3
    currentState = 0
  }
  else if (!pressA && !pressB && !pressC) {
    count = count + stepsize
    stepsize = 1
    currentState = 0
  }
  else if (!pressA && !pressB && !pressC) {
    count = count + 2
    stepsize = stepsize
    currentState = 0
  }
  else if (!pressA && !pressB && !pressC) {
    count = count + 2
    stepsize = stepsize * 3
    currentState = 0
  }
  else if (!pressA && !pressB && !pressC) {
    count = count + 2
    stepsize = 1
    currentState = 0
  }
  else if (!pressA && !pressB && !pressC) {
    count = count + 3
    stepsize = stepsize
    currentState = 0
  }
  else if (!pressA && !pressB && !pressC) {
    count = count + 3
    stepsize = stepsize * 3
    currentState = 0
  }
  else if (!pressA && !pressB && !pressC) {
    count = count + 3
    stepsize = 1
    currentState = 0
  }
  else if (!pressA && !pressB && !pressC) {
    count = count
    stepsize = stepsize
    currentState = 0
  }
  else if (!pressA && !pressB && !pressC) {
    count = count
    stepsize = stepsize * 3
    currentState = 0
  }
  else if (!pressA && !pressB && !pressC) {
    count = count
    stepsize = 1
    currentState = 0
  }
  else if (pressA && !pressB && !pressC) {
    count = count + stepsize
    stepsize = stepsize * 3
    currentState = 0
  }
  else if (!pressA && pressB && !pressC) {
    count = count + 2
    stepsize = 1
    currentState = 0
  }
  else if (!pressA && !pressB && pressC) {
    count = count + 3
    stepsize = 1
    currentState = 0
  }
  else if (pressA && pressB) {
    count = count + stepsize
    stepsize = stepsize
    currentState = 1
  }
  else if (pressA && pressB) {
    count = count + stepsize
    stepsize = stepsize * 3
    currentState = 1
  }
  else if (pressA && pressB) {
    count = count + stepsize
    stepsize = 1
    currentState = 1
  }
  else if (pressA && pressB) {
    count = count + 2
    stepsize = stepsize
    currentState = 1
  }
  else if (pressA && pressB) {
    count = count + 2
    stepsize = stepsize * 3
    currentState = 1
  }
  else if (pressA && pressB) {
    count = count + 2
    stepsize = 1
    currentState = 1
  }
  else if (pressA && pressB) {
    count = count + 3
    stepsize = stepsize
    currentState = 1
  }
  else if (pressA && pressB) {
    count = count + 3
    stepsize = stepsize * 3
    currentState = 1
  }
  else if (pressA && pressB) {
    count = count + 3
    stepsize = 1
    currentState = 1
  }
  else if (pressA && pressB) {
    count = count
    stepsize = stepsize
    currentState = 1
  }
  else if (pressA && pressB) {
    count = count
    stepsize = stepsize * 3
    currentState = 1
  }
  else if (pressA && pressB) {
    count = count
    stepsize = 1
    currentState = 1
  }
  else if (pressA && pressC) {
    count = count + stepsize
    stepsize = stepsize
    currentState = 1
  }
  else if (pressA && pressC) {
    count = count + stepsize
    stepsize = stepsize * 3
    currentState = 1
  }
  else if (pressA && pressC) {
    count = count + stepsize
    stepsize = 1
    currentState = 1
  }
  else if (pressA && pressC) {
    count = count + 2
    stepsize = stepsize
    currentState = 1
  }
  else if (pressA && pressC) {
    count = count + 2
    stepsize = stepsize * 3
    currentState = 1
  }
  else if (pressA && pressC) {
    count = count + 2
    stepsize = 1
    currentState = 1
  }
  else if (pressA && pressC) {
    count = count + 3
    stepsize = stepsize
    currentState = 1
  }
  else if (pressA && pressC) {
    count = count + 3
    stepsize = stepsize * 3
    currentState = 1
  }
  else if (pressA && pressC) {
    count = count + 3
    stepsize = 1
    currentState = 1
  }
  else if (pressA && pressC) {
    count = count
    stepsize = stepsize
    currentState = 1
  }
  else if (pressA && pressC) {
    count = count
    stepsize = stepsize * 3
    currentState = 1
  }
  else if (pressA && pressC) {
    count = count
    stepsize = 1
    currentState = 1
  }
  else if (pressB && pressC) {
    count = count + stepsize
    stepsize = stepsize
    currentState = 1
  }
  else if (pressB && pressC) {
    count = count + stepsize
    stepsize = stepsize * 3
    currentState = 1
  }
  else if (pressB && pressC) {
    count = count + stepsize
    stepsize = 1
    currentState = 1
  }
  else if (pressB && pressC) {
    count = count + 2
    stepsize = stepsize
    currentState = 1
  }
  else if (pressB && pressC) {
    count = count + 2
    stepsize = stepsize * 3
    currentState = 1
  }
  else if (pressB && pressC) {
    count = count + 2
    stepsize = 1
    currentState = 1
  }
  else if (pressB && pressC) {
    count = count + 3
    stepsize = stepsize
    currentState = 1
  }
  else if (pressB && pressC) {
    count = count + 3
    stepsize = stepsize * 3
    currentState = 1
  }
  else if (pressB && pressC) {
    count = count + 3
    stepsize = 1
    currentState = 1
  }
  else if (pressB && pressC) {
    count = count
    stepsize = stepsize
    currentState = 1
  }
  else if (pressB && pressC) {
    count = count
    stepsize = stepsize * 3
    currentState = 1
  }
  else if (pressB && pressC) {
    count = count
    stepsize = 1
    currentState = 1
  }
}
else if (currentState === 1) {
  if (true) {
    currentState = 1
  }
  else if (true) {
    count = count
    count = count + 3
    currentState = 1
  }
  else if (true) {
    count = count
    count = count + 2
    currentState = 1
  }
  else if (true) {
    count = count
    count = count + stepsize
    currentState = 1
  }
  else if (true) {
    count = count + 3
    count = count + 2
    currentState = 1
  }
  else if (true) {
    count = count + 3
    count = count + stepsize
    currentState = 1
  }
  else if (true) {
    count = count + 2
    count = count + stepsize
    currentState = 1
  }
  else if (true) {
    currentState = 1
  }
  else if (true) {
    stepsize = 1
    stepsize = stepsize * 3
    currentState = 1
  }
  else if (true) {
    stepsize = 1
    stepsize = stepsize
    currentState = 1
  }
  else if (true) {
    stepsize = stepsize * 3
    stepsize = stepsize
    currentState = 1
  }
}