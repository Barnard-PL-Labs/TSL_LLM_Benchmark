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
  else if (!pressB(e) && !pressC(e) && !XX(pressA(e))) {
    stepsize = stepsize
    currentState = 0
  }
  else if (!pressB(e) && !pressC(e) && XX(pressB(e))) {
    stepsize = stepsize
    currentState = 0
  }
  else if (!pressB(e) && !pressC(e) && XX(pressC(e))) {
    stepsize = stepsize
    currentState = 0
  }
  else if (!pressB(e) && !pressC(e) && !XX(pressA(e))) {
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (!pressB(e) && !pressC(e) && XX(pressB(e))) {
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (!pressB(e) && !pressC(e) && XX(pressC(e))) {
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (!pressB(e) && !pressC(e) && !XX(pressA(e))) {
    stepsize = 1
    currentState = 0
  }
  else if (!pressB(e) && !pressC(e) && XX(pressB(e))) {
    stepsize = 1
    currentState = 0
  }
  else if (!pressB(e) && !pressC(e) && XX(pressC(e))) {
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
  else if (!pressA(e) && !pressB(e) && pressC(e)) {
    stepsize = 1
    currentState = 0
  }
  else if (!pressA(e) && pressB(e) && !pressC(e)) {
    stepsize = 1
    currentState = 0
  }
  else if (pressA(e) && !pressB(e) && !pressC(e) && XX(pressA(e)) && !XX(pressB(e)) && !XX(pressC(e))) {
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
}