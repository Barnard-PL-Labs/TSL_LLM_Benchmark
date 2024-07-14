always assume {
  // Define the predicates based on the cell values and events 'total' and 'e'
}

always guarantee {
  // Here you would define the behavior of the system based on the predicates
  (total < 0.75) -> isLessThanPoint75(total);
  (total < 1.00) -> isLessThanOne(total);
  (total < 1.25) -> isLessThanOnePoint25(total);

  (e == 'd') -> pressD(e);
  (e == 'q') -> pressQ(e);
  (e == 'o') -> pressO(e);
  (e == '1') -> press1(e);
  (e == '2') -> press2(e);
  (e == '3') -> press3(e);
  (e == 'r') -> pressR(e);
}
