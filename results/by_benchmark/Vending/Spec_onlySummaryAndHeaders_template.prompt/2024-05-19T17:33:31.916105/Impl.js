always assume {
  (total < 0.75) -> isLessThanPoint75(total);
  (total < 1) -> isLessThanOne(total);
  (total < 1.25) -> isLessThanOnePoint25(total);
  (e == 'd') -> pressD(e);
  (e == 'q') -> pressQ(e);
  (e == 'o') -> pressO(e);
  (e == '1') -> press1(e);
  (e == '2') -> press2(e);
  (e == '3') -> press3(e);
  (e == 'r') -> pressR(e);
}
