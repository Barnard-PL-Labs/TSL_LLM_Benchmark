function updateState({ currentState, e }) {
    // Initialize variables from current state
    let { count, stepsize, consecutiveA } = currentState;

    if (pressA(e)) {
        // If A is pressed, check if it has been pressed 3 times consecutively
        if (consecutiveA === 2) { // Already pressed three times, this is the fourth
            stepsize = multiplyByThree(stepsize);
            consecutiveA = 0; // Reset the consecutive A count after increasing stepsize
        } else {
            consecutiveA += 1; // Increment the consecutive A count
        }
        count += stepsize; // Increment counter by stepsize
    } else if (pressB(e)) {
        count += 2; // Increment counter by 2
        stepsize = 1; // Reset stepsize to 1
        consecutiveA = 0; // Reset consecutive A count
    } else if (pressC(e)) {
        count += 3; // Increment counter by 3
        stepsize = 1; // Reset stepsize to 1
        consecutiveA = 0; // Reset consecutive A count
    }

    // Return the updated state
    return {
        count: count,
        stepsize: stepsize,
        consecutiveA: consecutiveA,
    };
}

// Example usage
let currentState = {
    count: 0,
    stepsize: 1,
    consecutiveA: 0,
};
let e = {
    // Simulate button presses
};

// Update state based on e (environment inputs)
let newState = updateState({ currentState, e });

// newState would now hold the updated count, stepsize, and consecutiveA
