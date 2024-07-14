always assume {
  // Check if the total is less than various amounts
  isLessThanPoint75(total) -> (total < 0.75);
  isLessThanOne(total) -> (total < 1);
  isLessThanOnePoint25(total) -> (total < 1.25);

  // Key press events, assuming `e` is an event object with a property that indicates which key was pressed
  pressD(e) -> (e.key == 'd');
  pressQ(e) -> (e.key == 'q');
  pressO(e) -> (e.key == 'o');
  press1(e) -> (e.key == '1');
  press2(e) -> (e.key == '2');
  press3(e) -> (e.key == '3');
  pressR(e) -> (e.key == 'r');
}
