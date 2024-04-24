if (currentState === 0) {
    if (pressC(e)) {
      currentState = 0
    }
    else if (pressB(e)) {
      currentState = 0
    }
    else if (!pressC(e) && !pressA(e) && !pressB(e)) {
      stepsize = multiplyByThree(stepsize)
      count = count
      currentState = 0
    }
    else if (!pressC(e) && !pressA(e) && !pressB(e)) {
      count = count + 3
      stepsize = multiplyByThree(stepsize)
      currentState = 0
    }
    else if (!pressC(e) && !pressA(e) && !pressB(e)) {
      count = count + 2
      stepsize = multiplyByThree(stepsize)
      currentState = 0
    }
    else if (!pressC(e) && !pressA(e) && !pressB(e)) {
      count = count + stepsize
      stepsize = multiplyByThree(stepsize)
      currentState = 0
    }
    else if (!pressC(e) && pressA(e) && !pressB(e) && !pressA(last_e)) {
      count = count + stepsize
      stepsize = multiplyByThree(stepsize)
      currentState = 0
    }
    else if (!pressC(e) && pressA(e) && !pressB(e) && !pressA(last_e2)) {
      count = count + stepsize
      stepsize = multiplyByThree(stepsize)
      currentState = 0
    }
    else if (!pressC(e) && pressA(e) && !pressB(e) && pressA(last_e) && pressA(last_e2)) {
      count = count + stepsize
      stepsize = multiplyByThree(stepsize)
      currentState = 0
    }
  }
  