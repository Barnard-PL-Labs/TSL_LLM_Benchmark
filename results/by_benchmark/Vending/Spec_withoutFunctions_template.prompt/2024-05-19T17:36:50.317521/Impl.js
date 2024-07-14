always assume {
  // Predicates to determine the amount in the 'total' cell
  isLessThanPoint75(total) ; // total < 0.75
  isLessThanOne(total) ; // total < 1.00
  isLessThanOnePoint25(total) ; // total < 1.25

  // Predicates to determine which key was pressed in the 'e' cell
  pressD(e) ; // the 'd' key is pressed
  pressQ(e) ; // the 'q' key is pressed
  pressO(e) ; // the 'o' key is pressed
  press1(e) ; // the '1' key is pressed
  press2(e) ; // the '2' key is pressed
  press3(e) ; // the '3' key is pressed
  pressR(e) ; // the 'r' key is pressed
}
always guarantee {
  // Your system's reactions based on the predicates can be defined here.
  // For example:
  pressD(e) -> [action <- dispenseDrink] ;
  pressQ(e) -> [action <- queryBalance] ;

  // Handling different payment amounts based on 'total'
  isLessThanPoint75(total) -> [action <- displayMessage("Insufficient balance for any item")] ;
  isLessThanOne(total) && !isLessThanPoint75(total) -> [action <- displayMessage("Available item: Small Snack")] ;
  isLessThanOnePoint25(total) && !isLessThanOne(total) -> [action <- displayMessage("Available items: Small Snack, Medium Snack")] ;

  // Reset operation on pressing 'r'
  pressR(e) -> [resetSystem] ;
}
