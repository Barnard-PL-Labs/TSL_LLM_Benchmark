if (currentState === 0) {
  if (!pressA && !pressB && !pressC) {
    count = count + stepsize
    stepsize = stepsize
    currentState = 0
  }
  else if (!pressA && !pressB && !pressC) {
    count = count + stepsize
    stepsize = multiplyByThree(stepsize)
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
    stepsize = multiplyByThree(stepsize)
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
    stepsize = multiplyByThree(stepsize)
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
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (!pressA && !pressB && !pressC) {
    count = count
    stepsize = 1
    currentState = 0
  }
  else if (pressA && pressB) {
    currentState = 0
  }
  else if (pressA && pressC) {
    currentState = 0
  }
  else if (pressB && pressC) {
    currentState = 0
  }
  else if (pressA && !pressB && !pressC) {
    count = count + stepsize
    stepsize = multiplyByThree(stepsize)
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
}