always assume {
  // Here, `total` and `e` are assumed to be inputs from the environment.
  // They should be available as cells, as per your system's design.
}

always guarantee {
  // Predicates related to `total`:
  isLessThanPoint75(total) {
    (total < 0.75);
  }
  
  isLessThanOne(total) {
    (total < 1);
  }
  
  isLessThanOnePoint25(total) {
    (total < 1.25);
  }

  // Predicates related to `e` (assuming 'e' carries event information):
  pressD(e) {
    e == 'd';
  }
  
  pressQ(e) {
    e == 'q';
  }
  
  pressO(e) {
    e == 'o';
  }
  
  press1(e) {
    e == '1';
  }
  
  press2(e) {
    e == '2';
  }
  
  press3(e) {
    e == '3';
  }
  
  pressR(e) {
    e == 'r';
  }
}
