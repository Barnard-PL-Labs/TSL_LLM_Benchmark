always assume {
  // Assumptions about the input signals from the environment.
  (total < 0.75) <-> isLessThanPoint75(total);
  (total < 1) <-> isLessThanOne(total);
  (total < 1.25) <-> isLessThanOnePoint25(total);
  (e == 'd') <-> pressD(e);
  (e == 'q') <-> pressQ(e);
  (e == 'o') <-> pressO(e);
  (e == '1') <-> press1(e);
  (e == '2') <-> press2(e);
  (e == '3') <-> press3(e);
  (e == 'r') <-> pressR(e);
}

always guarantee {
  // Guarantees based on the predicates - here you would define how the system should react based on the inputs.
  // Example:
  isLessThanPoint75(total) -> [display <- "Add more coins"];
  isLessThanOne(total) -> [display <- "Add more coins"];
  isLessThanOnePoint25(total) -> [display <- "Add more coins"];

  // Handling button presses:
  pressD(e) -> [vend <- drink];
  pressQ(e) -> [vend <- snack];
  pressO(e) -> [togglePower()];
  press1(e) -> [selectItem(1)];
  press2(e) -> [selectItem(2)];
  press3(e) -> [selectItem(3)];
  pressR(e) -> [resetMachine()];
}
