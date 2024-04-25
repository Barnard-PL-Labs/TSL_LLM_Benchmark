if (currentState === 0) {
    if (!pressA(e) && !pressB(e) && !pressC(e)) {
      stepsize = stepsize
      count = count + stepsize
      currentState = 0
    }
    else if (!pressA(e) && !pressB(e) && !pressC(e)) {
      stepsize = stepsize
      count = count + 2
      currentState = 0
    }
    else if (!pressA(e) && !pressB(e) && !pressC(e)) {
      stepsize = stepsize
      count = count + 3
      currentState = 0
    }
    else if (!pressA(e) && !pressB(e) && !pressC(e)) {
      stepsize = stepsize
      count = count
      currentState = 0
    }
    else if (!pressA(e) && !pressB(e) && !pressC(e)) {
      stepsize = stepsize * 3
      count = count + stepsize
      currentState = 0
    }
    else if (!pressA(e) && !pressB(e) && !pressC(e)) {
      stepsize = stepsize * 3
      count = count + 2
      currentState = 0
    }
    else if (!pressA(e) && !pressB(e) && !pressC(e)) {
      stepsize = stepsize * 3
      count = count + 3
      currentState = 0
    }
    else if (!pressA(e) && !pressB(e) && !pressC(e)) {
      stepsize = stepsize * 3
      count = count
      currentState = 0
    }
    else if (!pressA(e) && !pressB(e) && !pressC(e)) {
      stepsize = 1
      count = count + stepsize
      currentState = 0
    }
    else if (!pressA(e) && !pressB(e) && !pressC(e)) {
      stepsize = 1
      count = count + 2
      currentState = 0
    }
    else if (!pressA(e) && !pressB(e) && !pressC(e)) {
      stepsize = 1
      count = count + 3
      currentState = 0
    }
    else if (!pressA(e) && !pressB(e) && !pressC(e)) {
      stepsize = 1
      count = count
      currentState = 0
    }
    else if (pressA(e) && !pressB(e) && !pressC(e) && !pressA(lastE)) {
      stepsize = stepsize
      count = count + stepsize
      currentState = 0
    }
    else if (pressA(e) && !pressB(e) && !pressC(e) && !pressA(lastE)) {
      stepsize = stepsize * 3
      count = count + stepsize
      currentState = 0
    }
    else if (pressA(e) && !pressB(e) && !pressC(e) && !pressA(lastE)) {
      stepsize = 1
      count = count + stepsize
      currentState = 0
    }
    else if (pressA(e) && !pressB(e) && !pressC(e) && !pressA(lastLastE)) {
      stepsize = stepsize
      count = count + stepsize
      currentState = 0
    }
    else if (pressA(e) && !pressB(e) && !pressC(e) && !pressA(lastLastE)) {
      stepsize = stepsize * 3
      count = count + stepsize
      currentState = 0
    }
    else if (pressA(e) && !pressB(e) && !pressC(e) && !pressA(lastLastE)) {
      stepsize = 1
      count = count + stepsize
      currentState = 0
    }
    else if (pressA(e) && pressB(e)) {
      currentState = 0
    }
    else if (pressA(e) && pressC(e)) {
      currentState = 0
    }
    else if (pressA(e) && !multiplyStepSize() && pressA(lastE) && pressA(lastLastE)) {
      currentState = 0
    }
    else if (pressB(e) && pressC(e)) {
      currentState = 0
    }
    else if (pressA(e) && !pressB(e) && !pressC(e) && multiplyStepSize() && pressA(lastE) && pressA(lastLastE)) {
      stepsize = stepsize * 3
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
  