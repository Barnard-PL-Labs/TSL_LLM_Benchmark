// Create a cell to keep track of the step size
let stepsize = 1; // This resets to 1 on each program start as per specification

// Create a cell to keep track of the event state
let e = {};

// Function to multiply stepsize by three
function multiplyByThree(stepsize) {
    return stepsize * 3;
}

// Predicate functions to determine which key was pressed
function pressA(event) {
    return event.key === 'a';
}

function pressB(event) {
    return event.key === 'b';
}

function pressC(event) {
    return event.key === 'c';
}

// Add event listeners to capture key presses
document.addEventListener('keydown', function(event) {
    // Update the event state 'e' with the current event
    e = event;

    // Example usage of the predicates and function
    if (pressA(e)) {
        console.log("Key 'a' was pressed.");
        // Demonstrating the function usage
        console.log("Stepsize before multiplying by three:", stepsize);
        stepsize = multiplyByThree(stepsize);
        console.log("Stepsize after multiplying by three:", stepsize);
    } else if (pressB(e)) {
        console.log("Key 'b' was pressed.");
    } else if (pressC(e)) {
        console.log("Key 'c' was pressed.");
    }
});

