always assume {
  // No specific assumptions are provided for this vending machine.
}

always guarantee {
  // Check if the total is less than various amounts and respond accordingly.
  isLessThanPoint75(total) -> [action <- display("Not enough credit for any item")];
  isLessThanOne(total) -> [action <- display("Add more for item A")];
  isLessThanOnePoint25(total) -> [action <- display("Add more for item B or C")];

  // User input handling: what happens when specific keys are pressed
  pressD(e) -> [action <- dispense("Drink")];
  pressQ(e) -> [action <- dispense("Snack")];
  pressO(e) -> [action <- option("Other items")];
  press1(e) -> [action <- select("Item 1")];
  press2(e) -> [action <- select("Item 2")];
  press3(e) -> [action <- select("Item 3")];
  pressR(e) -> [action <- refund()];
}
