always assume {
  // Predicates to signal various key presses
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

  // Predicates to signal the state of total
  (total < 0.75) <-> isLessThanPoint75(total);
  (total < 1) <-> isLessThanOne(total);
  (total < 1.25) <-> isLessThanOnePoint25(total);
}

always guarantee {
  // Define system responses based on key presses and total value
  pressD(e) -> [systemActionD <- true];
  pressQ(e) -> [systemActionQ <- true];
  pressO(e) -> [systemActionO <- true];
  press1(e) -> [systemAction1 <- true];
  press2(e) -> [systemAction2 <- true];
  press3(e) -> [systemAction3 <- true];
  pressR(e) -> [systemActionR <- true];
  
  // Define system responses based on the total value conditions
  isLessThanPoint75(total) -> [enableActionPoint75 <- true];
  isLessThanOne(total) -> [enableActionOne <- true];
  isLessThanOnePoint25(total) -> [enableActionOnePoint25 <- true];
}
