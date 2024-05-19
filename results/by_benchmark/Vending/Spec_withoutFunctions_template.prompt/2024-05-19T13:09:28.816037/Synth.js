if (currentState === 0) {
  if (!isLessThanPoint75(total) && press1(e) && !press2(e) && !press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = total
    currentState = 0
  }
  else if (!press1(e) && !isLessThanOne(total) && press2(e) && !press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = total
    currentState = 0
  }
  else if (!press1(e) && !press2(e) && !isLessThanOnePoint25(total) && press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = total
    currentState = 0
  }
  else if (!isLessThanPoint75(total) && press1(e) && !press2(e) && !press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = total - 1.25
    currentState = 0
  }
  else if (!press1(e) && !isLessThanOne(total) && press2(e) && !press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = total - 1.25
    currentState = 0
  }
  else if (!press1(e) && !press2(e) && !isLessThanOnePoint25(total) && press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = total - 1.25
    currentState = 0
  }
  else if (!isLessThanPoint75(total) && press1(e) && !press2(e) && !press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = total - 0.75
    currentState = 0
  }
  else if (!press1(e) && !isLessThanOne(total) && press2(e) && !press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = total - 0.75
    currentState = 0
  }
  else if (!press1(e) && !press2(e) && !isLessThanOnePoint25(total) && press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = total - 0.75
    currentState = 0
  }
  else if (!isLessThanPoint75(total) && press1(e) && !press2(e) && !press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = total - 1
    currentState = 0
  }
  else if (!press1(e) && !isLessThanOne(total) && press2(e) && !press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = total - 1
    currentState = 0
  }
  else if (!press1(e) && !press2(e) && !isLessThanOnePoint25(total) && press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = total - 1
    currentState = 0
  }
  else if (!isLessThanPoint75(total) && press1(e) && !press2(e) && !press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = 0
    currentState = 0
  }
  else if (!press1(e) && !isLessThanOne(total) && press2(e) && !press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = 0
    currentState = 0
  }
  else if (!press1(e) && !press2(e) && !isLessThanOnePoint25(total) && press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = 0
    currentState = 0
  }
  else if (!isLessThanPoint75(total) && press1(e) && !press2(e) && !press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = total + 0.25
    currentState = 0
  }
  else if (!press1(e) && !isLessThanOne(total) && press2(e) && !press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = total + 0.25
    currentState = 0
  }
  else if (!press1(e) && !press2(e) && !isLessThanOnePoint25(total) && press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = total + 0.25
    currentState = 0
  }
  else if (!isLessThanPoint75(total) && press1(e) && !press2(e) && !press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = total + 0.1
    currentState = 0
  }
  else if (!press1(e) && !isLessThanOne(total) && press2(e) && !press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = total + 0.1
    currentState = 0
  }
  else if (!press1(e) && !press2(e) && !isLessThanOnePoint25(total) && press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = total + 0.1
    currentState = 0
  }
  else if (!isLessThanPoint75(total) && press1(e) && !press2(e) && !press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = total + 1
    currentState = 0
  }
  else if (!press1(e) && !isLessThanOne(total) && press2(e) && !press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = total + 1
    currentState = 0
  }
  else if (!press1(e) && !press2(e) && !isLessThanOnePoint25(total) && press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = total + 1
    currentState = 0
  }
  else if (press1(e) && press2(e)) {
    currentState = 0
  }
  else if (press1(e) && press3(e)) {
    currentState = 0
  }
  else if (press1(e) && pressD(e)) {
    currentState = 0
  }
  else if (press1(e) && pressO(e)) {
    currentState = 0
  }
  else if (press1(e) && pressQ(e)) {
    currentState = 0
  }
  else if (press1(e) && pressR(e)) {
    currentState = 0
  }
  else if (press2(e) && press3(e)) {
    currentState = 0
  }
  else if (press2(e) && pressD(e)) {
    currentState = 0
  }
  else if (press2(e) && pressO(e)) {
    currentState = 0
  }
  else if (press2(e) && pressQ(e)) {
    currentState = 0
  }
  else if (press2(e) && pressR(e)) {
    currentState = 0
  }
  else if (press3(e) && pressD(e)) {
    currentState = 0
  }
  else if (press3(e) && pressO(e)) {
    currentState = 0
  }
  else if (press3(e) && pressQ(e)) {
    currentState = 0
  }
  else if (press3(e) && pressR(e)) {
    currentState = 0
  }
  else if (pressD(e) && pressO(e)) {
    currentState = 0
  }
  else if (pressD(e) && pressQ(e)) {
    currentState = 0
  }
  else if (pressD(e) && pressR(e)) {
    currentState = 0
  }
  else if (pressO(e) && pressQ(e)) {
    currentState = 0
  }
  else if (pressO(e) && pressR(e)) {
    currentState = 0
  }
  else if (pressQ(e) && pressR(e)) {
    currentState = 0
  }
  else if (!press1(e) && !press2(e) && !press3(e) && !pressD(e) && pressO(e) && !pressQ(e) && !pressR(e)) {
    total = total + 1
    currentState = 0
  }
  else if (!press1(e) && isLessThanOne(total) && press2(e) && !press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = total - 1
    currentState = 0
  }
  else if (isLessThanPoint75(total) && press1(e) && !press2(e) && !press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = total - 0.75
    currentState = 0
  }
  else if (!press1(e) && !press2(e) && isLessThanOnePoint25(total) && press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = total - 1.25
    currentState = 0
  }
  else if (!press1(e) && !press2(e) && !press3(e) && pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = total + 0.1
    currentState = 0
  }
  else if (!press1(e) && !press2(e) && !press3(e) && !pressD(e) && !pressO(e) && pressQ(e) && !pressR(e)) {
    total = total + 0.25
    currentState = 0
  }
  else if (!press1(e) && !press2(e) && !press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && pressR(e)) {
    total = 0
    currentState = 0
  }
  else if (!press1(e) && !press2(e) && !press3(e) && !pressD(e) && !pressO(e) && !pressQ(e) && !pressR(e)) {
    total = total
    currentState = 0
  }
}