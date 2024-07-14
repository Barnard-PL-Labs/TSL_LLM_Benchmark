// Cell definitions
let stepsize = 1;  // This represents the stepsize cell, initialized to 1
let e = {};  // This represents the 'e' cell, which will store key press states

// Function to multiply the stepsize by three
function multiplyByThree(stepsize) {
    return stepsize * 3;
}

// Predicates to check if specific keys are pressed
function pressA(e) {
    return e['A'] || false;  // Returns true if 'A' is true in the e object, otherwise false
}

function pressB(e) {
    return e['B'] || false;  // Returns true if 'B' is true in the e object, otherwise false
}

function pressC(e) {
    return e['C'] || false;  // Returns true if 'C' is true in the e object, otherwise false
}

// Example usage and setup to simulate key presses
document.addEventListener('keydown', function(event) {
    const keyName = event.key.toUpperCase();  // Normalize the key name to uppercase
    if (keyName === 'A' || keyName === 'B' || keyName === 'C') {
        e[keyName] = true;  // Mark the key as pressed in the 'e' object
    }
});

document.addEventListener('keyup', function(event) {
    const keyName = event.key.toUpperCase();  // Normalize the key name to uppercase
    if (keyName === 'A' || keyName === 'B' || keyName === 'C') {
        e[keyName] = false;  // Mark the key as not pressed in the 'e' object
    }
});

// Logic to handle stepsize modification based on key press
setInterval(() => {
    if (pressA(e)) {
        console.log("Key A is pressed. Incrementing counter by stepsize:", stepsize);
        // Here you might increment some counter by stepsize
    }
    if (pressB(e)) {
        console.log("Key B is pressed. Multiplying stepsize by 3.");
        stepsize = multiplyByThree(stepsize);
    }
    if (pressC(e)) {
        console.log("Key C is pressed. Resetting stepsize to 1.");
        stepsize = 1;
    }
}, 1000);  // Check every 1000 milliseconds (1 second)
