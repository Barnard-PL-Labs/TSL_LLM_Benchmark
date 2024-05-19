always assume {
  // Define the predicates as boolean expressions based on the current system state
}

always guarantee {
  // Predicates for checking values of the 'total' cell
  isLessThanPoint75(total) <-> (total < 0.75);
  isLessThanOne(total) <-> (total < 1.0);
  isLessThanOnePoint25(total) <-> (total < 1.25);
  
  // Predicates for button presses based on the 'e' cell's signals
  pressD(e) <-> (e == 'd');
  pressQ(e) <-> (e == 'q');
  pressO(e) <-> (e == 'o');
  press1(e) <-> (e == '1');
  press2(e) <-> (e == '2');
  press3(e) <-> (e == '3');
  pressR(e) <-> (e == 'r');
}
