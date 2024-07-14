if (currentState === 0) {
  if (true) {
    currentState = 1
  }
  else if (true) {
    count = count
    count = count + 3
    currentState = 1
  }
  else if (true) {
    count = count
    count = count + 2
    currentState = 1
  }
  else if (true) {
    count = count
    count = count + stepsize
    currentState = 1
  }
  else if (true) {
    count = count + 3
    count = count + 2
    currentState = 1
  }
  else if (true) {
    count = count + 3
    count = count + stepsize
    currentState = 1
  }
  else if (true) {
    count = count + 2
    count = count + stepsize
    currentState = 1
  }
  else if (true) {
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
else if (currentState === 1) {
  if (pressA(e) && pressB(e)) {
    count = count + stepsize
    stepsize = stepsize
    currentState = 0
  }
  else if (pressA(e) && pressB(e)) {
    count = count + stepsize
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (pressA(e) && pressB(e)) {
    count = count + stepsize
    stepsize = 1
    currentState = 0
  }
  else if (pressA(e) && pressB(e)) {
    count = count + 2
    stepsize = stepsize
    currentState = 0
  }
  else if (pressA(e) && pressB(e)) {
    count = count + 2
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (pressA(e) && pressB(e)) {
    count = count + 2
    stepsize = 1
    currentState = 0
  }
  else if (pressA(e) && pressB(e)) {
    count = count + 3
    stepsize = stepsize
    currentState = 0
  }
  else if (pressA(e) && pressB(e)) {
    count = count + 3
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (pressA(e) && pressB(e)) {
    count = count + 3
    stepsize = 1
    currentState = 0
  }
  else if (pressA(e) && pressB(e)) {
    count = count
    stepsize = stepsize
    currentState = 0
  }
  else if (pressA(e) && pressB(e)) {
    count = count
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (pressA(e) && pressB(e)) {
    count = count
    stepsize = 1
    currentState = 0
  }
  else if (pressA(e) && pressC(e)) {
    count = count + stepsize
    stepsize = stepsize
    currentState = 0
  }
  else if (pressA(e) && pressC(e)) {
    count = count + stepsize
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (pressA(e) && pressC(e)) {
    count = count + stepsize
    stepsize = 1
    currentState = 0
  }
  else if (pressA(e) && pressC(e)) {
    count = count + 2
    stepsize = stepsize
    currentState = 0
  }
  else if (pressA(e) && pressC(e)) {
    count = count + 2
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (pressA(e) && pressC(e)) {
    count = count + 2
    stepsize = 1
    currentState = 0
  }
  else if (pressA(e) && pressC(e)) {
    count = count + 3
    stepsize = stepsize
    currentState = 0
  }
  else if (pressA(e) && pressC(e)) {
    count = count + 3
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (pressA(e) && pressC(e)) {
    count = count + 3
    stepsize = 1
    currentState = 0
  }
  else if (pressA(e) && pressC(e)) {
    count = count
    stepsize = stepsize
    currentState = 0
  }
  else if (pressA(e) && pressC(e)) {
    count = count
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (pressA(e) && pressC(e)) {
    count = count
    stepsize = 1
    currentState = 0
  }
  else if (pressB(e) && pressC(e)) {
    count = count + stepsize
    stepsize = stepsize
    currentState = 0
  }
  else if (pressB(e) && pressC(e)) {
    count = count + stepsize
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (pressB(e) && pressC(e)) {
    count = count + stepsize
    stepsize = 1
    currentState = 0
  }
  else if (pressB(e) && pressC(e)) {
    count = count + 2
    stepsize = stepsize
    currentState = 0
  }
  else if (pressB(e) && pressC(e)) {
    count = count + 2
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (pressB(e) && pressC(e)) {
    count = count + 2
    stepsize = 1
    currentState = 0
  }
  else if (pressB(e) && pressC(e)) {
    count = count + 3
    stepsize = stepsize
    currentState = 0
  }
  else if (pressB(e) && pressC(e)) {
    count = count + 3
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (pressB(e) && pressC(e)) {
    count = count + 3
    stepsize = 1
    currentState = 0
  }
  else if (pressB(e) && pressC(e)) {
    count = count
    stepsize = stepsize
    currentState = 0
  }
  else if (pressB(e) && pressC(e)) {
    count = count
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (pressB(e) && pressC(e)) {
    count = count
    stepsize = 1
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    count = count + stepsize
    stepsize = stepsize
    currentState = 1
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    count = count + stepsize
    stepsize = 1
    currentState = 1
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    count = count + 2
    stepsize = stepsize
    currentState = 1
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    count = count + 2
    stepsize = 1
    currentState = 1
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    count = count + 3
    stepsize = stepsize
    currentState = 1
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    count = count + 3
    stepsize = 1
    currentState = 1
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    count = count
    stepsize = stepsize
    currentState = 1
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    count = count
    stepsize = 1
    currentState = 1
  }
  else if (pressA(e) && !pressB(e) && !pressC(e)) {
    count = count + stepsize
    stepsize = multiplyByThree(stepsize)
    currentState = 1
  }
  else if (!pressA(e) && pressB(e) && !pressC(e)) {
    count = count + 2
    stepsize = 1
    currentState = 1
  }
  else if (!pressA(e) && !pressB(e) && pressC(e)) {
    count = count + 3
    stepsize = 1
    currentState = 1
  }
}