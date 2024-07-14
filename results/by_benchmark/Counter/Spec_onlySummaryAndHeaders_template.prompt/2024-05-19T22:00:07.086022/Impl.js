// Assuming stepsize is globally defined or managed in the context where these functions are used
let stepsize = 1; // Initialize stepsize as specified

// Function to multiply the stepsize by three
function multiplyByThree(stepsize) {
    return stepsize * 3;
}

// Predicate to check if 'a' key was pressed
function pressA(e) {
    return e.key === 'a';
}

// Predicate to check if 'b' key was pressed
function pressB(e) {
    return e.key === 'b';
}

// Predicate to check if 'c' key was pressed
function pressC(e) {
    return e.key === 'c';
}
