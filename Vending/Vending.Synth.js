if (currentState === 0) {
    if (pressEnter(e) && pressShift(e)) {
      currentState = 0
    }
    else if (pressEnter(e) && pressDelete(e)) {
      currentState = 0
    }
    else if (pressShift(e) && pressDelete(e)) {
      currentState = 0
    }
    else if (pressEnter(e) && !pressShift(e) && !pressDelete(e) && isLessThanTwo(total)) {
      total = total
      currentState = 0
    }
    else if (pressEnter(e) && !pressShift(e) && !pressDelete(e) && isLessThanTwo(total)) {
      total = 0
      currentState = 0
    }
    else if (pressEnter(e) && !pressShift(e) && !pressDelete(e) && isLessThanTwo(total)) {
      total = total + 1
      currentState = 0
    }
    else if (pressEnter(e) && !pressShift(e) && !pressDelete(e) && !isLessThanTwo(total)) {
      total = total - 2
      currentState = 0
    }
    else if (!pressEnter(e) && pressShift(e) && !pressDelete(e)) {
      total = total + 1
      currentState = 0
    }
    else if (!pressEnter(e) && !pressShift(e) && pressDelete(e)) {
      total = 0
      currentState = 0
    }
    else if (!pressEnter(e) && !pressShift(e) && !pressDelete(e)) {
      total = total
      currentState = 0
    }
  }
  