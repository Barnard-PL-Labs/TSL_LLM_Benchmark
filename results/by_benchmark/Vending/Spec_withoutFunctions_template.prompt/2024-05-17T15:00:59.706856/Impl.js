always assume {
  // Define the range for the 'total' cell to ensure correctness of the predicates
  (total >= 0) ;
}

always guarantee {
  // Predicate to check if 'total' is less than 0.75
  isLessThanPoint75: total < 0.75;
  
  // Predicate to check if 'total' is less than 1
  isLessThanOne: total < 1;
  
  // Predicate to check if 'total' is less than 1.25
  isLessThanOnePoint25: total < 1.25;
  
  // Predicates to check for key presses on 'e' (each key represented by a boolean attribute)
  pressD: e.key == 'd';
  pressQ: e.key == 'q';
  pressO: e.key == 'o';
  press1: e.key == '1';
  press2: e.key == '2';
  press3: e.key == '3';
  pressR: e.key == 'r';
}
