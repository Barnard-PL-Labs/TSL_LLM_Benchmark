// Assuming 'stepsize' is a numeric value representing the current step size of a counter.
// Example of a simple function that multiplies 'stepsize' by 3
function multiplyByThree(stepsize) {
    return stepsize * 3;
}

// Assuming 'e' is an object where key presses are recorded as boolean properties.
// Predicate functions to check if certain keys are pressed
function pressA(e) {
    return !!e.a; // returns true if 'a' is pressed, false otherwise
}

function pressB(e) {
    return !!e.b; // returns true if 'b' is pressed, false otherwise
}

function pressC(e) {
    return !!e.c; // returns true if 'c' is pressed, false otherwise
}

// Example interaction with the system:
let e = { a: false, b: true, c: false }; // Example state of 'e'
let stepsize = 10;

console.log("Original stepsize:", stepsize);
console.log("Multiplied by three:", multiplyByThree(stepsize));
console.log("Press A:", pressA(e));
console.log("Press B:", pressB(e));
console.log("Press C:", pressC(e));

// Changing the state of 'e' to simulate a key press
e.a = true;
console.log("After pressing A, Press A:", pressA(e));
