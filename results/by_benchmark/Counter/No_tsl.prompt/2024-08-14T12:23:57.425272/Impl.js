function updateState({ currentState, e }) {
    // Destructure the necessary state variables
    let { count, stepsize, aPressStreak } = currentState;

    // Check which button is pressed and update the counter and stepsize appropriately
    if (pressA(e)) {
        if (pressB(e) || pressC(e)) {
            // No two counter (button) operations can be performed at the same time
            throw new Error("Simultaneous button presses are not allowed.");
        }

        // Increment the counter by the current stepsize
        count += stepsize;

        // Update the consecutive A press streak
        aPressStreak++;

        // If A is pressed three times consecutively, multiply the stepsize by three
        if (aPressStreak === 3) {
            stepsize = multiplyByThree(stepsize);
            aPressStreak = 0; // Reset the streak
        }
    } else if (pressB(e)) {
        if (pressA(e) || pressC(e)) {
            // No two counter (button) operations can be performed at the same time.
            throw new Error("Simultaneous button presses are not allowed.");
        }

        // Increment the counter by 2
        count += 2;

        // Reset the stepsize and A press streak
        stepsize = 1;
        aPressStreak = 0;
    } else if (pressC(e)) {
        if (pressA(e) || pressB(e)) {
            throw new Error("Simultaneous button presses are not allowed.");
        }

        // Increment the counter by 3
        count += 3;

        // Reset the stepsize and A press streak
        stepsize = 1;
        aPressStreak = 0;
    }

    // Return the updated state
    return { count, stepsize, aPressStreak };
}

// Example initial state
let initialState = {
    count: 0,
    stepsize: 1,
    aPressStreak: 0
};

// Simulate pressing A
let newState = updateState({ currentState: initialState, e: { pressA: () => true, pressB: () => false, pressC: () => false } });
console.log(newState);

// Simulate pressing B
newState = updateState({ currentState: newState, e: { pressA: () => false, pressB: () => true, pressC: () => false } });
console.log(newState);

// Simulate pressing C
newState = updateState({ currentState: newState, e: { pressA: () => false, pressB: () => false, pressC: () => true } });
console.log(newState);
