// Define the initial state of the cube
let cube = {
    rotation: 'none' // Possible values: 'none', 'left', 'right'
};

function pressL(e) {
    // Simulate the predicate for the left button press
    return e.leftButtonPressed;
}

function pressR(e) {
    // Simulate the predicate for the right button press
    return e.rightButtonPressed;
}

function rotateLeft(cube) {
    // Logic to rotate the cube to the left
    console.log("Rotating Left");
    cube.rotation = 'left';
}

function rotateRight(cube) {
    // Logic to rotate the cube to the right
    console.log("Rotating Right");
    cube.rotation = 'right';
}

function updateState({ currentState, inputEvent }) {
    // Check if both buttons are pressed (which should not happen)
    if (pressL(inputEvent) && pressR(inputEvent)) {
        throw new Error("Both buttons pressed simultaneously, which is invalid.");
    }

    // Determine the action based on the current state and inputs
    if (pressL(inputEvent)) {
        if (currentState.rotation !== 'left') {
            rotateLeft(currentState);
        }
    } else if (pressR(inputEvent)) {
        if (currentState.rotation !== 'right') {
            rotateRight(currentState);
        }
    } else {
        // No button is pressed, maintain current state
        console.log("No button pressed, maintaining current state:", currentState.rotation);
    }

    return { currentState };
}

// Example usage
let inputEvent = { leftButtonPressed: true, rightButtonPressed: false };
let newState = updateState({ currentState: cube, inputEvent: inputEvent });
console.log("Updated State:", newState.currentState);

inputEvent = { leftButtonPressed: false, rightButtonPressed: true };
newState = updateState({ currentState: cube, inputEvent: inputEvent });
console.log("Updated State:", newState.currentState);
