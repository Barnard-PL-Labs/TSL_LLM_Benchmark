function updateState({ currentState, e, stepsize }) {
    // Destructure current state for easy access
    const { count, aPressCounter } = currentState;

    // Initialize new state variables
    let newCount = count;
    let newStepsize = stepsize;
    let newAPressCounter = aPressCounter;

    // Check which key is pressed and update the state accordingly
    if (pressA(e)) {
        if (newAPressCounter === 3) {
            // When 'A' is pressed for the third time consecutively
            newStepsize = multiplyByThree(stepsize);
            newAPressCounter = 0; // reset the counter after increasing stepsize
        }
        newCount += newStepsize;
        newAPressCounter++; // increment the counter for consecutive 'A' presses
    } else if (pressB(e) || pressC(e)) {
        // If either 'B' or 'C' is pressed, reset stepsize to 1
        newStepsize = 1;
        newAPressCounter = 0; // reset the A press counter
        newCount += pressB(e) ? 2 : 3; // increment count by 2 if 'B' is pressed, by 3 if 'C' is pressed
    }

    // Return the new state
    return {
        currentState: {
            count: newCount,
            aPressCounter: newAPressCounter
        },
        stepsize: newStepsize
    };
}
