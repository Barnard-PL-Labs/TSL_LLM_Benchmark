function updateState({currentState, pressL, pressR, cube}) {
    // Ensure mutual exclusion of button presses (Assumption 1)
    if (pressL && pressR) {
        throw new Error("Both buttons cannot be pressed at the same time.");
    }

    // If the left button is pressed (Guarantee 2)
    if (pressL) {
        // Rotate the cube to the left until the right button is pressed
        if (currentState.lastButtonPressed !== 'L') {
            currentState.lastButtonPressed = 'L';
            cube = rotateLeft(cube);
        }
    }
    // If the right button is pressed (Guarantee 3)
    else if (pressR) {
        // Rotate the cube to the right until the left button is pressed
        if (currentState.lastButtonPressed !== 'R') {
            currentState.lastButtonPressed = 'R';
            cube = rotateRight(cube);
        }
    }
    // Maintain the current rotation if no new button is pressed
    else {
        if (currentState.lastButtonPressed === 'L') {
            cube = rotateLeft(cube);
        } else if (currentState.lastButtonPressed === 'R') {
            cube = rotateRight(cube);
        }
    }

    return { currentState, cube };
}
