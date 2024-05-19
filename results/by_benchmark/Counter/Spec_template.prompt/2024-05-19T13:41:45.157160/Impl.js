// Assuming 'stepsize' is a global variable or it will be passed directly to the function
function multiplyByThree(stepsize) {
    return stepsize * 3;
}

// Predicate functions to check if specific keys are pressed
// Assuming 'e' is an event object provided during the key press event
function pressA(e) {
    return e.key === 'a';
}

function pressB(e) {
    return e.key === 'b';
}

function pressC(e) {
    return e.key === 'c';
}

// Example usage within an event listener context
document.addEventListener('keydown', function(event) {
    if (pressA(event)) {
        console.log("Key 'A' was pressed.");
        // Here you could use `multiplyByThree(stepsize)` if 'stepsize' is defined
        // For example, to modify something based on 'stepsize':
        // let newStepSize = multiplyByThree(stepsize);
        // console.log("New Step Size:", newStepSize);
    }

    if (pressB(event)) {
        console.log("Key 'B' was pressed.");
    }

    if (pressC(event)) {
        console.log("Key 'C' was pressed.");
    }
});
