if (currentState === 0) {
  if (!pressA(e) && !pressB(e) && !pressC(e)) {
    stepsize = multiplyByThree(stepsize)
    count = count + stepsize
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    stepsize = multiplyByThree(stepsize)
    count = count + 2
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    stepsize = multiplyByThree(stepsize)
    count = count + 3
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    stepsize = multiplyByThree(stepsize)
    count = count
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
    count = count + stepsize
    currentState = 0
  }
  else if (!pressA(e) && pressB(e) && !pressC(e)) {
    stepsize = 1
    count = count + 2
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && pressC(e)) {
    stepsize = 1
    count = count + 3
    currentState = 0
  }
}