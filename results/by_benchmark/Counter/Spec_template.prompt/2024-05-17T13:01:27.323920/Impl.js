// Functions
function multiplyByThree(stepsize) {
    return stepsize * 3;
}

// Predicates
function pressA(e) {
    // Assuming `e` is an object with keys representing button states
    // and values as booleans indicating whether the key is pressed
    return e.a === true;
}

function pressB(e) {
    // Similar assumption as pressA
    return e.b === true;
}

function pressC(e) {
    // Similar assumption as pressA
    return e.c === true;
}

// Example usage
// Assuming `stepsize` and `e` hold the following values:
let stepsize = 1;
let e = {
    a: true,  // "a" key is pressed
    b: false, // "b" key is not pressed
    c: false  // "c" key is not pressed
};

// Using the functions
let newStepsize = multiplyByThree(stepsize);
console.log(newStepsize); // Output: 3

// Using the predicates
console.log(pressA(e)); // Output: true
console.log(pressB(e)); // Output: false
console.log(pressC(e)); // Output: false
