function updateState({ currentState, e }) {
    // Assuming current state includes a 'cube' object and a 'rotationDirection' ('left', 'right', or 'none')
    const { cube, rotationDirection } = currentState;

    let newRotationDirection = rotationDirection;

    // Check button presses
    if (pressL(e) && rotationDirection !== 'left') {
        // If the left button is pressed and the cube is not currently rotating left
        newRotationDirection = 'left';
        rotateLeft(cube); // Rotate the cube to the left
    } else if (pressR(e) && rotationDirection !== 'right') {
        // If the right button is pressed and the cube is not currently rotating right
        newRotationDirection = 'right';
        rotateRight(cube); // Rotate the cube to the right
    }

    // Update the state with the potentially new rotation direction
    return { 
        cube: cube,
        rotationDirection: newRotationDirection
    };
}

// Helper functions and predicates (to be defined or mocked for testing)
function pressL(e) {
    // Logic to determine if left button is pressed
    return e.leftPressed; // Example access on event object
}

function pressR(e) {
    // Logic to determine if right button is pressed
    return e.rightPressed; // Example access on event object
}

function rotateLeft(cube) {
    // Logic to rotate the cube left
    cube.rotation -= 10; // Example rotation change, adjust as needed
}

function rotateRight(cube) {
    // Logic to rotate the cube right
    cube.rotation += 10; // Example rotation change, adjust as needed
}

// Example of usage:
const initialState = {
    cube: { rotation: 0 },
    rotationDirection: 'none'
};

const event = {
    leftPressed: true,
    rightPressed: false
};

const newState = updateState({ currentState: initialState, e: event });
console.log(newState); // Should show the cube rotated left from its initial state
