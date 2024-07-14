always assume {
  // Definition of inputs (total and e) based on the system environment states
  (total < 0.75) ;
  (total < 1) ;
  (total < 1.25) ;
  pressD(e) ;
  pressQ(e) ;
  pressO(e) ;
  press1(e) ;
  press2(e) ;
  press3(e) ;
  pressR(e) ;
}

always guarantee {
  // Predicate Implementations:
  // Checking if total is less than 0.75
  isLessThanPoint75(total) -> (total < 0.75);

  // Checking if total is less than 1
  isLessThanOne(total) -> (total < 1);

  // Checking if total is less than 1.25
  isLessThanOnePoint25(total) -> (total < 1.25);

  // Checking key presses
  pressD(e) -> (e == 'd'); // assumes e is the input character signal
  pressQ(e) -> (e == 'q');
  pressO(e) -> (e == 'o');
  press1(e) -> (e == '1');
  press2(e) -> (e == '2');
  press3(e) -> (e == '3');
  pressR(e) -> (e == 'r');
}
