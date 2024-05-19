// Functions
function multiplyByThree(stepsize) {
  return stepsize * 3;
}

// Predicates
function pressA(e) {
  // Assuming `e` indicates the event or signal when 'a' is pressed
  return e.key === 'a' || e === 'a';
}

function pressB(e) {
  // Assuming `e` indicates the event or signal when 'b' is pressed
  return e.key === 'b' || e === 'b';
}

function pressC(e) {
  // Assuming `e` indicates the event or signal when 'c' is pressed
  return e.key === 'c' || e === 'c';
}
