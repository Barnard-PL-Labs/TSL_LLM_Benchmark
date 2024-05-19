if (currentState === 0) {
  if (!press1 && !press2 && !press3 && !pressD && !pressQ && !pressO && !pressR) {
    total = total
    currentState = 0
  }
  else if (!press1 && !press2 && (total < 1.25) && !pressD && !pressQ && !pressO && !pressR) {
    total = total
    currentState = 0
  }
  else if (!press1 && (total < 1.0) && !press3 && !pressD && !pressQ && !pressO && !pressR) {
    total = total
    currentState = 0
  }
  else if ((total < 0.75) && !press2 && !press3 && !pressD && !pressQ && !pressO && !pressR) {
    total = total
    currentState = 0
  }
  else if (!press1 && !press2 && !press3 && !pressD && !pressQ && !pressO && !pressR) {
    total = total - 1.25
    currentState = 0
  }
  else if (!press1 && !press2 && (total < 1.25) && !pressD && !pressQ && !pressO && !pressR) {
    total = total - 1.25
    currentState = 0
  }
  else if (!press1 && (total < 1.0) && !press3 && !pressD && !pressQ && !pressO && !pressR) {
    total = total - 1.25
    currentState = 0
  }
  else if ((total < 0.75) && !press2 && !press3 && !pressD && !pressQ && !pressO && !pressR) {
    total = total - 1.25
    currentState = 0
  }
  else if (!press1 && !press2 && !press3 && !pressD && !pressQ && !pressO && !pressR) {
    total = total - 1.0
    currentState = 0
  }
  else if (!press1 && !press2 && (total < 1.25) && !pressD && !pressQ && !pressO && !pressR) {
    total = total - 1.0
    currentState = 0
  }
  else if (!press1 && (total < 1.0) && !press3 && !pressD && !pressQ && !pressO && !pressR) {
    total = total - 1.0
    currentState = 0
  }
  else if ((total < 0.75) && !press2 && !press3 && !pressD && !pressQ && !pressO && !pressR) {
    total = total - 1.0
    currentState = 0
  }
  else if (!press1 && !press2 && !press3 && !pressD && !pressQ && !pressO && !pressR) {
    total = total - 0.75
    currentState = 0
  }
  else if (!press1 && !press2 && (total < 1.25) && !pressD && !pressQ && !pressO && !pressR) {
    total = total - 0.75
    currentState = 0
  }
  else if (!press1 && (total < 1.0) && !press3 && !pressD && !pressQ && !pressO && !pressR) {
    total = total - 0.75
    currentState = 0
  }
  else if ((total < 0.75) && !press2 && !press3 && !pressD && !pressQ && !pressO && !pressR) {
    total = total - 0.75
    currentState = 0
  }
  else if (!press1 && !press2 && !press3 && !pressD && !pressQ && !pressO && !pressR) {
    total = 0
    currentState = 0
  }
  else if (!press1 && !press2 && (total < 1.25) && !pressD && !pressQ && !pressO && !pressR) {
    total = 0
    currentState = 0
  }
  else if (!press1 && (total < 1.0) && !press3 && !pressD && !pressQ && !pressO && !pressR) {
    total = 0
    currentState = 0
  }
  else if ((total < 0.75) && !press2 && !press3 && !pressD && !pressQ && !pressO && !pressR) {
    total = 0
    currentState = 0
  }
  else if (!press1 && !press2 && !press3 && !pressD && !pressQ && !pressO && !pressR) {
    total = total + 0.25
    currentState = 0
  }
  else if (!press1 && !press2 && (total < 1.25) && !pressD && !pressQ && !pressO && !pressR) {
    total = total + 0.25
    currentState = 0
  }
  else if (!press1 && (total < 1.0) && !press3 && !pressD && !pressQ && !pressO && !pressR) {
    total = total + 0.25
    currentState = 0
  }
  else if ((total < 0.75) && !press2 && !press3 && !pressD && !pressQ && !pressO && !pressR) {
    total = total + 0.25
    currentState = 0
  }
  else if (!press1 && !press2 && !press3 && !pressD && !pressQ && !pressO && !pressR) {
    total = total + 1.0
    currentState = 0
  }
  else if (!press1 && !press2 && (total < 1.25) && !pressD && !pressQ && !pressO && !pressR) {
    total = total + 1.0
    currentState = 0
  }
  else if (!press1 && (total < 1.0) && !press3 && !pressD && !pressQ && !pressO && !pressR) {
    total = total + 1.0
    currentState = 0
  }
  else if ((total < 0.75) && !press2 && !press3 && !pressD && !pressQ && !pressO && !pressR) {
    total = total + 1.0
    currentState = 0
  }
  else if (!press1 && !press2 && !press3 && !pressD && !pressQ && !pressO && !pressR) {
    total = total + 0.1
    currentState = 0
  }
  else if (!press1 && !press2 && (total < 1.25) && !pressD && !pressQ && !pressO && !pressR) {
    total = total + 0.1
    currentState = 0
  }
  else if (!press1 && (total < 1.0) && !press3 && !pressD && !pressQ && !pressO && !pressR) {
    total = total + 0.1
    currentState = 0
  }
  else if ((total < 0.75) && !press2 && !press3 && !pressD && !pressQ && !pressO && !pressR) {
    total = total + 0.1
    currentState = 0
  }
  else if (press1 && press2) {
    currentState = 0
  }
  else if (press1 && press3) {
    currentState = 0
  }
  else if (press1 && pressD) {
    currentState = 0
  }
  else if (press1 && pressQ) {
    currentState = 0
  }
  else if (press1 && pressO) {
    currentState = 0
  }
  else if (press1 && pressR) {
    currentState = 0
  }
  else if (press2 && press3) {
    currentState = 0
  }
  else if (press2 && pressD) {
    currentState = 0
  }
  else if (press2 && pressQ) {
    currentState = 0
  }
  else if (press2 && pressO) {
    currentState = 0
  }
  else if (press2 && pressR) {
    currentState = 0
  }
  else if (press3 && pressD) {
    currentState = 0
  }
  else if (press3 && pressQ) {
    currentState = 0
  }
  else if (press3 && pressO) {
    currentState = 0
  }
  else if (press3 && pressR) {
    currentState = 0
  }
  else if (pressD && pressQ) {
    currentState = 0
  }
  else if (pressD && pressO) {
    currentState = 0
  }
  else if (pressD && pressR) {
    currentState = 0
  }
  else if (pressQ && pressO) {
    currentState = 0
  }
  else if (pressQ && pressR) {
    currentState = 0
  }
  else if (pressO && pressR) {
    currentState = 0
  }
  else if (!press1 && !press2 && !press3 && pressD && !pressQ && !pressO && !pressR) {
    total = total + 0.1
    currentState = 0
  }
  else if (press1 && (total >= 0.75) && !press2 && !press3 && !pressD && !pressQ && !pressO && !pressR) {
    total = total - 0.75
    currentState = 0
  }
  else if (!press1 && press2 && (total >= 1.0) && !press3 && !pressD && !pressQ && !pressO && !pressR) {
    total = total - 1.0
    currentState = 0
  }
  else if (!press1 && !press2 && press3 && (total >= 1.25) && !pressD && !pressQ && !pressO && !pressR) {
    total = total - 1.25
    currentState = 0
  }
  else if (!press1 && !press2 && !press3 && !pressD && !pressQ && pressO && !pressR) {
    total = total + 1.0
    currentState = 0
  }
  else if (!press1 && !press2 && !press3 && !pressD && pressQ && !pressO && !pressR) {
    total = total + 0.25
    currentState = 0
  }
  else if (!press1 && !press2 && !press3 && !pressD && !pressQ && !pressO && pressR) {
    total = 0
    currentState = 0
  }
}