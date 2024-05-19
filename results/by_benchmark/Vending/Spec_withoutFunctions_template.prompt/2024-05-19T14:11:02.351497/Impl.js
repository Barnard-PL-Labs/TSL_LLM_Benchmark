always assume {
  // Define the predicates based on the boolean checks for various conditions.
  isLessThanPoint75(total) -> (total < 0.75);
  isLessThanOne(total) -> (total < 1);
  isLessThanOnePoint25(total) -> (total < 1.25);
  pressD(e) -> (e == 'd');
  pressQ(e) -> (e == 'q');
  pressO(e) -> (e == 'o');
  press1(e) -> (e == '1');
  press2(e) -> (e == '2');
  press3(e) -> (e == '3');
  pressR(e) -> (e == 'r');
}

always guarantee {
  // Your system's behavior definitions will go here.
  // Use these predicates to guide the system's guarantees about actions it should take.
  // For example:
  pressD(e) -> [action <- dispenseDrink];
  pressQ(e) -> [action <- queryStatus];
  pressO(e) -> [action <- openCompartment];
  
  isLessThanOne(total) -> [canPurchaseSmallItem <- false];
  isLessThanOnePoint25(total) -> [canPurchaseLargeItem <- false];
}
