function updateState({ currentState, e }) {
    // Extracting the variables from the current state
    let { count, stepsize, consecutiveAPresses } = currentState;

    if (pressA(e)) {
        // Increment count by the current step size
        count += stepsize;

        // Update the count of consecutive 'A' presses
        consecutiveAPresses += 1;

        // Check if 'A' has been pressed three times consecutively
        if (consecutiveAPresses === 3) {
            // Increase step size by multiplying it by 3
            stepsize = multiplyByThree(stepsize);
            // Reset consecutive 'A' presses counter
            consecutiveAPresses = 0;
        }
    } else if (pressB(e)) {
        // Increment count by 2
        count += 2;
        // Reset the step size to 1
        stepsize = 1;
        // Reset consecutive 'A' presses counter
        consecutiveAPresses = 0;
    } else if (pressC(e)) {
        // Increment count by 3
        count += 3;
        // Reset the step size to 1
        stepsize = 1;
        // Reset consecutive 'A' presses counter
        consecutiveAPresses = 0;
    }

    // Return the updated state
    return { count, stepsize, consecutiveAPresses };
}
