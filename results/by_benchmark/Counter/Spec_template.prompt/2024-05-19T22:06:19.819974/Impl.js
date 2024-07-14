// Define the cell states
let cells = {
    stepsize: 1,
    e: {
        aPressed: false,
        bPressed: false,
        cPressed: false
    }
};

// Functions
function multiplyByThree(stepsize) {
    return stepsize * 3;
}

// Predicates
function pressA(e) {
    return e.aPressed;
}

function pressB(e) {
    return e.bPressed;
}

function pressC(e) {
    return e.cPressed;
}

// Helper function to reset the state of key presses
function resetKeyPresses() {
    cells.e.aPressed = false;
    cells.e.bPressed = false;
    cells.e.cPressed = false;
}
