// Initialize the cell that stores the stepsize
let stepsize = 1;

// Function to simulate pressing keys
let eventState = { a: false, b: false, c: false };

// Function: Multiply stepsize by 3
function multiplyByThree() {
    stepsize *= 3;
    console.log(`New stepsize after multiplying by three: ${stepsize}`);
}

// Predicate: Check if the 'a' key was pressed
function pressA() {
    return eventState.a;
}

// Predicate: Check if the 'b' key was pressed
function pressB() {
    return eventState.b;
}

// Predicate: Check if the 'c' key was pressed
function pressC() {
    return eventState.c;
}

// Simulate key press
function simulateKeyPress(key) {
    // Reset all keys
    eventState = { a: false, b: false, c: false };

    // Set the pressed key to true
    if (eventState.hasOwnProperty(key)) {
        eventState[key] = true;
        console.log(`Key ${key} pressed`);
    }
}

// Example usage
console.log("Starting stepsize:", stepsize);

simulateKeyPress('a');
if (pressA()) {
    console.log("The 'A' key was pressed.");
    multiplyByThree();  // Apply the function based on the predicate
}

simulateKeyPress('b');
if (pressB()) {
    console.log("The 'B' key was pressed.");
    // Additional logic for 'B' key can be added here
}

simulateKeyPress('c');
if (pressC()) {
    console.log("The 'C' key was pressed.");
    // Additional logic for 'C' key can be added here
}
