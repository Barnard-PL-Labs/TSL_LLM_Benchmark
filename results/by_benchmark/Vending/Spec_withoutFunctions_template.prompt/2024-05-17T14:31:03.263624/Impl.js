always assume {
    // assume mutual exclusivity between key presses
    !(pressD(e) && pressQ(e));
    !(pressD(e) && pressO(e));
    !(pressD(e) && press1(e));
    !(pressD(e) && press2(e));
    !(pressD(e) && press3(e));
    !(pressD(e) && pressR(e));
    !(pressQ(e) && pressO(e));
    !(pressQ(e) && press1(e));
    !(pressQ(e) && press2(e));
    !(pressQ(e) && press3(e));
    !(pressQ(e) && pressR(e));
    !(pressO(e) && press1(e));
    !(pressO(e) && press2(e));
    !(pressO(e) && press3(e));
    !(pressO(e) && pressR(e));
    !(press1(e) && press2(e));
    !(press1(e) && press3(e));
    !(press1(e) && pressR(e));
    !(press2(e) && press3(e));
    !(press2(e) && pressR(e));
    !(press3(e) && pressR(e));
}

always guarantee {
  // Handle monetary value checks
  isLessThanPoint75(total) -> [state <- "Add more money"];
  isLessThanOne(total) && !isLessThanPoint75(total) -> [state <- "Select cheaper product or add money"];
  isLessThanOnePoint25(total) && !isLessThanOne(total) -> [state <- "Select product or add more for premium choices"];

  // Key press actions
  pressD(e) -> [state <- "Dispensed Product D"];
  pressQ(e) -> [state <- "Dispensed Product Q"];
  pressO(e) -> [state <- "Dispensed Product O"];
  press1(e) -> [state <- "Dispensed Product 1"];
  press2(e) -> [state <- "Dispensed Product 2"];
  press3(e) -> [state <- "Dispensed Product 3"];
  pressR(e) -> [state <- "Refund Initiated"];
}
