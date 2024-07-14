// Initialize the stepsize cell with a default value of 1
let stepsize = 1;

// Function to multiply the stepsize by 3
function multiplyByThree(stepsize) {
    return stepsize * 3;
}

// Predicate to check if the 'a' key was pressed
function pressA(e) {
    return e.key === 'a';
}

// Predicate to check if the 'b' key was pressed
function pressB(e) {
    return e.key === 'b';
}

// Predicate to check if the 'c' key was pressed
function pressC(e) {
    return e.key === 'c';
}

// Example usage within an event listener
document.addEventListener('keydown', function(e) {
    if (pressA(e)) {
        console.log(`'a' key was pressed. Incrementing counter by stepsize: ${stepsize}`);
        // Code to increment the counter by stepsize
    }

    if (pressB(e)) {
        console.log(`'b' key was pressed. Resetting stepsize to 1`);
        stepsize = 1; // Reset stepsize to 1 on pressing 'b'
    }

    if (pressC(e)) {
        console.log(`'c' key was pressed. Multiplying stepsize by 3.`);
        stepsize = multiplyByThree(stepsize); // Multiply stepsize by 3 on pressing 'c'
    }
});
