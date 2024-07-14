always assume {
  // Predicates for checking the amount in `total`
  isLessThanPoint75(total) := total < 0.75;
  isLessThanOne(total) := total < 1.0;
  isLessThanOnePoint25(total) := total < 1.25;

  // Predicates for checking key presses in `e`
  pressD(e) := e == 'd';
  pressQ(e) := e == 'q';
  pressO(e) := e == 'o';
  press1(e) := e == '1';
  press2(e) := e == '2';
  press3(e) := e == '3';
  pressR(e) := e == 'r';
}

always guarantee {
  // In the guarantee section you would define what the system should do based on the predicates
  // Example: If the 'd' key is pressed and total is less than $0.75, some action might be triggered
  pressD(e) && isLessThanPoint75(total) -> [action <- 'informUnderpaid'];
  
  // Depending on the complexity of the system, you could add more rules here reflecting the system behavior
}
