if (currentState === 0) {
  if (!pressA(e) && !pressB(e) && !pressC(e)) {
    counter = counter + stepsize
    stepsize = stepsize
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    counter = counter + stepsize
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    counter = counter + stepsize
    stepsize = 1
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    counter = counter + 2
    stepsize = stepsize
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    counter = counter + 2
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    counter = counter + 2
    stepsize = 1
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    counter = counter + 3
    stepsize = stepsize
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    counter = counter + 3
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    counter = counter + 3
    stepsize = 1
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    counter = counter
    stepsize = stepsize
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    counter = counter
    stepsize = multiplyByThree(stepsize)
    currentState = 0
  }
  else if (!pressA(e) && !pressB(e) && !pressC(e)) {
    counter = counter
    stepsize = 1
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
  else if (pressA(e) && pressB(e)) {
    counter = counter + stepsize
    stepsize = stepsize
    currentState = 1
  }
  else if (pressA(e) && pressB(e)) {
    counter = counter + stepsize
    stepsize = multiplyByThree(stepsize)
    currentState = 1
  }
  else if (pressA(e) && pressB(e)) {
    counter = counter + stepsize
    stepsize = 1
    currentState = 1
  }
  else if (pressA(e) && pressB(e)) {
    counter = counter + 2
    stepsize = stepsize
    currentState = 1
  }
  else if (pressA(e) && pressB(e)) {
    counter = counter + 2
    stepsize = multiplyByThree(stepsize)
    currentState = 1
  }
  else if (pressA(e) && pressB(e)) {
    counter = counter + 2
    stepsize = 1
    currentState = 1
  }
  else if (pressA(e) && pressB(e)) {
    counter = counter + 3
    stepsize = stepsize
    currentState = 1
  }
  else if (pressA(e) && pressB(e)) {
    counter = counter + 3
    stepsize = multiplyByThree(stepsize)
    currentState = 1
  }
  else if (pressA(e) && pressB(e)) {
    counter = counter + 3
    stepsize = 1
    currentState = 1
  }
  else if (pressA(e) && pressB(e)) {
    counter = counter
    stepsize = stepsize
    currentState = 1
  }
  else if (pressA(e) && pressB(e)) {
    counter = counter
    stepsize = multiplyByThree(stepsize)
    currentState = 1
  }
  else if (pressA(e) && pressB(e)) {
    counter = counter
    stepsize = 1
    currentState = 1
  }
  else if (pressA(e) && pressC(e)) {
    counter = counter + stepsize
    stepsize = stepsize
    currentState = 1
  }
  else if (pressA(e) && pressC(e)) {
    counter = counter + stepsize
    stepsize = multiplyByThree(stepsize)
    currentState = 1
  }
  else if (pressA(e) && pressC(e)) {
    counter = counter + stepsize
    stepsize = 1
    currentState = 1
  }
  else if (pressA(e) && pressC(e)) {
    counter = counter + 2
    stepsize = stepsize
    currentState = 1
  }
  else if (pressA(e) && pressC(e)) {
    counter = counter + 2
    stepsize = multiplyByThree(stepsize)
    currentState = 1
  }
  else if (pressA(e) && pressC(e)) {
    counter = counter + 2
    stepsize = 1
    currentState = 1
  }
  else if (pressA(e) && pressC(e)) {
    counter = counter + 3
    stepsize = stepsize
    currentState = 1
  }
  else if (pressA(e) && pressC(e)) {
    counter = counter + 3
    stepsize = multiplyByThree(stepsize)
    currentState = 1
  }
  else if (pressA(e) && pressC(e)) {
    counter = counter + 3
    stepsize = 1
    currentState = 1
  }
  else if (pressA(e) && pressC(e)) {
    counter = counter
    stepsize = stepsize
    currentState = 1
  }
  else if (pressA(e) && pressC(e)) {
    counter = counter
    stepsize = multiplyByThree(stepsize)
    currentState = 1
  }
  else if (pressA(e) && pressC(e)) {
    counter = counter
    stepsize = 1
    currentState = 1
  }
  else if (pressB(e) && pressC(e)) {
    counter = counter + stepsize
    stepsize = stepsize
    currentState = 1
  }
  else if (pressB(e) && pressC(e)) {
    counter = counter + stepsize
    stepsize = multiplyByThree(stepsize)
    currentState = 1
  }
  else if (pressB(e) && pressC(e)) {
    counter = counter + stepsize
    stepsize = 1
    currentState = 1
  }
  else if (pressB(e) && pressC(e)) {
    counter = counter + 2
    stepsize = stepsize
    currentState = 1
  }
  else if (pressB(e) && pressC(e)) {
    counter = counter + 2
    stepsize = multiplyByThree(stepsize)
    currentState = 1
  }
  else if (pressB(e) && pressC(e)) {
    counter = counter + 2
    stepsize = 1
    currentState = 1
  }
  else if (pressB(e) && pressC(e)) {
    counter = counter + 3
    stepsize = stepsize
    currentState = 1
  }
  else if (pressB(e) && pressC(e)) {
    counter = counter + 3
    stepsize = multiplyByThree(stepsize)
    currentState = 1
  }
  else if (pressB(e) && pressC(e)) {
    counter = counter + 3
    stepsize = 1
    currentState = 1
  }
  else if (pressB(e) && pressC(e)) {
    counter = counter
    stepsize = stepsize
    currentState = 1
  }
  else if (pressB(e) && pressC(e)) {
    counter = counter
    stepsize = multiplyByThree(stepsize)
    currentState = 1
  }
  else if (pressB(e) && pressC(e)) {
    counter = counter
    stepsize = 1
    currentState = 1
  }
}
else if (currentState === 1) {
  if (true) {
    currentState = 1
  }
  else if (true) {
    counter = counter
    counter = counter + 3
    currentState = 1
  }
  else if (true) {
    counter = counter
    counter = counter + 2
    currentState = 1
  }
  else if (true) {
    counter = counter
    counter = counter + stepsize
    currentState = 1
  }
  else if (true) {
    counter = counter + 3
    counter = counter + 2
    currentState = 1
  }
  else if (true) {
    counter = counter + 3
    counter = counter + stepsize
    currentState = 1
  }
  else if (true) {
    counter = counter + 2
    counter = counter + stepsize
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