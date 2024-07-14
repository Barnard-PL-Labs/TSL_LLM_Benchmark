// Assuming `stepsize` and `e` are globally accessible variables initialized somewhere in the system

// Initial values
let stepsize = 1; 
let e = {
    aPressed: false,
    bPressed: false,
    cPressed: false
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

// Example usage of updating values
// These would typically be updated based on some event listeners or other system interaction
function simulateKeyPress(key) {
    switch (key) {
        case 'a':
            e.aPressed = true;
            break;
        case 'b':
            e.bPressed = true;
            break;
        case 'c':
            e.cPressed = true;
            break;
        default:
            console.log("Key not recognized");
            break;
    }
}

// Reset keys after processing (should be called after handling the key press logic)
function resetKeyPresses() {
    e.aPressed = false;
    e.bPressed = false;
    e.cPressed = false;
}

// Example of how the system might use these functions and predicates

// Simulate pressing 'a'
simulateKeyPress('a');

// Check if 'a' was pressed and perform an action
if (pressA(e)) {
    console.log("Key 'a' was pressed");
    stepsize = multiplyByThree(stepsize);
    console.log("New stepsize: ", stepsize);
}

// Always reset keypress states after processing to avoid repeated actions
resetKeyPresses();
