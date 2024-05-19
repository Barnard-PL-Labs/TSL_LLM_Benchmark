always assume {
}

always guarantee {
  // Define the behavior for the total amount in the vending machine
  // Check if total is less than various amounts
  isLessThanPoint75(total) -> (total < 0.75);
  isLessThanOne(total) -> (total < 1);
  isLessThanOnePoint25(total) -> (total < 1.25);

  // Define the predicates for button presses
  pressD(e) -> (e.key == 'd');
  pressQ(e) -> (e.key == 'q');
  pressO(e) -> (e.key == 'o');
  press1(e) -> (e.key == '1');
  press2(e) -> (e.key == '2');
  press3(e) -> (e.key == '3');
  pressR(e) -> (e.key == 'r');
}
