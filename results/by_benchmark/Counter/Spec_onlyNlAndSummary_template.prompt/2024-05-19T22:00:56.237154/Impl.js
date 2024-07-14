// Cell variables
let stepsize = 1; // Initializes stepsize to 1 each program start
let e = { a: false, b: false, c: false }; // Example state of 'e' indicating if keys are pressed

// Functions
function multiplyByThree(stepsize) {
  return stepsize * 3;
}

// Predicates (assuming 'e' is an object with properties 'a', 'b', 'c' that are true when the respective keys are pressed)
function pressA(e) {
  return e.a;
}

function pressB(e) {
  return e.b;
}

function pressC(e) {
  return e.c;
}

// Example usage
console.log("Stepsize: ", stepsize);
console.log("Multiplied by Three: ", multiplyByThree(stepsize));

// Simulating key presses
e = { a: true, b: false, c: false };
console.log("Press A: ", pressA(e)); // Expected: true
console.log("Press B: ", pressB(e)); // Expected: false
console.log("Press C: ", pressC(e)); // Expected: false

// Update stepsize based on the multiplication function
stepsize = multiplyByThree(stepsize);
console.log("Updated Stepsize: ", stepsize);
