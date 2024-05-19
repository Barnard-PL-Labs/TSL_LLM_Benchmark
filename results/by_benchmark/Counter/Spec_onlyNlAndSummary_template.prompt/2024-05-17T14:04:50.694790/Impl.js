// Assuming `stepsize` is a global variable that changes depending on system state
let stepsize = 1; // Initial value of stepsize

// Assuming `e` represents event object possibly from a key press event
let e = {
    a: false,
    b: false,
    c: false
};

// Function that multiplies `stepsize` by 3
function multiplyByThree(stepsize) {
    return stepsize * 3;
}

// Predicate to check if 'a' key was pressed
function pressA(event) {
    return event.a;
}

// Predicate to check if 'b' key was pressed
function pressB(event) {
    return event.b;
}

// Predicate to check if 'c' key was pressed
function pressC(event) {
    return event.c;
}

// Example of handling key press events to update the `e` object
document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'a':
            e.a = true;
            break;
        case 'b':
            e.b = true;
            break;
        case 'c':
            e.c = true;
            break;
        default:
            // Handle other keys or do nothing
    }
});

document.addEventListener('keyup', function(event) {
    switch (event.key) {
        case 'a':
            e.a = false;
            break;
        case 'b':
            e.b = false;
            break;
        case 'c':
            e.c = false;
            break;
        default:
            // Handle other keys or do nothing
    }
});

// Sample usage
console.log(multiplyByThree(stepsize)); // Output the result of multiplying stepsize by 3
console.log(pressA(e)); // Check if 'a' was pressed
console.log(pressB(e)); // Check if 'b' was pressed
console.log(pressC(e)); // Check if 'c' was pressed
