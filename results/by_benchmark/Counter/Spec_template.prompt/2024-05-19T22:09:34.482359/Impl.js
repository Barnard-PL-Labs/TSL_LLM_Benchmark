// Simulate cells
let stepsize = 1;  // Starting value of stepsize each program start
let e = { a: false, b: false, c: false };  // Initial states for keypresses

// Function to multiply stepsize by three
function multiplyByThree(stepsize) {
    return stepsize * 3;
}

// Predicates to check if a specific key has been pressed
function pressA(e) {
    return e.a;
}

function pressB(e) {
    return e.b;
}

function pressC(e) {
    return e.c;
}

// To simulate the environment where key states can be changed
function setKeyState(key, state) {
    if (e.hasOwnProperty(key)) {
        e[key] = state;
    }
}

// Example usage
setKeyState('a', true);  // Simulate pressing 'a'
if (pressA(e)) {
    console.log(`'a' key was pressed. Current stepsize: ${stepsize}, New stepsize: ${multiplyByThree(stepsize)}`);
}

setKeyState('b', true);  // Simulate pressing 'b'
if (pressB(e)) {
    console.log(`'b' key was pressed.`);
}

setKeyState('c', true);  // Simulate pressing 'c'
if (pressC(e)) {
    console.log(`'c' key was pressed.`);
}

// Resetting key presses
setKeyState('a', false);
setKeyState('b', false);
setKeyState('c', false);
