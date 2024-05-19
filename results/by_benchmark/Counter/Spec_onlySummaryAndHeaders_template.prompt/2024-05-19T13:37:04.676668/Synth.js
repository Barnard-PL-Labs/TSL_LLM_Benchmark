if (currentState === 0) {
  if (!pressA(e) && !pressB(e) && !pressC(e)) {
    stepsize = stepsize
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    stepsize = 1
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && pressC(e)) {
    stepsize = 1
    currentState = 0
  }
  else if (!pressA(e) && pressB(e) && !pressC(e)) {
    stepsize = 1
    currentState = 0
  }
  else if (pressA(e) && !pressB(e) && !pressC(e)) {
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (pressA(e) && pressB(e)) {
    stepsize = stepsize
    currentState = 1
  }
  else if (pressA(e) && pressB(e)) {
    stepsize = multiplyByThree(stepsize)
    currentState = 1
  }
  else if (pressA(e) && pressC(e)) {
    stepsize = stepsize
    currentState = 1
  }
  else if (pressA(e) && pressC(e)) {
    stepsize = multiplyByThree(stepsize)
    currentState = 1
  }
  else if (pressB(e) && pressC(e)) {
    stepsize = stepsize
    currentState = 1
  }
  else if (pressB(e) && pressC(e)) {
    stepsize = multiplyByThree(stepsize)
    currentState = 1
  }
}
else if (currentState === 1) {
  if (true) {
    currentState = 1
  }
  else if (true) {
    stepsize = 1
    stepsize = multiplyByThree(stepsize)
    currentState = 1
  }
  else if (true) {
    stepsize = 1
    stepsize = stepsize
    currentState = 1
  }
  else if (true) {
    stepsize = multiplyByThree(stepsize)
    stepsize = stepsize
    currentState = 1
  }
}