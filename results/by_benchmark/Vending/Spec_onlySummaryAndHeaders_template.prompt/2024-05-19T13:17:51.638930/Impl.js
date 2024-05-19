always assume {
  // Define cell 'total' and 'e' as inputs that the environment controls
}

always guarantee {
  // Define predicates based on the value of 'total'
  isLessThanPoint75(total) -> (total < 0.75);
  isLessThanOne(total) -> (total < 1);
  isLessThanOnePoint25(total) -> (total < 1.25);

  // Define predicates based on the value of 'e' to detect specific key presses
  pressD(e) -> (e == 'd');
  pressQ(e) -> (e == 'q');
  pressO(e) -> (e == 'o');
  press1(e) -> (e == '1');
  press2(e) -> (e == '2');
  press3(e) -> (e == '3');
  pressR(e) -> (e == 'r');
}
