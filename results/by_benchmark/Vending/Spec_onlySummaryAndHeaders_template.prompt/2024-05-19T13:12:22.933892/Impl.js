always assume {
  // Assumptions about the input signals for the total
  isLessThanPoint75(total) ;
  isLessThanOne(total) ;
  isLessThanOnePoint25(total) ;

  // Assumptions about the input signals for the key presses
  (pressD(e) || pressQ(e) || pressO(e) || press1(e) || press2(e) || press3(e) || pressR(e)) ;
  !(pressD(e) && pressQ(e)) ;
  !(pressD(e) && pressO(e)) ;
  !(pressD(e) && press1(e)) ;
  !(pressD(e) && press2(e)) ;
  !(pressD(e) && press3(e)) ;
  !(pressD(e) && pressR(e)) ;
  !(pressQ(e) && pressO(e)) ;
  !(pressQ(e) && press1(e)) ;
  !(pressQ(e) && press2(e)) ;
  !(pressQ(e) && press3(e)) ;
  !(pressQ(e) && pressR(e)) ;
  !(pressO(e) && press1(e)) ;
  !(pressO(e) && press2(e)) ;
  !(pressO(e) && press3(e)) ;
  !(pressO(e) && pressR(e)) ;
  !(press1(e) && press2(e)) ;
  !(press1(e) && press3(e)) ;
  !(press1(e) && pressR(e)) ;
  !(press2(e) && press3(e)) ;
  !(press2(e) && pressR(e)) ;
  !(press3(e) && pressR(e)) ;
}

always guarantee {
  // Guarantees about the behavior of the vending machine with respect to the total
  isLessThanPoint75(total) -> [action <- "display_message: Add more coins"];
  isLessThanOne(total) -> [action <- "display_message: Add more coins"];
  isLessThanOnePoint25(total) -> [action <- "display_message: Add more coins"];

  // Guarantees about the behavior when specific keys are pressed
  pressD(e) -> [action <- "select_drink: Diet Coke"];
  pressQ(e) -> [action <- "select_drink: Quinine Water"];
  pressO(e) -> [action <- "select_drink: Orange Juice"];
  press1(e) -> [action <- "add_coin: 0.25"];
  press2(e) -> [action <- "add_coin: 0.50"];
  press3(e) -> [action <- "add_coin: 0.75"];
  pressR(e) -> [action <- "return_coins"];
}
