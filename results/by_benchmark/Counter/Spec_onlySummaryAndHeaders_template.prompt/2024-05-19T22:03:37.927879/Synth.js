if (currentState === 0) {
  if (!pressA(e) && !pressB(e) && !pressC(e)) {
    e = e + stepsize
    stepsize = stepsize
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    e = e + stepsize
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    e = e + stepsize
    stepsize = 1
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    e = e + 2
    stepsize = stepsize
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    e = e + 2
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    e = e + 2
    stepsize = 1
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    e = e + 3
    stepsize = stepsize
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    e = e + 3
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    e = e + 3
    stepsize = 1
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    e = e
    stepsize = stepsize
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    e = e
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    e = e
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
    e = e + stepsize
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (!pressA(e) && pressB(e) && !pressC(e)) {
    e = e + 2
    stepsize = 1
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && pressC(e)) {
    e = e + 3
    stepsize = 1
    currentState = 0
  }
}