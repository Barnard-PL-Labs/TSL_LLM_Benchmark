// Cells
let stepsize = 1;
let e = {
    a: false,
    b: false,
    c: false
};

// Functions
function multiplyByThree(value) {
    return value * 3;
}

// Predicates (returning boolean values based on the state of `e`)
function pressA(e) {
    return e.a;
}

function pressB(e) {
    return e.b;
}

function pressC(e) {
    return e.c;
}

// Simulating key presses using event listeners (assuming keys a, b, c)
document.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
        e.a = true;
    } else if (event.key === 'b') {
        e.b = true;
    } else if (event.key === 'c') {
        e.c = true;
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'a') {
        e.a = false;
    } else if (event.key === 'b') {
        e.b = false;
    } else if (event.key === 'c') {
        e.c = false;
    }
});

// Example usage
document.addEventListener('keydown', (event) => {
    if (pressA(e)) {
        console.log(`Key 'a' was pressed. Counter incremented by: ${stepsize}`);
        stepsize = multiplyByThree(stepsize);  // Update stepsize each time 'a' is pressed
    } else if (pressB(e)) {
        console.log(`Key 'b' was pressed. Resetting stepsize.`);
        stepsize = 1;  // Reset stepsize when 'b' is pressed
    } else if (pressC(e)) {
        console.log(`Key 'c' was pressed. No action defined.`);
    }
});
