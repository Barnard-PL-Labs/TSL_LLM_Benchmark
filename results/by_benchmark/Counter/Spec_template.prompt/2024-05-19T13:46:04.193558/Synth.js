if (currentState === 0) {
  if (!pressA(e) && !pressB(e) && !pressC(e)) {
    count = count + 2
    stepsize = stepsize
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    count = count + 2
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    count = count + 2
    stepsize = 1
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    count = count + 1
    stepsize = stepsize
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    count = count + 1
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    count = count + 1
    stepsize = 1
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    count = count + 3
    stepsize = stepsize
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    count = count + 3
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    count = count + 3
    stepsize = 1
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    count = count
    stepsize = stepsize
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    count = count
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    count = count
    stepsize = 1
    currentState = 0
  }
  else if (pressA(e) && pressB(e)) {
    currentState = 0
  }
  else if (pressA(e) && pressC(e)) {
    currentState = 0
  }
  else if (pressB(e) && pressC(e)) {
    currentState = 0
  }
  else if (pressA(e) && !pressB(e) && !pressC(e)) {
    count = count + 1
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (!pressA(e) && pressB(e) && !pressC(e)) {
    count = count + 2
    stepsize = 1
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && pressC(e)) {
    count = count + 3
    stepsize = 1
    currentState = 0
  }
}