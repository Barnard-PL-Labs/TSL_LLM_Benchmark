if (currentState === 0) {
  if (!pressA(e) && !pressB(e) && !pressC(e)) {
    stepsize = stepsize
    counter = counter + stepsize
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    stepsize = stepsize
    counter = counter
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    stepsize = multiplyByThree(stepsize)
    counter = counter + stepsize
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    stepsize = multiplyByThree(stepsize)
    counter = counter
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    stepsize = 1
    counter = counter + stepsize
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    stepsize = 1
    counter = counter
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && pressC(e)) {
    stepsize = 1
    counter = counter + stepsize
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && pressC(e)) {
    stepsize = 1
    counter = counter
    currentState = 0
  }
  else if (!pressA(e) && pressB(e) && !pressC(e)) {
    stepsize = 1
    counter = counter + stepsize
    currentState = 0
  }
  else if (!pressA(e) && pressB(e) && !pressC(e)) {
    stepsize = 1
    counter = counter
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
    stepsize = multiplyByThree(stepsize)
    counter = counter + stepsize
    currentState = 0
  }
}