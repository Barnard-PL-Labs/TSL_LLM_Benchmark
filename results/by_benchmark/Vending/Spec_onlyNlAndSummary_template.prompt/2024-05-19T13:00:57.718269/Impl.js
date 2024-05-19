always assume {
  // Define the conditions for evaluating the total value
  isLessThanPoint75(total) <=> (total < 0.75);
  isLessThanOne(total) <=> (total < 1);
  isLessThanOnePoint25(total) <=> (total < 1.25);
  
  // Define the conditions for evaluating key presses
  pressD(e) <=> (e == 'D' || e == 'd');
  pressQ(e) <=> (e == 'Q' || e == 'q');
  pressO(e) <=> (e == 'O' || e == 'o');
  press1(e) <=> (e == '1');
  press2(e) <=> (e == '2');
  press3(e) <=> (e == '3');
  pressR(e) <=> (e == 'R' || e == 'r');
}

always guarantee {
  // Here you can define how the system should guarantee the behavior based on these predicates
  // Example: if total is less than 0.75, some action might be prohibited
  isLessThanPoint75(total) -> [machine.allowTransaction <- false];

  // Example: key press actions could trigger certain machine behaviors
  pressQ(e) -> [machine.dispenseProduct <- 'soda'];
  pressD(e) -> [machine.dispenseProduct <- 'chips'];
  pressO(e) -> [machine.option <- 'openMenu'];
  press1(e) -> [machine.selectItem <- 1];
  press2(e) -> [machine.selectItem <- 2];
  press3(e) -> [machine.selectItem <- 3];
  pressR(e) -> [machine.reset <- true];
}
