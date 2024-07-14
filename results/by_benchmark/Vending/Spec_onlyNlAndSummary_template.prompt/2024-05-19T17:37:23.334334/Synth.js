if (currentState === 0) {
  if (!pressD && !pressO && !pressQ && !pressR && !press3 && !press2 && !press1) {
    total = total
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press3 && !press2 && !press1) {
    total = total - 1.25
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press3 && !press2 && !press1) {
    total = total - 0.75
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press3 && !press2 && !press1) {
    total = total - 1
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press3 && !press2 && !press1) {
    total = 0
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press3 && !press2 && !press1) {
    total = total + 0.25
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press3 && !press2 && !press1) {
    total = total + 0.1
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press3 && !press2 && !press1) {
    total = total + 1
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press3 && !press2 && isLessThanPoint75(total)) {
    total = total
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press3 && !press2 && isLessThanPoint75(total)) {
    total = total - 1.25
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press3 && !press2 && isLessThanPoint75(total)) {
    total = total - 0.75
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press3 && !press2 && isLessThanPoint75(total)) {
    total = total - 1
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press3 && !press2 && isLessThanPoint75(total)) {
    total = 0
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press3 && !press2 && isLessThanPoint75(total)) {
    total = total + 0.25
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press3 && !press2 && isLessThanPoint75(total)) {
    total = total + 0.1
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press3 && !press2 && isLessThanPoint75(total)) {
    total = total + 1
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press3 && !press1 && isLessThanOne(total)) {
    total = total
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press3 && !press1 && isLessThanOne(total)) {
    total = total - 1.25
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press3 && !press1 && isLessThanOne(total)) {
    total = total - 0.75
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press3 && !press1 && isLessThanOne(total)) {
    total = total - 1
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press3 && !press1 && isLessThanOne(total)) {
    total = 0
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press3 && !press1 && isLessThanOne(total)) {
    total = total + 0.25
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press3 && !press1 && isLessThanOne(total)) {
    total = total + 0.1
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press3 && !press1 && isLessThanOne(total)) {
    total = total + 1
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press2 && !press1 && isLessThanOnePoint25(total)) {
    total = total
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press2 && !press1 && isLessThanOnePoint25(total)) {
    total = total - 1.25
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press2 && !press1 && isLessThanOnePoint25(total)) {
    total = total - 0.75
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press2 && !press1 && isLessThanOnePoint25(total)) {
    total = total - 1
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press2 && !press1 && isLessThanOnePoint25(total)) {
    total = 0
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press2 && !press1 && isLessThanOnePoint25(total)) {
    total = total + 0.25
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press2 && !press1 && isLessThanOnePoint25(total)) {
    total = total + 0.1
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press2 && !press1 && isLessThanOnePoint25(total)) {
    total = total + 1
    currentState = 0
  }
  else if (pressD && pressO) {
    currentState = 0
  }
  else if (pressD && pressQ) {
    currentState = 0
  }
  else if (pressD && pressR) {
    currentState = 0
  }
  else if (pressD && press3) {
    currentState = 0
  }
  else if (pressD && press2) {
    currentState = 0
  }
  else if (pressD && press1) {
    currentState = 0
  }
  else if (pressO && pressQ) {
    currentState = 0
  }
  else if (pressO && pressR) {
    currentState = 0
  }
  else if (pressO && press3) {
    currentState = 0
  }
  else if (pressO && press2) {
    currentState = 0
  }
  else if (pressO && press1) {
    currentState = 0
  }
  else if (pressQ && pressR) {
    currentState = 0
  }
  else if (pressQ && press3) {
    currentState = 0
  }
  else if (pressQ && press2) {
    currentState = 0
  }
  else if (pressQ && press1) {
    currentState = 0
  }
  else if (pressR && press3) {
    currentState = 0
  }
  else if (pressR && press2) {
    currentState = 0
  }
  else if (pressR && press1) {
    currentState = 0
  }
  else if (press3 && press2) {
    currentState = 0
  }
  else if (press3 && press1) {
    currentState = 0
  }
  else if (press2 && press1) {
    currentState = 0
  }
  else if (pressD && !pressO && !pressQ && !pressR && !press3 && !press2 && !press1) {
    total = total + 0.1
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && press3 && !press2 && !press1 && !isLessThanOnePoint25(total)) {
    total = total - 1.25
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press3 && press2 && !press1 && !isLessThanOne(total)) {
    total = total - 1
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && !pressR && !press3 && !press2 && press1 && !isLessThanPoint75(total)) {
    total = total - 0.75
    currentState = 0
  }
  else if (!pressD && pressO && !pressQ && !pressR && !press3 && !press2 && !press1) {
    total = total + 1
    currentState = 0
  }
  else if (!pressD && !pressO && pressQ && !pressR && !press3 && !press2 && !press1) {
    total = total + 0.25
    currentState = 0
  }
  else if (!pressD && !pressO && !pressQ && pressR && !press3 && !press2 && !press1) {
    total = 0
    currentState = 0
  }
}