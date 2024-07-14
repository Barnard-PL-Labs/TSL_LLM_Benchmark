always assume {
  // Describe the nature of the inputs
  (total is a number); // assuming total is continuously updated based on currency input
  (e is an event);      // e represents an event possibly from keyboard input
}

always guarantee {
  // Define the predicates based on the provided descriptions

  // Predicates for checking the total amount
  isLessThanPoint75(total) -> (total < 0.75);
  isLessThanOne(total) -> (total < 1.0);
  isLessThanOnePoint25(total) -> (total < 1.25);

  // Predicates for checking which key is pressed
  pressD(e) -> (e.key == 'd');
  pressQ(e) -> (e.key == 'q');
  pressO(e) -> (e.key == 'o');
  press1(e) -> (e.key == '1');
  press2(e) -> (e.key == '2');
  press3(e) -> (e.key == '3');
  pressR(e) -> (e.key == 'r');
}
