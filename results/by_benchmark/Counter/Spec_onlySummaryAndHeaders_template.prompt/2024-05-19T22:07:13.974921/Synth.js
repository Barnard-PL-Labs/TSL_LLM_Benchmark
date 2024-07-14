if (currentState === 0) {
  if (!pressA(e) && !pressB(e) && !pressC(e)) {
    counter = counter + stepsize
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    counter = counter + 2
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    counter = counter + 3
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    counter = counter
    stepsize = multiplyByThree(stepsize)
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
    counter = counter + stepsize
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (!pressA(e) && pressB(e) && !pressC(e)) {
    counter = counter + 2
    stepsize = 1
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && pressC(e)) {
    counter = counter + 3
    stepsize = 1
    currentState = 0
  }
}