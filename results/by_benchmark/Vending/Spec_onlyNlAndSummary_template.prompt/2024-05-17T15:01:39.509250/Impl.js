always assume {
  // Define the inputs and their exclusive interactions if needed
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
  // Define the behavior of the system based on the inputs
  isLessThanPoint75(total) -> [total < 0.75];
  isLessThanOne(total) -> [total < 1];
  isLessThanOnePoint25(total) -> [total < 1.25];
  pressD(e) -> [e == 'D'];
  pressQ(e) -> [e == 'Q'];
  pressO(e) -> [e == 'O'];
  press1(e) -> [e == '1'];
  press2(e) -> [e == '2'];
  press3(e) -> [e == '3'];
  pressR(e) -> [e == 'R'];
}
