// Assuming these are the accessible cells representing system states
let cells = {
    stepsize: 1,  // Initial value of stepsize cell
    e: {          // Cell e to represent the state of signals related to key presses
        a: false,
        b: false,
        c: false
    }
};

// Functions to manipulate cells
function multiplyByThree(stepsize) {
    return stepsize * 3;
}

// Predicate functions to check the state of key presses
function pressA(e) {
    return e.a;
}

function pressB(e) {
    return e.b;
}

function pressC(e) {
    return e.c;
}

// Event listener setup for keyboard key presses
document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        // Update cell state for 'a' key press
        cells.e.a = true;
        console.log("Key 'a' pressed.");
    } else if (event.key === 'b') {
        cells.e.b = true;
        console.log("Key 'b' pressed.");
    } else if (event.key === 'c') {
        cells.e.c = true;
        console.log("Key 'c' pressed.");
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === 'a') {
        cells.e.a = false;
    } else if (event.key === 'b') {
        cells.e.b = false;
    } else if (event.key === 'c') {
        cells.e.c = false;
    }
});

// Optional: Function to demonstrate usage
function checkKeyPresses() {
    console.log("Is 'a' pressed?", pressA(cells.e));
    console.log("Is 'b' pressed?", pressB(cells.e));
    console.log("Is 'c' pressed?", pressC(cells.e));
}

// Optionally call checkKeyPresses to see the outputs when keys are pressed
