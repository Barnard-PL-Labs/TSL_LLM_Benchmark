always assume {
  // Predicate that checks if 'total' is less than 0.75
  isLessThanPoint75(total) <- (total < 0.75);
  
  // Predicate that checks if 'total' is less than 1
  isLessThanOne(total) <- (total < 1);
  
  // Predicate that checks if 'total' is less than 1.25
  isLessThanOnePoint25(total) <- (total < 1.25);
  
  // Predicate to check if the 'd' key is pressed
  pressD(e) <- (e.key == 'd');
  
  // Predicate to check if the 'q' key is pressed
  pressQ(e) <- (e.key == 'q');
  
  // Predicate to check if the 'o' key is pressed
  pressO(e) <- (e.key == 'o');
  
  // Predicate to check if the '1' key is pressed
  press1(e) <- (e.key == '1');
  
  // Predicate to check if the '2' key is pressed
  press2(e) <- (e.key == '2');
  
  // Predicate to check if the '3' key is pressed
  press3(e) <- (e.key == '3');
  
  // Predicate to check if the 'r' key is pressed
  pressR(e) <- (e.key == 'r');
}
