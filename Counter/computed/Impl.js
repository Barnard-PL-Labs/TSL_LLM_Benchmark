// Assuming `stepsize` and `e` are part of the environment where this code runs
let stepsize = 1; // Default stepsize for incrementing the counter
let e; // This will hold the event object from key presses

// Function to update the counter based on the key pressed
function updateCounter(event) {
    e = event; // Update the global `e` with the latest event

    if (pressA(e)) {
        counter += stepsize; // Increment counter by stepsize when 'a' is pressed
    } else if (pressB(e)) {
        counter += 2 * stepsize; // Example operation for 'b'
    } else if (pressC(e)) {
        counter -= stepsize; // Example operation for 'c'
    }

    console.log(`Counter updated to: ${counter}`);
}

// Predicate to check if 'a' was pressed
function pressA(event) {
    return event.key === 'a';
}

// Predicate to check if 'b' was pressed
function pressB(event) {
    return event.key === 'b';
}

// Predicate to check if 'c' was pressed
function pressC(event) {
    return event.key === 'c';
}

// // Example usage with an event listener for keyboard input
// document.addEventListener('keydown', updateCounter);
