if (currentState === 0) {
  if (!pressO && !pressQ && !pressR && !press3 && !press1 && !press2 && !pressD) {
    total = total
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press3 && !press1 && !press2 && !pressD) {
    total = total - 1.25
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press3 && !press1 && !press2 && !pressD) {
    total = total - 0.75
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press3 && !press1 && !press2 && !pressD) {
    total = total - 1
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press3 && !press1 && !press2 && !pressD) {
    total = 0
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press3 && !press1 && !press2 && !pressD) {
    total = total + 0.25
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press3 && !press1 && !press2 && !pressD) {
    total = total + 0.1
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press3 && !press1 && !press2 && !pressD) {
    total = total + 1
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press3 && !press1 && !pressD && isLessThanOne(total)) {
    total = total
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press3 && !press1 && !pressD && isLessThanOne(total)) {
    total = total - 1.25
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press3 && !press1 && !pressD && isLessThanOne(total)) {
    total = total - 0.75
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press3 && !press1 && !pressD && isLessThanOne(total)) {
    total = total - 1
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press3 && !press1 && !pressD && isLessThanOne(total)) {
    total = 0
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press3 && !press1 && !pressD && isLessThanOne(total)) {
    total = total + 0.25
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press3 && !press1 && !pressD && isLessThanOne(total)) {
    total = total + 0.1
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press3 && !press1 && !pressD && isLessThanOne(total)) {
    total = total + 1
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press3 && !press2 && !pressD && isLessThanPoint75(total)) {
    total = total
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press3 && !press2 && !pressD && isLessThanPoint75(total)) {
    total = total - 1.25
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press3 && !press2 && !pressD && isLessThanPoint75(total)) {
    total = total - 0.75
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press3 && !press2 && !pressD && isLessThanPoint75(total)) {
    total = total - 1
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press3 && !press2 && !pressD && isLessThanPoint75(total)) {
    total = 0
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press3 && !press2 && !pressD && isLessThanPoint75(total)) {
    total = total + 0.25
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press3 && !press2 && !pressD && isLessThanPoint75(total)) {
    total = total + 0.1
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press3 && !press2 && !pressD && isLessThanPoint75(total)) {
    total = total + 1
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press1 && !press2 && !pressD && isLessThanOnePoint25(total)) {
    total = total
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press1 && !press2 && !pressD && isLessThanOnePoint25(total)) {
    total = total - 1.25
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press1 && !press2 && !pressD && isLessThanOnePoint25(total)) {
    total = total - 0.75
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press1 && !press2 && !pressD && isLessThanOnePoint25(total)) {
    total = total - 1
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press1 && !press2 && !pressD && isLessThanOnePoint25(total)) {
    total = 0
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press1 && !press2 && !pressD && isLessThanOnePoint25(total)) {
    total = total + 0.25
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press1 && !press2 && !pressD && isLessThanOnePoint25(total)) {
    total = total + 0.1
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press1 && !press2 && !pressD && isLessThanOnePoint25(total)) {
    total = total + 1
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
  else if (pressO && press1) {
    currentState = 0
  }
  else if (pressO && press2) {
    currentState = 0
  }
  else if (pressO && pressD) {
    currentState = 0
  }
  else if (pressQ && pressR) {
    currentState = 0
  }
  else if (pressQ && press3) {
    currentState = 0
  }
  else if (pressQ && press1) {
    currentState = 0
  }
  else if (pressQ && press2) {
    currentState = 0
  }
  else if (pressQ && pressD) {
    currentState = 0
  }
  else if (pressR && press3) {
    currentState = 0
  }
  else if (pressR && press1) {
    currentState = 0
  }
  else if (pressR && press2) {
    currentState = 0
  }
  else if (pressR && pressD) {
    currentState = 0
  }
  else if (press3 && press1) {
    currentState = 0
  }
  else if (press3 && press2) {
    currentState = 0
  }
  else if (press3 && pressD) {
    currentState = 0
  }
  else if (press1 && press2) {
    currentState = 0
  }
  else if (press1 && pressD) {
    currentState = 0
  }
  else if (press2 && pressD) {
    currentState = 0
  }
  else if (pressO && !pressQ && !pressR && !press3 && !press1 && !press2 && !pressD) {
    total = total + 1
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && press3 && !press1 && !press2 && !pressD && !isLessThanOnePoint25(total)) {
    total = total - 1.25
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press3 && press1 && !press2 && !pressD && !isLessThanPoint75(total)) {
    total = total - 0.75
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press3 && !press1 && press2 && !pressD && !isLessThanOne(total)) {
    total = total - 1
    currentState = 0
  }
  else if (!pressO && pressQ && !pressR && !press3 && !press1 && !press2 && !pressD) {
    total = total + 0.25
    currentState = 0
  }
  else if (!pressO && !pressQ && pressR && !press3 && !press1 && !press2 && !pressD) {
    total = 0
    currentState = 0
  }
  else if (!pressO && !pressQ && !pressR && !press3 && !press1 && !press2 && pressD) {
    total = total + 0.1
    currentState = 0
  }
}