always assume {
  // Define predicates related to the 'total' value comparisons
  isLessThanPoint75(total) <-> (total < 0.75);
  isLessThanOne(total) <-> (total < 1);
  isLessThanOnePoint25(total) <-> (total < 1.25);

  // Define predicates related to user key presses, assuming 'e' holds the key press data
  pressD(e) <-> (e == 'd');
  pressQ(e) <-> (e == 'q');
  pressO(e) <-> (e == 'o');
  press1(e) <-> (e == '1');
  press2(e) <-> (e == '2');
  press3(e) <-> (e == '3');
  pressR(e) <-> (e == 'r');
}
