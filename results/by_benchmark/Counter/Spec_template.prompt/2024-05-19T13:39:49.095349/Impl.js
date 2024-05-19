// Function to multiply stepsize by three
function multiplyByThree(stepsize) {
    return stepsize * 3;
}

// Predicate to check if the 'a' key was pressed
function pressA(e) {
    // Assuming 'e' is an object with properties indicating which key is pressed
    return e.a === true;  // 'a' key press state
}

// Predicate to check if the 'b' key was pressed
function pressB(e) {
    return e.b === true;  // 'b' key press state
}

// Predicate to check if the 'c' key was pressed
function pressC(e) {
    return e.c === true;  // 'c' key press state
}

// Example usage
let e = {
    a: true,
    b: false,
    c: false
};

let stepsize = 10;

console.log("Multiply by three:", multiplyByThree(stepsize));  // Output: 30
console.log("Did press A:", pressA(e));  // Output: true
console.log("Did press B:", pressB(e));  // Output: false
console.log("Did press C:", pressC(e));  // Output: false
