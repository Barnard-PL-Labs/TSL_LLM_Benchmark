always assume {
  // Define the input cell `total` which represents the state of the signal for monetary total
  (total);

  // Define the input cell `e` which represents the event or action taken (e.g., key pressed)
  (e);
}

always guarantee {
  // Predicate to check if total less than $0.75
  isLessThanPoint75(total) -> (total < 0.75);

  // Predicate to check if total less than $1
  isLessThanOne(total) -> (total < 1);

  // Predicate to check if total less than $1.25
  isLessThanOnePoint25(total) -> (total < 1.25);

  // Predicates for key presses based on the event 'e'
  pressD(e) -> (e == 'd');  // User pressed the 'd' key
  pressQ(e) -> (e == 'q');  // User pressed the 'q' key
  pressO(e) -> (e == 'o');  // User pressed the 'o' key
  press1(e) -> (e == '1');  // User pressed the '1' key
  press2(e) -> (e == '2');  // User pressed the '2' key
  press3(e) -> (e == '3');  // User pressed the '3' key
  pressR(e) -> (e == 'r');  // User pressed the 'r' key
}
